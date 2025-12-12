# NOTES

```
개발 과정에서 고민하며 적었던 메모입니다.
실제 구현과 거의 일치하지만 약간의 차이가 있을 수 있습니다.
정제된 형태는 아니지만, 참고로 해서 평가해주시면 감사하겠습니다.
```

## 개발 환경

- node v22.21.1, pnpm
- vite + typescript + react

## API mocking

- 가이드에 따라 mock data 생성 및 적절한 타입 생성
- mock data 기반 api - GET, POST, DELETE 비동기 함수 구현
- react-query 기반 api hook 에서 api 함수 사용
- device, language 에 따라 mock data 별도 파일로 저장
- webp 서빙을 하려면 별도 서버가 있어야 함.(vercel에 배포)

## 폴더 구조

- feature based: 기능에 따라 폴더를 묶는 것을 지향, 공통으로 사용되는 파일은 `shared/*` 에 위치
- 결합도를 낮추고 재사용성을 고려한 코드 작성.
- UI와 도메인 컴포넌트 구분, 커스텀 hook 분리 등 관심사에 따라 파일을 나누어서 관심사 분리 지향.
- 하나의 컴포넌트/기능이라도 한 폴더 내 여러 코드로 나누어 작성하고 Public API(index.ts) 로 export.

## 스타일

- vanilla-extract

## 상태 관리

- 전역 상태 - zustand 기반
  - 즐겨찾기
  - 현재 언어 / 디바이스 등
- 지역 상태: 컴포넌트 별 지역 상태 useState 또는 context기반(compound component 사용시)

## 라우팅

- react-router-dom 기반
- URL 경로로 언어 구분: `/ko`, `/en`
- 루트 접속 시 브라우저 언어 감지 후 리다이렉트

## 다국어

- react-i18next 기반
- locale별 - 언어별 json파일 저장 후 useTranslation()으로 가져와서 표시

- [en.json](https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/refs/heads/main/i18n/en.json)
- [ko.json](https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/refs/heads/main/i18n/ko.json)

- 다국어: URL 경로를 우선으로 구분하고 (`/ko`, `/en`) 폴백 적용

- 언어 결정 우선순위:
  1. URL 경로 (`/:lang`) - Single Source of Truth
  2. 브라우저 언어 설정 (`navigator.language`)
  3. 기본 언어 (`'en'`)

## 디바이스/환경 판별

- 디바이스와 환경은 자동으로 결정되어야 함.
- 디바이스/환경 관련 함수 (`src/app/providers/device/deviceInfo.ts`):
  - `isValidPlatform()`: 유효한 플랫폼인지 검사 (type guard)
  - `isValidEnvironment()`: 유효한 환경인지 검사 (type guard)
  - `detectPlatform()`: User Agent에서 iOS/Android 판별
  - `detectEnvironment()`: `VITE_ENV`에서 환경 판별

- 플랫폼 결정 우선순위:
  1. Query param (`?platform=ios|android`) - 테스트 용도
  2. User Agent 감지 (iOS → `'ios'`, Android → `'android'`)
  3. 기본값: `'android'`

- 환경 결정:
  - `VITE_ENV` 환경변수 기반
  - 유효한 값이면 해당 값 사용
  - 기본값: `'development'`

## env

각 env파일을 만든 뒤 스크립트로 빌드 실행.

```
"dev": "vite --mode development",
"build:dev": "vite build --mode development",
"build:stage": "vite build --mode staging",
"build:prod": "vite build --mode production"
```

---

# 공통 컴포넌트

## 이미지 최적화(OptimizedImage)

- OptimizedImage 이미지 컴포넌트 생성
- suspense 기반 lading, 에러시 fallback 표시
- 이미지 최적화
  - picture tag, souce tag 기반 WebP 우선 사용 및 fallback
  - 이미지 Lazy Loading은 Lazy Loading: 네이티브 loading="lazy" + decoding="async" 처리와
  - WEBP는 VITE*OPTIMIZED_IMAGE_BASE_URL에서 [동일한*파일명.webp] 형태로 가져오면 됨.
- 더불어 Intersection Observer 기반으로 이중구현

## 모달

## 바텀시트 (BottomSheet)

- 하단에서 올라오는 바텀시트 형태
- 서비스 아이템 클릭 시 상세 정보 표시용으로 사용
- 구성 요소:
  - 상단 닫기(X) 버튼
  - 아이콘 + 서비스명 (헤더)
  - "Description" 라벨
  - 설명 텍스트 (전체 표시)
  - 하단 "Go" 버튼 (primary, 서비스 URL로 이동)
- 애니메이션: 하단에서 슬라이드 업
- 배경 오버레이 클릭 시 닫기
- Props: isOpen, onClose, children 또는 서비스 데이터 직접 전달

## 기타

- 버튼 등

---

# 주요 구현

## 1. 즐겨찾기 리스트

- API
  - mock data 기반 api - GET, POST, DELETE
  - react-query 기반 optimistic 처리
- UI: 목록 표시
- 특이사항
  - 항목이 많아지면 페이지네이션 필요

## 2. 서비스 리스트

- 가상 스크롤링: @tanstack/react-virtual (고정 높이)
- 무한 스크롤: useInfiniteQuery + 스크롤 위치 감지
- 스켈레톤: isFetchingNextPage 시 하단 스켈레톤 표시
- 필터 변경 시 스크롤 초기화 및 쿼리 재시작
- Suspense 및 Error boundary 기반 스켈레톤, 로딩, 에러 표시

**검색 필터링**

- 클라이언트 필터링: 검색어 → 로드된 데이터 내에서 name, description 필터
- 필터링된 결과가 적으면 다음 페이지 로딩(fetch more)
- debounce를 통해 최적화
- 필터링 관련 별도 hook 사용

## 3. 배너(Carousel)

- 자동 스크롤 : translateX + transition
- UI는 Presenter에 몰아두고, 로직은 useSlider에서만 제어(미구현)
- 클릭 하면 페이지 이동
- 클릭과 드래그가 둘다 가능해야 함.(마우스 커서 모양 결정 필요)

---

# TODO - 추가 구현

- [x] 환경별 API URL를 각각 다르게 사용해야 함. (실제로 사용할 필요는 없음)

- [x] locale
  - 일부 워딩 잘못된 것 수정
  - ex. 바로가기 -> 서비스 바로가기

- [] 에러 핸들링 전략 검토
  - [] Error Boundary에 빈 응답([]) 에 대한 처리 계획 추가
  - [] 네트워크 계층(COORS 등), API 응답 에러, 데이터 유효성 에러, UX 에러(이미지 로딩 실패, 무한스크롤 fetch실패)
    - 각 level 에 따라 Error Handling 및 UI에 반영
  - [x] API 응답 에러 처리
    - [] HTTP 상태 코드별 처리
  - [] 오프라인 감지
  - [x] Empty State 명확하게 처리
  - [x] 자동 재시도(backoff 전략)
  - [] Skeleton → Error → Fallback → Data 흐름이 명확히 보임
  - [] ENV 변수에 따라 500/404 반환할 확률 조정 및 특정 에러 재현
  - [] 무한스크롤 fetch 실패시 - isFetchingNextPage 에러 시 UI 피드백 없음
  - [x] ErrorFallback 다국어 처리 하드코딩된 한글 → i18n 키 사용

- [x] 리스트 아이템 스타일
  - [x] 아이템 사이에 실선 추가 필요
  - [x] 클릭할 때 생기는 회색 영역은 불필요
  - [x] 스켈레톤의 크기를 리스트 아이템의 크기에 맞게 업데이트(이미지 크기, 여백 등)

- [x] 배너
  - 버튼에 표시할게 없으면 버튼 미표시
  - 문구가 있으면 표시(굵은 글자 포맷팅을 위한 컴포넌트 별도 구현 필요)

- [x] ENV에 테스트 변수 추가
  - [x] 1000개 이상 데이터 표시
  - [x] 에러 발생 확률, 에러 실패 재현

- [x] 이미지 최적화 검토
  - [x] lazy loading
  - [x] picture , source 태그 / webp 대응
  - [x] WEBP는 VITE*OPTIMIZED_IMAGE_BASE_URL에서 [동일한*파일명.webp] 형태로 가져오면 됨.
  - [x] 배너 첫번째 이미지는 lazy load가 아닌 eager Load

- [] 테스트 코드 작성
