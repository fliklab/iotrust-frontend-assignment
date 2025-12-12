# IoTrust 실기 전형 과제

디센트 모바일 지갑의 Discovery 메인 화면 구현 과제입니다.

## 개발 환경

### 코어

- Node.js: v22.21.1
- pnpm (패키지 매니저)
- Vite: v7.2.4 (빌드 도구)
- React: v19.2.0
- TypeScript: v5.9.3

### 주요 라이브러리

- **tanstack/react-query** (v5.90.12): 서버 상태 관리, 캐싱, 무한 스크롤
- **tanstack/react-virtual** (v3.13.13): 가상 스크롤링
- **zustand** (v5.0.9): 전역 상태 관리 (언어, 플랫폼, 환경)
- **react-router-dom** (v7.10.1): 클라이언트 라우팅
- **react-i18next** (v16.4.1) + **i18next** (v25.7.2): 다국어 지원
- **vanilla-extract** (v1.17.5): CSS-in-TS 스타일링
- **lucide-react** (v0.560.0): 아이콘

### 개발 도구

- ESLint (v9.39.1) + Prettier (v3.7.4): 코드 품질 및 포맷팅
- @trivago/prettier-plugin-sort-imports: import 정렬

## 실행 방법

### 개발 환경에서 실행

```bash
pnpm install
pnpm dev
```

### 환경별 빌드

```bash
pnpm build:dev    # development 환경 빌드
pnpm build:stage  # staging 환경 빌드
pnpm build:prod   # production 환경 빌드
```

### 환경 변수

| 변수명                          | 설명                                       |
| ------------------------------- | ------------------------------------------ |
| `VITE_API_BASE_URL`             | API 서버 URL (현재 mock 사용으로 미사용)   |
| `VITE_IMAGE_BASE_URL`           | 원본 이미지 서버 URL                       |
| `VITE_OPTIMIZED_IMAGE_BASE_URL` | WebP 이미지 서버 URL                       |
| `VITE_ENV`                      | 환경 구분 (development/staging/production) |

> [참고] JSON mock data와 이미지(PNG, WebP)를 제공하기 위한 BASE URL을 사용하고 있습니다. 각 환경별로 URL은 다르지만, 실제 응답 데이터는 동일합니다.

### 테스트 플래그 (개발 환경 전용)

| 플래그                   | 설명                        | 기본값 |
| ------------------------ | --------------------------- | ------ |
| `VITE_TEST_LARGE_LIST`   | 1000개 아이템 리스트 테스트 | `true` |
| `VITE_MOCK_DELAY`        | Mock 요청 지연 시간 (ms)    | `200`  |
| `VITE_MOCK_FAILURE_RATE` | 요청 실패 확률 (0-100%)     | `10`   |

## 구현

### 폴더 구조

```
src/
├── app/                    # 앱 설정 및 프로바이더
│   ├── providers/          # Context Providers (device, i18n, query)
│   ├── router/             # 라우팅 설정
│   └── store/              # Zustand 전역 스토어
├── features/               # 기능별 모듈
│   ├── banner/             # 배너 캐러셀
│   ├── favorites/          # 즐겨찾기
│   ├── home/               # 홈 화면
│   └── service-list/       # 서비스 리스트 (검색, 무한스크롤)
│       ├── api/            # API 함수
│       ├── components/     # UI 컴포넌트
│       └── hooks/          # 커스텀 훅
├── mocks/                  # Mock 데이터 및 핸들러
│   ├── data/               # Mock 데이터 (언어별 분리)
│   └── handlers/           # API 핸들러
└── shared/                 # 공통 모듈
    ├── hooks/              # 공통 훅
    ├── lib/                # 유틸리티 함수
    ├── styles/             # 스타일 토큰, 믹스인
    ├── types/              # 공통 타입 정의
    └── ui/                 # 공통 UI 컴포넌트
```

**설계 원칙**

- **Feature-based 구조**: 기능 단위로 폴더 분리, 각 feature는 독립적으로 동작
- **관심사 분리**: api / components / hooks 로 역할별 분리
- **Public API**: 각 폴더의 `index.ts`로 외부 노출 제어
- **shared**: 2개 이상 feature에서 사용되면 `shared/`로 이동

### 주요 구현

#### 이미지 최적화

- `<picture>` + `<source>` 태그를 활용하여 WebP 이미지를 우선 로드하고, 미지원 브라우저에서는 PNG로 폴백합니다.
- Lazy Loading을 기본 적용하되, 배너의 첫 번째 이미지는 Eager Load로 LCP(Largest Contentful Paint)를 최적화합니다.
- WebP 이미지 서빙을 위해 별도 서버를 구축하고 `VITE_OPTIMIZED_IMAGE_BASE_URL` 환경 변수로 관리합니다.

- 관련 파일: `src/shared/ui/OptimizedImage/OptimizedImage.tsx`

#### 언어/디바이스 결정 전략

- **언어**: URL 경로(`/ko`, `/en`) → `navigator.language` → 기본값(`en`) 순으로 결정합니다.
- **플랫폼**: Query param(`?platform=`) → User Agent → 기본값(`android`) 순으로 결정합니다.

- 관련 파일: `src/app/providers/i18n/detectLanguage.ts`, `src/app/providers/device/deviceInfo.ts`, `src/app/store/app.store.ts`

#### 가상 스크롤 & 무한 스크롤

- `@tanstack/react-virtual`의 Window Virtualizer를 사용하여 외부 window 스크롤에 맞춘 가상화를 구현합니다.
- `scrollMargin`을 동적으로 계산하여 헤더/배너 영역을 고려한 정확한 스크롤 위치를 보장합니다.
- `useInfiniteQuery`를 활용한 페이지네이션으로 대용량 리스트(1000개 이상)를 효율적으로 처리합니다.

- 관련 파일: `src/features/service-list/components/ServiceList.tsx`, `src/features/service-list/hooks/useFetchServices.ts`

#### 에러 핸들링

- 모든 API 요청에 최대 3회 재시도 + 지수 백오프(1초 → 2초 → 4초)를 적용합니다.
- Fetch More 실패 시에도 기존 데이터를 유지하여 사용자 경험을 보호합니다.
- 재시도 현황은 콘솔에 로깅하여 디버깅을 지원합니다.

- 관련 파일: `src/features/service-list/hooks/useFetchServices.ts`, `src/features/banner/hooks/useFetchBannerList.ts`, `src/features/favorites/hooks/useFavorites.ts`

#### 검색 필터링

- 클라이언트 사이드에서 name, description 필드를 대상으로 필터링합니다.
- Debounce를 적용하여 불필요한 연산을 방지합니다.
- 검색 결과가 부족할 경우 자동으로 추가 데이터를 Fetch합니다.

- 관련 파일: `src/features/service-list/hooks/useServiceSearch.ts`, `src/features/service-list/components/SearchInput.tsx`

#### 상태 관리

- **전역 상태**: Zustand로 언어, 플랫폼, 환경 정보를 관리합니다.
- **서버 상태**: React Query로 캐싱, 백그라운드 리페치를 처리합니다.
- **즐겨찾기**: Optimistic Update로 즉각적인 UI 반응을 제공하고, 실패 시 롤백합니다.

- 관련 파일: `src/app/store/app.store.ts`, `src/app/providers/query/queryClient.ts`, `src/features/favorites/hooks/useFavorites.ts`

#### UI/UX

- **배너**: 5초 자동 재생, 드래그/스와이프, 무한 루프
- **바텀시트**: slideUp 애니메이션, ESC 닫기, 배경 스크롤 방지
- **공통 컴포넌트**: ListItem, Skeleton, ErrorFallback, SectionTitle

- 관련 파일: `src/features/banner/components/CarouselBanner.tsx`, `src/shared/ui/BottomSheet/BottomSheet.tsx`, `src/shared/ui/ListItem/ListItem.tsx`, `src/shared/ui/Skeleton/Skeleton.tsx`

#### 테스트 지원

- 개발 환경 전용 플래그(`VITE_TEST_LARGE_LIST`, `VITE_MOCK_DELAY`, `VITE_MOCK_FAILURE_RATE`)로 1000개의 리스트, 네트워크 에러를 테스트할 수 있습니다

- 관련 파일: `.env.development`, `src/mocks/handlers/services.handler.ts`

## AI 활용 전략

### 사용 도구

- ChatGPT: 요구사항 분석, 아키텍처 설계 논의
- Claude Code: 코드 작성, 리팩토링, 디버깅

### 워크플로우

Spec Driven Development 기반으로 다음 단계를 거쳐 개발을 진행했습니다.

1. **요구사항 분석**: 과제 명세를 분석하고 기능별 구현 전략을 수립.
2. **아키텍처 설계**: 전략을 바탕으로 폴더 구조와 컴포넌트 계층 결정.
3. **작업 순서 결정**: 관심사별로 파일을 분리하고 결합도가 낮은 순서로 작업을 계획.
4. **구현**: 결정된 계획에 따라 코드 구현. AI가 작성한 코드 혼용.
5. **리팩토링**: 구현 이후 코드 개선.

### 핵심 원칙

- AI 생성 코드는 반드시 검토 후 적용합니다.
- 아키텍처 결정은 직접 수행하고, AI는 구현 보조 역할로 활용합니다.
- 생성된 코드의 동작 원리를 이해한 후에만 커밋합니다.
