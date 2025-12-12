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

## 폴더 구조

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

## 주요 구현

👉 자세한 고민 과정을 [NOTE.md](NOTE.md)에 추가로 첨부하였습니다.

#### 이미지 최적화

- `<picture>` + `<source>` 태그를 활용하여 WebP 이미지를 우선 로드하고, 미지원 브라우저에서는 PNG로 폴백합니다.
- Lazy Loading을 기본 적용하되, 배너의 첫 번째 이미지는 Eager Load로 LCP(Largest Contentful Paint)를 최적화합니다.
- WebP 이미지 서빙을 위해 간단한 API를 별도로 구축했습니다. `VITE_OPTIMIZED_IMAGE_BASE_URL` 환경 변수로 관리합니다.

- API 구현 Repo: https://github.com/fliklab/mock-data/

- 관련 파일: [`OptimizedImage.tsx`](src/shared/ui/OptimizedImage/OptimizedImage.tsx)

- 관련 파일: `src/shared/ui/OptimizedImage/OptimizedImage.tsx`

#### 언어/디바이스 결정 전략

- **언어**:
  - URL 경로(`/ko`, `/en`) → `navigator.language` → 기본값(`en`) 순으로 결정.
- **디바이스**:
  - Query param(`?platform=`) → User Agent → 기본값(`android`) 순으로 결정.
  - 디바이스가 query param으로 결정 될 일은 잘 없겠지만, 필요시 추가하면 우선 적용되도록 하였습니다.

- 관련 파일: [`detectLanguage.ts`](src/app/providers/i18n/detectLanguage.ts), [`deviceInfo.ts`](src/app/providers/device/deviceInfo.ts), [`app.store.ts`](src/app/store/app.store.ts)

- 관련 파일: `src/app/providers/i18n/detectLanguage.ts`, `src/app/providers/device/deviceInfo.ts`, `src/app/store/app.store.ts`

#### 가상 스크롤 & 무한 스크롤

- `@tanstack/react-virtual`의 Window Virtualizer를 사용하여 외부 window 스크롤에 맞춘 가상화 구현.
- `scrollMargin`을 동적으로 계산하여 헤더/배너 영역을 고려한 정확한 스크롤 위치를 보장.
- `useInfiniteQuery`를 활용한 페이지네이션으로 대용량 리스트를 효율적으로 처리.

- 관련 파일: [`ServiceList.tsx`](src/features/service-list/components/ServiceList.tsx), [`useFetchServices.ts`](src/features/service-list/hooks/useFetchServices.ts)

- 관련 파일: `src/features/service-list/components/ServiceList.tsx`, `src/features/service-list/hooks/useFetchServices.ts`

#### 에러 핸들링

- 모든 API 요청에 최대 3회 재시도 + 지수 백오프(1초 → 2초 → 4초)를 적용
- Fetch More 실패 시에도 기존 데이터를 유지하면서 재시도.

- 관련 파일: [`useFetchServices.ts`](src/features/service-list/hooks/useFetchServices.ts), [`useFetchBannerList.ts`](src/features/banner/hooks/useFetchBannerList.ts), [`useFavorites.ts`](src/features/favorites/hooks/useFavorites.ts)

- 관련 파일: `src/features/service-list/hooks/useFetchServices.ts`, `src/features/banner/hooks/useFetchBannerList.ts`, `src/features/favorites/hooks/useFavorites.ts`

#### 검색 필터링

- 클라이언트 사이드에서 name, description 필드를 대상으로 필터링.
- Debounce를 적용하여 불필요한 연산을 방지.
- 검색 결과가 부족할 경우 자동으로 추가 데이터를 Fetch.

- 관련 파일: [`useServiceSearch.ts`](src/features/service-list/hooks/useServiceSearch.ts), [`SearchInput.tsx`](src/features/service-list/components/SearchInput.tsx)

- 관련 파일: `src/features/service-list/hooks/useServiceSearch.ts`, `src/features/service-list/components/SearchInput.tsx`

#### 상태 관리

- **전역 상태**: Zustand로 언어, 플랫폼, 환경 정보 관리.
- **서버 상태**: React Query로 캐싱, 백그라운드 refetch 처리.
- **즐겨찾기**: Optimistic Update로 즉각적인 UI 반응을 제공하고, 실패 시 롤백합니다.

- 관련 파일: [`app.store.ts`](src/app/store/app.store.ts), [`queryClient.ts`](src/app/providers/query/queryClient.ts), [`useFavorites.ts`](src/features/favorites/hooks/useFavorites.ts)

#### UI/UX

- **배너**: 5초 자동 재생, 드래그/스와이프, 무한 루프
- **바텀시트**: slideUp 애니메이션, ESC 닫기, 배경 스크롤 방지
- **공통 컴포넌트**: ListItem, Skeleton, ErrorFallback, SectionTitle

- 관련 파일: [`CarouselBanner.tsx`](src/features/banner/components/CarouselBanner.tsx), [`BottomSheet.tsx`](src/shared/ui/BottomSheet/BottomSheet.tsx), [`ListItem.tsx`](src/shared/ui/ListItem/ListItem.tsx), [`Skeleton.tsx`](src/shared/ui/Skeleton/Skeleton.tsx)

#### 테스트 지원

- 개발 환경 전용 플래그(`VITE_TEST_LARGE_LIST`, `VITE_MOCK_DELAY`, `VITE_MOCK_FAILURE_RATE`)로 1000개의 리스트, 네트워크 에러를 테스트할 수 있도록 했습니다.

- 관련 파일: [`.env.development`](.env.development), [`services.handler.ts`](src/mocks/handlers/services.handler.ts)

- 관련 파일: `.env.development`, `src/mocks/handlers/services.handler.ts`

## AI 활용 전략

### 사용 도구

- ChatGPT: 요구사항 분석, 아키텍처 설계 논의
- Claude Code: 코드 작성, 리팩토링, 디버깅

### 워크플로우

Spec Driven Development 기반으로 다음 단계를 거쳐 개발을 진행했습니다.AI가 생성한 코드는 모두 직접 검토 후에 적용하였습니다.
각 과정에서 작성된 문서를 바탕으로 개발에 대한 Context를 캐싱하여 일관성 있는 개발을 유지할 수 있었습니다.

1. **요구사항 분석**: 과제 명세를 분석하고 기능별 구현 전략을 수립.
2. **아키텍처 설계**: 전략을 바탕으로 구체적인 구현 방식 및 컴포넌트 계층 결정.
3. **작업 순서 결정**: 관심사별로 낮은 결합도를 유지하면서 Task를 분리하여 작업 계획
4. **구현**: 결정된 계획에 따라 코드 구현. AI가 작성한 코드 혼용.
5. **리팩토링**: 잘못된 부분 수정 및 코드 개선.

## 아쉬운 점

### 에러 핸들링

- 에러 계층별로 섬세하게 에러 핸들링을 하고 싶었지만, 어느 정도 뭉뚱그려 처리한 부분이 있습니다. 404/500 등에 따른 차이, 오프라인 감지 등에 따라 다르게 처리했다면 더 좋았을 것 같습니다. 그리고 UI를 통해 어떤 에러인지 확인할 수 있도록 했을 것입니다.
- 전체적으로 에러 처리에 대한 일관성이 부족한 점도 아쉽습니다.
- 또한 Fetch More 도중 에러가 날 경우 사용자에게 에러에 대한 피드백이 없어서 적절한 UI로 구현이 필요할 것 같습니다.
- API 응답이 빈 리스트일 때에 대한 대응이 되어있지 않아서, 이 부분도 시간이 있었다면 추가했을 것 같습니다.

### 이미지 최적화

이미지 최적화에서 Intersection Observer 기반으로 lazy load 동작을 좀 더 보장하도록 이중 구현하려고 했으나 시간상 `loading="lazy"`만 추가하였습니다.

### 바텀시트 slide down

바텀시트를 종료할 때 슬라이드 애니메이션이 동작하지 않는 버그가 있습니다. onClose 호출 시 컴포넌트가 즉시 언마운트되면서 그런 것 같습니다.

### 설계 - 관심사 분리 및 재사용 관련

관심사에 따라 컴포넌트 및 로직을 분리하여, 관심사를 분리하는 것을 지향하였으나 한 파일에 몰아서 작성한 부분들이 있습니다. 예를 들면 ServiceList.tsx에서 UI를 담당하는 부분을 제외하고 커스텀 훅으로 분리할 수 있을 것 같습니다. 최종 구현 후 리팩토링하려고 했지만 시간 관계상 그대로 제출하게 되었습니다.

또한 Vanilla Extract의 Sprinkles, recipe를 좀 더 적극적으로 활용하여 재사용성을 높일 수 있을 것 같습니다. 공통 정의한 디자인 토큰을 충분히 활용하지 않고 중복으로 작성한 부분도 많이 있습니다. 현재는 스타일과 관련된 코드를 컴포넌트와 분리하는 역할 정도만 하고 있습니다.

상수들이 여러파일에 분산 되어 있는데, `src/shared/constants/`처럼 한 곳에 모아 두어도 좋았을 것 같습니다.

### 테스트 코드

TDD 방식으로 설계하지는 않았지만 테스트 코드를 통해 유지보수가 용이하게 만들 수 있었을 것 같습니다.
