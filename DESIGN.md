# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-08-22
- Primary product surfaces: 루미나 에이전시 메인·서비스·포트폴리오·회사소개·상담 페이지, 동물병원·치과·한의원 홈페이지 제작 데모
- Evidence reviewed: `index.html`, `services.html`, `work.html`, `about.html`, `contact.html`, `animal/`, `dental/`, `oriental/`, `assets/site.css`, `assets/site.js`, `assets/lumina.js`, `assets/images/`의 업종별 진료·공간·의료진 예시 사진, 사용자 제공 한의원 한지문 참고 이미지

## Brand
- Personality: 세련된 에이전시형이되, 병원별 개성이 분명한 신뢰 중심 디자인
- Trust signals: 실제 공간·의료진·환자·반려동물 사진, 구체적인 방문 정보, 차분하고 읽기 쉬운 문장
- Avoid: 추상 일러스트, 평면 도형으로 채운 빈 화면, 과도한 의료 아이콘, AI처럼 보이는 균일한 카드 나열, 의미 없는 단어 단위 줄바꿈

## Product goals
- Goals: 병원 원장과 마케팅 담당자가 루미나의 제작 방식, 서비스 범위, 업종별 디자인 폭, 상담 진입점을 바로 이해하게 한다.
- Non-goals: 실제 예약·문의 접수 백엔드 구현, 실병원 정보 또는 성과의 허위 표기
- Success signals: 데모 전 페이지 이동, 각 업종의 차별화된 인상, 네이버 예약 연결 지점과 문의 흐름의 이해

## Personas and jobs
- Primary personas: 병원 원장, 병원 마케팅 담당자
- User jobs: 제작 역량 확인, 업종별 분위기 비교, 방문·예약 전환 흐름 확인
- Key contexts of use: 데스크톱 제안 미팅, 모바일에서의 포트폴리오 열람

## Information architecture
- Primary navigation: 루미나 메인/서비스/포트폴리오/회사소개/상담 문의, 병원 데모별 소개/진료안내/의료진/방문안내
- Core routes/screens: `index.html`(루미나 메인), `services.html`, `work.html`, `about.html`, `contact.html`, 업종별 메인·소개·진료·의료진·방문안내
- Content hierarchy: 루미나에서는 첫 화면의 핵심 인상과 CTA → 서비스 범위 → 업종별 결과물 → 제작 기준 → 상담으로 이어진다. 병원 데모에서는 병원의 태도 → 대표 진료 → 의료진 → 방문·예약 정보. 모든 데모 헤더에는 루미나 포트폴리오로 즉시 돌아가는 경로를 둔다.

## Design principles
- Principle 1: 그래픽 장식보다 실제 사진과 공간의 소재를 쓴다.
- Principle 2: 첫 화면은 헤더를 제외한 화면 높이를 충분히 사용하고, 좌우 가장자리까지 레이아웃의 긴장감을 유지한다.
- Principle 3: 한글 문장은 어절을 끊지 않는다. 좁은 열이 생기면 강제 줄바꿈이나 글자 쪼개기 대신 그리드·본문 폭·글자 크기를 먼저 조정한다. 조사·단어가 한 글자씩 고립되는 형태는 허용하지 않는다.
- Principle 6: 큰 화면일수록 글자를 상대적으로 더 작게 보이게 두지 않는다. 본문·카드 설명은 16px 이상, 보조 정보는 12px 이상을 기본으로 하며 뷰포트가 넓어져도 읽는 밀도가 유지되게 제한된 `clamp()` 스케일을 사용한다.
- Principle 7: 사진·약력·설명이 없는 빈 카드를 만들지 않는다. 카드의 높이는 콘텐츠의 양과 사진 비율에서 정하고, 이름과 설명을 카드 하단으로 과도하게 밀어 넣지 않는다.
- Principle 4: 같은 정보 구조를 유지하더라도 업종별 첫 화면과 콘텐츠 배열은 서로 다른 방식으로 설계한다. 동물병원은 보호자 안내를 따라가는 따뜻한 여정형, 치과는 진료 항목을 명료하게 훑는 정밀 인덱스형, 한의원은 사진과 여백을 따라 읽는 몰입형 에디토리얼로 구분한다.
- Principle 5: 루미나 에이전시 사이트는 단일 랜딩 페이지가 아니라, 서비스와 결과물, 기준, 상담이 독립적으로 읽히는 다중 페이지 구조를 기본으로 한다.
- Principle 8: 사진은 페이지의 정보 역할과 일치시킨다. 의료진 소개에는 의료진 사진, 진료 철학에는 상담 장면, 방문안내에는 실제 공간 사진을 쓰며, 인물·공간을 장식용으로 바꿔 쓰지 않는다.
- Tradeoffs: 모션은 브랜드 인상을 돕는 정도로 제한하고 콘텐츠 읽기와 예약 행동을 방해하지 않는다.

## Visual language
- Color: 루미나는 블랙·웜그레이·산뜻한 라임·주황을 쓰는 편집형 에이전시 톤. 동물병원은 오크·세이지·크림, 치과는 아이보리·월넛·네이비, 한의원은 짙은 목재·한지·흙빛
- Typography: 한국어를 중심으로 한 명료한 헤드라인. 루미나는 큰 산세리프와 모노 라벨을 대비시키고, 한의원·치과에는 절제된 세리프 사용. 본문·카드 설명은 데스크톱·모바일 모두 16px 이상, 핵심 제목은 본문 대비 2~2.6배 안에서 위계를 만든다. 메뉴·CTA·번호·캡션·폼·푸터를 포함한 모든 가시 텍스트는 데스크톱 14px, 모바일 13px 미만으로 두지 않는다. 1.72 이상의 행간과 충분한 본문 폭을 기본값으로 둔다. `html:lang(ko)`에서 `word-break: keep-all`과 `line-break: strict`을 적용하며, 제목의 음수 자간은 과도하게 쓰지 않는다.
- Typography research basis: W3C CSS Text Level 4의 한글 어절 단위 줄바꿈(`word-break: keep-all`)과 WCAG 1.4.12의 텍스트 간격 확장 시 콘텐츠·기능 보존 기준을 적용 근거로 삼는다.
- Spacing/layout rhythm: 넓은 여백과 얇은 구조선, 데스크톱은 전체 화면을 쓰는 분할 레이아웃
- Shape/radius/elevation: 동물병원만 부드러운 라운드, 치과는 정갈한 직선, 한의원은 낮은 대비의 면과 격자
- Motion: 루미나는 첫 화면 텍스트와 사진의 짧은 진입, 콘텐츠 카드의 절제된 확대를 사용한다. 동물병원은 따뜻한 사진 도입과 안내 행의 이동, 치과는 진단 사진의 프레임 와이프와 정밀 디렉터리의 수평 반응, 한의원은 한지문 열림과 낮은 대비의 사진 와이프를 사용한다. 모션은 스크롤 진입 한 번과 마우스 호버에만 반응하며 모두 `prefers-reduced-motion`을 존중한다.
- Imagery/iconography: 실제 진료에 맞는 상담 장면, 의료진 인물 사진, 공간의 목재 결·한지·미장·석재 소재를 분리해 사용한다. 삽화와 임의의 추상 도형, 의료진 페이지에 공간만 넣는 방식은 사용하지 않는다.

## Components
- Existing components to reuse: `demo-header`, `booking-section`, `contact-section`, 공통 예약·문의 동작
- New/changed components: 루미나 공통 헤더·푸터, 라우트 히어로, 서비스 상세 프레임, 업종별 포트폴리오 케이스, 제작 프로세스, 상담 폼, 루미나 복귀 버튼, 동물병원 여정형 히어로·안내 경로, 치과 정밀 인덱스형 히어로·진료 디렉터리, 한의원 한지문 오프닝 레이어·에디토리얼 리듬 섹션
- Variants and states: 첫 진입, 호버, 예약 준비 안내, 문의폼 안내, 모션 축소 환경
- Token/component ownership: 업종별 색상 변수와 타이포 변수는 `assets/site.css`의 `.demo-shell[data-demo]`에서 관리

## Accessibility
- Target standard: 기본적인 WCAG AA 대비와 키보드 조작 가능 링크·버튼
- Keyboard/focus behavior: 네이티브 링크와 버튼의 기본 포커스 유지
- Contrast/readability: 사진 위 텍스트에는 반투명 소재 오버레이를 두고, 긴 문장은 충분한 행간을 둔다. WCAG의 텍스트 간격 확장 환경에서도 콘텐츠·기능이 가려지지 않게 고정 높이와 좁은 본문 열을 피한다.
- Screen-reader semantics: `h1` 1개, 의미 있는 이미지 대체텍스트, `aria-live` 예약·문의 안내
- Reduced motion and sensory considerations: `prefers-reduced-motion: reduce`에서 문 열림·진입·호버 이동을 중지한다.

## Responsive behavior
- Supported breakpoints/devices: 데스크톱 760px 이상, 모바일 390px 기준
- Layout adaptations: 모바일에서는 루미나와 병원 데모 히어로를 세로로 쌓고, 루미나·병원 데모 메뉴를 두 번째 줄의 가로 스크롤 내비게이션으로 유지한다.
- Touch/hover differences: 터치 환경에서는 호버 이동 없이 정보와 CTA를 즉시 노출한다.

## Interaction states
- Loading: 정적 사진과 콘텐츠를 즉시 표시
- Empty: 해당 없음
- Error: 실제 예약·문의 API 연결 전에는 준비 안내를 표시
- Success: 데모 문의폼 제출 시 연결 예정 안내
- Disabled: 실제 네이버 예약 URL 연결 전 버튼은 안내 토스트만 표시
- Offline/slow network, if applicable: 사진 로드 실패 시 대체텍스트가 노출되며 콘텐츠는 유지

## Content voice
- Tone: 짧고 차분하며 상업적으로 명료한 한국어
- Terminology: 진료안내, 의료진, 방문안내, 네이버 예약
- Microcopy rules: 내부 구현 설명을 공개 화면에 쓰지 않고, 행동을 바로 안내한다.

## Implementation constraints
- Framework/styling system: 정적 HTML, CSS, JavaScript; GitHub Pages 배포
- Design-token constraints: 업종별 변수·공통 컴포넌트를 유지하면서 개별 톤을 분리
- Performance constraints: 이미지 기반이므로 과도한 애니메이션·자동 영상은 사용하지 않음
- Compatibility constraints: 최신 Chromium과 모바일 브라우저, `prefers-reduced-motion` 지원
- Test/screenshot expectations: 1440px·대형 데스크톱·390px에서 가로 넘침 없이 첫 화면·메뉴·주요 링크를 확인. 긴 한글 본문은 단어가 한 줄마다 떨어지지 않는지, 어절·조사 단위가 분리되지 않는지 별도 시각 검수한다. 각 카드에서 실제 콘텐츠가 카드 높이의 절반 이하로 고립되지 않는지, 제목·본문 크기 비율이 과장되지 않는지도 전수 확인한다.

## Open questions
- [ ] 실제 병원 촬영본과 원장·의료진 사진 확보 시점 / 사용자 / 최종 포트폴리오 품질에 영향
- [ ] 네이버 예약 URL과 실제 문의 수신 방식 / 사용자 / CTA 연결에 영향
