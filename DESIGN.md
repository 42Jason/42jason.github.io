# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-08-21
- Primary product surfaces: 병원마케팅 루미나 포트폴리오, 동물병원·치과·한의원 홈페이지 제작 데모
- Evidence reviewed: `index.html`, `animal/`, `dental/`, `oriental/`, `assets/site.css`, `assets/site.js`, `assets/images/`, 사용자 제공 한의원 한지문 참고 이미지

## Brand
- Personality: 세련된 에이전시형이되, 병원별 개성이 분명한 신뢰 중심 디자인
- Trust signals: 실제 공간·의료진·환자·반려동물 사진, 구체적인 방문 정보, 차분하고 읽기 쉬운 문장
- Avoid: 추상 일러스트, 평면 도형으로 채운 빈 화면, 과도한 의료 아이콘, AI처럼 보이는 균일한 카드 나열, 의미 없는 단어 단위 줄바꿈

## Product goals
- Goals: 병원 원장과 마케팅 담당자가 홈페이지 제작 역량과 업종별 디자인 폭을 바로 이해하게 한다.
- Non-goals: 실제 예약·문의 접수 백엔드 구현, 실병원 정보 또는 성과의 허위 표기
- Success signals: 데모 전 페이지 이동, 각 업종의 차별화된 인상, 네이버 예약 연결 지점과 문의 흐름의 이해

## Personas and jobs
- Primary personas: 병원 원장, 병원 마케팅 담당자
- User jobs: 제작 역량 확인, 업종별 분위기 비교, 방문·예약 전환 흐름 확인
- Key contexts of use: 데스크톱 제안 미팅, 모바일에서의 포트폴리오 열람

## Information architecture
- Primary navigation: 병원소개/진료안내/의료진/방문안내
- Core routes/screens: 루미나 메인, 업종별 메인, 소개, 진료, 의료진, 방문안내
- Content hierarchy: 첫 화면의 핵심 인상과 CTA → 병원의 태도 → 대표 진료 → 의료진 → 방문·예약 정보. 모든 데모 헤더에는 루미나 포트폴리오로 즉시 돌아가는 경로를 둔다.

## Design principles
- Principle 1: 그래픽 장식보다 실제 사진과 공간의 소재를 쓴다.
- Principle 2: 첫 화면은 헤더를 제외한 화면 높이를 충분히 사용하고, 좌우 가장자리까지 레이아웃의 긴장감을 유지한다.
- Principle 3: 문장은 의미 단위로만 줄바꿈하며, 폭·크기·자간을 먼저 조정한다.
- Principle 4: 같은 정보 구조를 유지하더라도 업종별 첫 화면과 콘텐츠 배열은 서로 다른 방식으로 설계한다. 동물병원은 보호자 안내를 따라가는 따뜻한 여정형, 치과는 진료 항목을 명료하게 훑는 정밀 인덱스형, 한의원은 사진과 여백을 따라 읽는 몰입형 에디토리얼로 구분한다.
- Tradeoffs: 모션은 브랜드 인상을 돕는 정도로 제한하고 콘텐츠 읽기와 예약 행동을 방해하지 않는다.

## Visual language
- Color: 동물병원은 오크·세이지·크림, 치과는 아이보리·월넛·네이비, 한의원은 짙은 목재·한지·흙빛
- Typography: 한국어를 중심으로 한 명료한 헤드라인, 한의원·치과에는 절제된 세리프 사용
- Spacing/layout rhythm: 넓은 여백과 얇은 구조선, 데스크톱은 전체 화면을 쓰는 분할 레이아웃
- Shape/radius/elevation: 동물병원만 부드러운 라운드, 치과는 정갈한 직선, 한의원은 낮은 대비의 면과 격자
- Motion: 한의원은 한지문이 열리는 첫 진입 모션, 동물병원과 치과는 사진·텍스트의 짧은 진입과 카드 호버. 모두 `prefers-reduced-motion`을 존중한다.
- Imagery/iconography: 실제 공간의 목재 결·한지·미장·석재 등 소재와 인물 사진. 삽화와 임의의 추상 도형은 사용하지 않는다.

## Components
- Existing components to reuse: `demo-header`, `booking-section`, `contact-section`, 공통 예약·문의 동작
- New/changed components: 루미나 복귀 버튼, 동물병원 여정형 히어로·안내 경로, 치과 정밀 인덱스형 히어로·진료 디렉터리, 한의원 한지문 오프닝 레이어·에디토리얼 리듬 섹션
- Variants and states: 첫 진입, 호버, 예약 준비 안내, 문의폼 안내, 모션 축소 환경
- Token/component ownership: 업종별 색상 변수와 타이포 변수는 `assets/site.css`의 `.demo-shell[data-demo]`에서 관리

## Accessibility
- Target standard: 기본적인 WCAG AA 대비와 키보드 조작 가능 링크·버튼
- Keyboard/focus behavior: 네이티브 링크와 버튼의 기본 포커스 유지
- Contrast/readability: 사진 위 텍스트에는 반투명 소재 오버레이를 두고, 긴 문장은 충분한 행간을 둔다.
- Screen-reader semantics: `h1` 1개, 의미 있는 이미지 대체텍스트, `aria-live` 예약·문의 안내
- Reduced motion and sensory considerations: `prefers-reduced-motion: reduce`에서 문 열림·진입·호버 이동을 중지한다.

## Responsive behavior
- Supported breakpoints/devices: 데스크톱 760px 이상, 모바일 390px 기준
- Layout adaptations: 모바일에서는 히어로를 세로로 쌓고 메뉴를 두 번째 줄에 유지한다.
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
- Framework/styling system: 정적 HTML, CSS, JavaScript; GitHub Pages 배포 예정
- Design-token constraints: 업종별 변수·공통 컴포넌트를 유지하면서 개별 톤을 분리
- Performance constraints: 이미지 기반이므로 과도한 애니메이션·자동 영상은 사용하지 않음
- Compatibility constraints: 최신 Chromium과 모바일 브라우저, `prefers-reduced-motion` 지원
- Test/screenshot expectations: 데스크톱·390px에서 가로 넘침 없이 첫 화면·메뉴·주요 링크를 확인

## Open questions
- [ ] 실제 병원 촬영본과 원장·의료진 사진 확보 시점 / 사용자 / 최종 포트폴리오 품질에 영향
- [ ] 네이버 예약 URL과 실제 문의 수신 방식 / 사용자 / CTA 연결에 영향
