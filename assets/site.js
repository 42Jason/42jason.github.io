const demoContent = {
  animal: {
    brand: '해든 동물의료센터',
    brandShort: '해든',
    subbrand: 'HAEDEUN ANIMAL MEDICAL CENTER',
    phone: '02-0000-1204',
    hero: '../assets/images/animal-hero.png',
    detail: '../assets/images/animal-detail.png',
    space: '../assets/images/animal-space.png',
    caption: '예시 사진 · 실제 촬영본으로 교체',
    menu: [
      ['about', '병원소개'], ['services', '진료안내'], ['team', '의료진'], ['visit', '방문안내']
    ],
    homeTitle: '우리 아이가 안심하는 곳',
    homeDescription: '예방진료부터 갑작스러운 이상 신호까지. 보호자가 먼저 알아야 할 내용을 쉽고 빠르게 안내합니다.',
    introTitle: '보호자의 마음부터 이해하는 진료',
    introBody: '해든은 진료를 시작하기 전 보호자의 이야기를 듣습니다. 어떤 변화가 있었는지, 무엇이 걱정되는지, 오늘 어떤 안내가 필요한지. 처음 방문하는 순간부터 귀가 후의 시간까지, 필요한 내용을 놓치지 않도록 정리해 드립니다.',
    features: [
      ['01', '첫 방문 안내', '진료 전 준비, 주차, 접수 흐름을 한 화면에 정리합니다.', 'visit.html'],
      ['02', '예방 진료', '검진과 접종 주기를 아이의 생활에 맞춰 안내합니다.', 'services.html'],
      ['03', '진료 후 케어', '귀가 후 관찰할 신호와 다음 일정을 다시 확인합니다.', 'about.html']
    ],
    pages: {
      about: {
        title: '보호자와 반려동물 모두에게 편안한 진료',
        lead: '필요한 설명은 충분히, 대기 시간은 가볍게. 해든은 보호자가 진료의 흐름을 이해할 수 있도록 진료 전후의 정보를 차분히 연결합니다.',
        rows: [
          ['01', '보호자가 이해하는 설명', '검사와 치료의 목적, 이후의 관리 방법을 일상적인 언어로 안내합니다.'],
          ['02', '아이의 속도를 존중하는 공간', '처음 낯선 환경에 들어오는 아이가 긴장을 덜 수 있도록 방문 동선을 단순하게 설계합니다.'],
          ['03', '기록으로 이어지는 케어', '진료 후 필요한 관찰 포인트와 다음 일정은 다시 확인할 수 있도록 정리합니다.']
        ]
      },
      services: {
        title: '매일의 건강부터 갑작스러운 신호까지',
        lead: '진료 항목은 많아 보여도 보호자가 알고 싶은 정보는 분명합니다. 어떤 경우에 방문하면 좋은지와 진료 전 준비를 중심으로 안내합니다.',
        rows: [
          ['01', '예방 진료', '건강검진, 예방접종, 구강 관리와 생활 습관 상담을 진행합니다.'],
          ['02', '내과 진료', '식욕 변화, 구토와 설사, 피부와 귀의 이상 신호를 세심하게 살핍니다.'],
          ['03', '외과 상담', '수술이 필요한 경우에는 검사부터 회복 단계까지 보호자와 함께 계획합니다.'],
          ['04', '노령 동물 케어', '생활의 질을 지키기 위한 통증 관리와 정기 관찰을 안내합니다.']
        ]
      },
      team: {
        title: '진료실에서 마주하는 사람들',
        lead: '각자의 전문성을 나누되, 보호자에게는 하나의 흐름으로 전달합니다. 예시 페이지에서는 실제 원장과 의료진의 사진·약력·전문 분야로 교체됩니다.',
        profiles: [
          ['김해든', '대표원장', '내과 진료와 노령 동물 케어를 중심으로, 보호자가 진료 이후의 일상까지 준비할 수 있도록 설명합니다.'],
          ['윤다온', '진료원장', '예방 진료와 피부·귀 질환 상담을 맡고 있습니다. 작은 신호도 편안하게 물어볼 수 있는 진료를 지향합니다.']
        ]
      },
      visit: {
        title: '처음 방문하시는 날',
        lead: '예약 전 확인할 내용과 방문 동선을 미리 안내합니다. 실제 운영 시에는 네이버 예약, 지도, 주차 안내를 연결합니다.',
        visit: [
          ['진료 시간', '평일 09:30 — 20:00\n토요일 09:30 — 17:00\n일요일·공휴일 휴진'],
          ['전화 문의', '02-0000-1204'],
          ['위치 안내', '서울시 ○○구 ○○로 00\n건물 지하 주차장 이용 가능'],
          ['방문 전 준비', '이전 검사 결과 또는 복용 중인 약이 있다면 함께 가져와 주세요.']
        ]
      }
    }
  },
  dental: {
    brand: '미소연치과',
    brandShort: '미소연',
    subbrand: 'MISOYEON DENTAL CLINIC',
    phone: '02-0000-4682',
    hero: '../assets/images/dental-hero.png',
    detail: '../assets/images/dental-detail.png',
    space: '../assets/images/dental-space.png',
    caption: '예시 사진 · 실제 촬영본으로 교체',
    menu: [
      ['about', '치과소개'], ['services', '진료안내'], ['team', '의료진'], ['visit', '오시는 길']
    ],
    homeTitle: '정확함이 편안함이 되도록.',
    homeDescription: '필요한 진료를 정확히 설명하고, 낯선 시간을 조용하게 만듭니다. 미소연은 과정을 이해할 수 있는 치과를 지향합니다.',
    introTitle: '정밀한 진료는 차분한 설명에서 시작됩니다',
    introBody: '무엇을 치료하는지, 왜 지금 필요한지, 다음에는 무엇을 준비하면 되는지. 미소연은 의료진의 판단과 환자의 선택 사이에 충분한 설명을 둡니다.',
    features: [
      ['01', '처음 상담', '방문 목적과 불편한 점을 듣고 필요한 검사부터 안내합니다.', 'visit.html'],
      ['02', '대표 진료', '임플란트, 심미 보철, 예방 관리의 흐름을 정갈하게 소개합니다.', 'services.html'],
      ['03', '의료진 소개', '실제 원장별 진료 철학과 세부 분야를 확인할 수 있습니다.', 'team.html']
    ],
    pages: {
      about: {
        title: '진료 전부터, 일상으로 돌아간 뒤까지',
        lead: '미소연은 치료의 결과만이 아니라 그 과정의 경험을 중요하게 생각합니다. 처음 내원한 날부터 관리가 익숙해지는 순간까지, 필요한 결정을 함께 정리합니다.',
        rows: [
          ['01', '판단의 근거를 설명합니다', '진단 자료와 치료 선택지를 함께 보며, 치료가 필요한 이유를 이해하기 쉽게 안내합니다.'],
          ['02', '시간을 단정하게 설계합니다', '대기와 상담, 진료와 다음 예약의 흐름을 단순하게 정리합니다.'],
          ['03', '오래 쓰는 치아를 생각합니다', '현재의 불편을 해결하는 것에서 나아가, 이후의 관리까지 고려한 계획을 제안합니다.']
        ]
      },
      services: {
        title: '필요한 진료를 필요한 만큼',
        lead: '대표 진료는 사진과 짧은 설명, 상담 전 확인할 사항으로 구성합니다. 과장된 결과보다 진료의 목적과 과정을 먼저 보여 줍니다.',
        rows: [
          ['01', '정밀 검진', '현재 상태를 확인하고, 치료가 필요한 부분과 관찰할 부분을 구분해 설명합니다.'],
          ['02', '임플란트', '식립 전 검사부터 보철, 정기 점검까지의 과정을 단계별로 안내합니다.'],
          ['03', '심미 보철', '치아의 기능과 얼굴 전체의 인상을 함께 고려하여 치료 계획을 세웁니다.'],
          ['04', '예방 관리', '스케일링과 정기 검진을 통해 관리의 기준을 꾸준히 확인합니다.']
        ]
      },
      team: {
        title: '한 사람의 치아를 오래 보는 의료진',
        lead: '실제 홈페이지에서는 각 의료진의 사진, 진료 분야, 약력, 진료 철학을 개별적으로 확장할 수 있습니다.',
        profiles: [
          ['정미소', '대표원장', '보철과 심미 치료를 중심으로, 현재의 불편을 해결하면서도 오래 유지되는 선택을 함께 고민합니다.'],
          ['이연우', '진료원장', '예방 관리와 일반 진료를 맡고 있습니다. 환자가 치료의 이유를 이해하고 결정할 수 있도록 돕습니다.']
        ]
      },
      visit: {
        title: '방문 전에 확인해 주세요',
        lead: '상담부터 귀가까지 흐름을 짧고 명확하게 안내합니다. 실제 운영 시에는 네이버 예약, 지도, 주차 정보를 연결합니다.',
        visit: [
          ['진료 시간', '평일 10:00 — 19:00\n토요일 10:00 — 15:00\n일요일·공휴일 휴진'],
          ['전화 문의', '02-0000-4682'],
          ['위치 안내', '서울시 ○○구 ○○대로 00\n건물 지하 주차장 이용 가능'],
          ['상담 전 안내', '복용 중인 약과 최근 촬영한 엑스레이가 있다면 상담 시 알려 주세요.']
        ]
      }
    }
  },
  oriental: {
    brand: '온담한의원',
    brandShort: '온담',
    subbrand: 'ONDAM KOREAN MEDICINE',
    phone: '02-0000-8132',
    hero: '../assets/images/oriental-hero.png',
    detail: '../assets/images/oriental-detail.png',
    space: '../assets/images/oriental-space.png',
    caption: '예시 사진 · 실제 촬영본으로 교체',
    menu: [
      ['about', '한의원 소개'], ['services', '진료안내'], ['team', '의료진'], ['visit', '방문안내']
    ],
    homeTitle: '몸의 흐름을 읽고 일상으로 돌아가도록.',
    homeDescription: '증상 하나만 보지 않고, 생활의 리듬과 마음의 속도까지 함께 살핍니다. 온담은 일상으로 돌아가는 힘을 돕습니다.',
    introTitle: '가만히 듣는 시간에서 시작합니다',
    introBody: '몸의 불편은 하루의 리듬과 연결되어 있습니다. 온담은 지금의 증상과 생활의 패턴을 함께 살핀 뒤, 회복을 위한 시간을 차분히 설계합니다.',
    features: [
      ['01', '첫 진료 안내', '처음 상담에서 나누는 이야기와 준비할 내용을 안내합니다.', 'visit.html'],
      ['02', '맞춤 진료', '통증, 소화, 수면 등 생활의 흐름에서 출발하는 진료를 소개합니다.', 'services.html'],
      ['03', '원장 소개', '진료 철학과 전문 분야를 차분한 문장과 사진으로 전합니다.', 'team.html']
    ],
    pages: {
      about: {
        title: '회복은 나의 생활을 되찾는 일',
        lead: '온담은 진료실 밖의 하루까지 생각합니다. 잠드는 시간, 식사의 리듬, 일을 마치고 돌아오는 몸의 상태를 함께 듣고 필요한 방향을 제안합니다.',
        rows: [
          ['01', '증상보다 맥락을 먼저 봅니다', '지금의 불편이 언제부터 어떤 생활 속에서 이어졌는지 충분히 듣습니다.'],
          ['02', '치료의 이유를 나눕니다', '진료의 목적과 예상되는 변화를 설명하고, 생활 속에서 실천할 내용을 함께 정리합니다.'],
          ['03', '다음 일상을 준비합니다', '한 번의 진료가 끝난 뒤에도 몸의 변화를 관찰할 수 있도록 관리의 기준을 안내합니다.']
        ]
      },
      services: {
        title: '몸이 보내는 신호를 읽는 진료',
        lead: '각 진료 항목은 단순한 나열 대신, 어떤 불편에서 시작하는지와 상담 과정에서 무엇을 확인하는지 중심으로 안내합니다.',
        rows: [
          ['01', '통증 관리', '목과 어깨, 허리, 관절의 불편을 생활 습관과 함께 살펴봅니다.'],
          ['02', '소화와 순환', '더부룩함, 식사 후 불편, 손발의 냉증처럼 일상에 쌓이는 신호를 확인합니다.'],
          ['03', '수면과 피로', '잠드는 시간과 회복의 감각을 살피며, 몸의 리듬을 되찾는 방향을 찾습니다.'],
          ['04', '여성 건강', '주기와 컨디션 변화에 맞춰 일상의 균형을 돕는 진료를 안내합니다.']
        ]
      },
      team: {
        title: '한 분의 이야기를 오래 듣는 사람',
        lead: '실제 홈페이지에서는 원장 사진, 약력, 진료 철학, 상담 시간 안내를 함께 구성할 수 있습니다.',
        profiles: [
          ['서온담', '대표원장', '몸의 변화가 생활의 변화를 만든다고 믿습니다. 충분히 듣고, 일상 안에서 이어갈 수 있는 치료를 제안합니다.'],
          ['한유진', '진료원장', '통증과 피로로 지친 일상에 관심을 두고 진료합니다. 회복의 속도는 사람마다 다르다는 점을 존중합니다.']
        ]
      },
      visit: {
        title: '조용히 준비해 두었습니다',
        lead: '첫 방문 전에 필요한 정보와 상담의 흐름을 안내합니다. 실제 운영 시에는 네이버 예약, 지도, 주차 안내가 연결됩니다.',
        visit: [
          ['진료 시간', '평일 10:00 — 20:00\n토요일 10:00 — 16:00\n일요일·공휴일 휴진'],
          ['전화 문의', '02-0000-8132'],
          ['위치 안내', '서울시 ○○구 ○○길 00\n건물 뒤편 주차 공간 이용 가능'],
          ['방문 전 안내', '현재 복용 중인 약이나 최근의 검사 결과가 있다면 상담 시 알려 주세요.']
        ]
      }
    }
  }
};

function featureCard([number, title, description, href]) {
  return `<a class="feature-card" href="${href}"><span>${number}</span><h3>${title}</h3><p>${description}</p></a>`;
}

function bookingBlock(site) {
  return `<section class="booking-section ${site}-booking" id="booking"><h2>예약을 준비하고 있습니다</h2><div><p>현재는 홈페이지 제작 상품의 예시 화면입니다. 실제 오픈 시에는 이 버튼에 병원의 네이버 예약 링크를 연결합니다.</p><button type="button" data-reserve>네이버 예약 준비 중</button></div></section>`;
}

function contactBlock(data, site) {
  return `<section class="contact-section ${site}-contact" id="contact"><h2>궁금한 점을 남겨 주세요</h2><form class="contact-form" data-contact-form><label>성함<input name="name" autocomplete="name" required></label><label>연락처<input name="phone" inputmode="tel" autocomplete="tel" required></label><label>문의 내용<textarea name="message" required></textarea></label><button type="submit">문의 남기기</button><p class="form-feedback" aria-live="polite"></p></form></section>`;
}

function animalHomeMarkup(data) {
  return `<section class="animal-home-hero"><figure class="animal-hero-photo"><img src="${data.hero}" alt="${data.brand} 예시 메인 사진"><figcaption>${data.caption}</figcaption></figure><div class="animal-hero-copy"><p class="page-eyebrow">${data.subbrand}</p><div><h1>${data.homeTitle}</h1><p>${data.homeDescription}</p></div><a class="animal-primary-link" href="visit.html">첫 방문, 이렇게 준비해요 <span>↗</span></a><ol class="animal-quick-path"><li><span>01</span>우리 아이의 불편을 들을게요</li><li><span>02</span>필요한 진료만 차분히 안내해요</li><li><span>03</span>집으로 돌아간 뒤까지 살펴봐요</li></ol></div></section><section class="animal-welcome"><div><p class="section-label">OUR PROMISE</p><h2>${data.introTitle}</h2><p>${data.introBody}</p><a href="about.html">${data.brand} 이야기 보기 ↗</a></div><figure><img src="${data.space}" alt="${data.brand} 공간 소재 예시 사진"></figure></section><section class="animal-care-path"><header><p class="section-label">CARE PATH</p><h2>보호자가 궁금해할 순서대로<br>안내합니다.</h2></header><div>${data.features.map(([number, title, description, href]) => `<a class="animal-path-card" href="${href}"><span>${number}</span><h3>${title}</h3><p>${description}</p><b>자세히 보기 ↗</b></a>`).join('')}</div></section>${bookingBlock('animal')}`;
}

function dentalHomeMarkup(data) {
  return `<section class="dental-home-hero"><div class="dental-hero-meta"><span>THE QUIET STANDARD</span><b>01 / 03</b></div><div class="dental-hero-title-block"><p class="page-eyebrow">${data.subbrand}</p><h1><span>정확함이</span><span class="only-once">편안함이 되도록.</span></h1><p>${data.homeDescription}</p><a href="services.html">진료의 기준 보기 ↗</a></div><figure class="dental-hero-photo"><img src="${data.hero}" alt="${data.brand} 예시 메인 사진"><figcaption>${data.caption}</figcaption></figure><aside class="dental-hero-note">진료 전, 치료 중, 관리까지<br>이해할 수 있는 흐름을 만듭니다.</aside></section><section class="dental-statement"><p>PRECISION / CALM / CARE</p><h2>${data.introTitle}</h2><div><p>${data.introBody}</p><a href="about.html">미소연의 진료 철학 ↗</a></div><figure><img src="${data.space}" alt="${data.brand} 공간 소재 예시 사진"></figure></section><section class="dental-treatment-directory"><header><p>CLINICAL DIRECTORY</p><h2>필요한 정보를<br>정확하게 찾도록.</h2></header><div>${data.features.map(([number, title, description, href]) => `<a class="dental-directory-row" href="${href}"><span>${number}</span><h3>${title}</h3><p>${description}</p><b>↗</b></a>`).join('')}</div></section>${bookingBlock('dental')}`;
}

function orientalHomeMarkup(data) {
  return `<section class="demo-hero oriental-hero"><div class="hero-copy"><div><p class="page-eyebrow">${data.subbrand}</p><h1 class="hero-title">${data.homeTitle}</h1><p class="hero-description">${data.homeDescription}</p></div><div class="hero-links"><a href="services.html">진료안내 보기 ↗</a><a href="visit.html">첫 방문 안내 ↗</a></div></div><div class="hero-image"><img src="${data.hero}" alt="${data.brand} 예시 메인 사진"><p class="hero-caption">${data.caption}</p></div></section><section class="oriental-ritual-intro"><div><p class="section-label">A QUIET RHYTHM</p><h2>${data.introTitle}</h2></div><div><p>${data.introBody}</p><a href="about.html">온담의 진료 방식 ↗</a></div></section><section class="oriental-rhythm"><figure><img src="${data.space}" alt="${data.brand} 공간 소재 예시 사진"></figure><div>${data.features.map(([number, title, description, href]) => `<a href="${href}"><span>${number}</span><h3>${title}</h3><p>${description}</p><b>↗</b></a>`).join('')}</div></section>${bookingBlock('oriental')}`;
}

function homeMarkup(data, site) {
  if (site === 'animal') return animalHomeMarkup(data);
  if (site === 'dental') return dentalHomeMarkup(data);
  return orientalHomeMarkup(data);
}

function standardPageMarkup(data, pageKey, site) {
  const page = data.pages[pageKey];
  const intro = `<section class="page-heading ${site}-page-heading"><p class="page-eyebrow">${data.subbrand}</p><h1 class="page-title">${page.title}</h1></section><section class="page-intro ${site}-page-intro"><h2>${pageKey === 'team' ? '사람의 이름과 진료 철학을 함께 전합니다' : pageKey === 'visit' ? '방문 전 궁금한 내용을 한 화면에 정리합니다' : '필요한 내용을 차분하게 설명합니다'}</h2><p>${page.lead}</p></section>`;
  if (page.rows) {
    return `${intro}<section class="list-block ${site}-list-block">${page.rows.map(([number, title, body]) => `<article class="list-row"><span>${number}</span><h2>${title}</h2><p>${body}</p></article>`).join('')}</section><section class="content-split ${site}-content-split"><div class="content-photo"><img src="${data.space}" alt="${data.brand} 공간 소재 예시 사진"></div><div class="content-copy"><h2>공간의 인상까지 이어지는 페이지</h2><p>실제 제작 시에는 병원의 촬영본과 원고를 바탕으로 구성합니다. 원장과 의료진, 진료 공간, 벽면과 소재의 사진을 함께 사용해 병원만의 분위기를 만듭니다.</p><a href="visit.html">방문 안내 보기 ↗</a></div></section>${bookingBlock(site)}`;
  }
  if (page.profiles) {
    return `${intro}<section class="profile-grid ${site}-profile-grid">${page.profiles.map(([name, role, body]) => `<article class="profile"><div class="profile-mark">${name.slice(0, 1)}</div><h2>${name}</h2><p>${role}</p><p>${body}</p></article>`).join('')}</section>${bookingBlock(site)}`;
  }
  if (page.visit) {
    return `${intro}<section class="visit-grid ${site}-visit-grid"><div class="visit-info"><h2>방문에 필요한 내용을 미리 확인해 주세요</h2>${page.visit.map(([label, value]) => `<div class="visit-line"><strong>${label}</strong><span>${value.replace(/\n/g, '<br>')}</span></div>`).join('')}</div><div class="visit-visual"><img src="${data.space}" alt="${data.brand} 공간 소재 예시 사진"></div></section>${bookingBlock(site)}${contactBlock(data, site)}`;
  }
  return intro;
}

function demoHeader(data, pageKey) {
  return `<header class="demo-header"><div class="demo-brand-area"><a class="demo-brand" href="index.html">${data.brand}<small>${data.subbrand}</small></a><a class="lumina-return" href="../index.html">← 루미나 홈페이지</a></div><nav class="demo-nav" aria-label="주요 메뉴">${data.menu.map(([key, label]) => `<a href="${key}.html"${key === pageKey ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav><button class="reserve-button" type="button" data-reserve>네이버 예약 준비 중</button></header>`;
}

function demoFooter(data) {
  return `<footer class="demo-footer"><div><strong>${data.brand}</strong><br>서울시 ○○구 ○○로 00 · ${data.phone}</div><div>홈페이지 제작 상품 데모<br>실제 오픈 시 사진·원고·예약 링크로 교체됩니다.</div></footer><div class="demo-toast" role="status" aria-live="polite"></div>`;
}

function bindInteractions(root) {
  const toast = root.querySelector('.demo-toast');
  let timeoutId;
  const showToast = message => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => toast.classList.remove('is-visible'), 3500);
  };
  root.querySelectorAll('[data-reserve]').forEach(button => {
    button.addEventListener('click', () => showToast('예시 화면입니다. 실제 오픈 시 네이버 예약 링크로 연결됩니다.'));
  });
  const form = root.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const feedback = form.querySelector('.form-feedback');
      feedback.textContent = '예시 폼입니다. 실제 오픈 시 접수 시스템과 연결됩니다.';
      form.reset();
    });
  }

  const motionTargets = root.querySelectorAll('.page-intro, .feature-card, .content-split, .page-heading, .list-row, .profile, .visit-grid, .booking-section, .contact-section, .animal-welcome, .animal-care-path, .dental-statement, .dental-treatment-directory, .oriental-ritual-intro, .oriental-rhythm');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    motionTargets.forEach(target => target.classList.add('is-revealed'));
    root.classList.add('is-ready');
    return;
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .12 });

  motionTargets.forEach(target => {
    target.classList.add('motion-reveal');
    revealObserver.observe(target);
  });

  window.requestAnimationFrame(() => root.classList.add('is-ready'));
}

function renderDemo() {
  const root = document.querySelector('[data-demo]');
  if (!root) return;
  const site = root.dataset.demo;
  const pageKey = root.dataset.page || 'home';
  const data = demoContent[site];
  if (!data) return;
  root.innerHTML = `${demoHeader(data, pageKey)}<main class="demo-main">${pageKey === 'home' ? homeMarkup(data, site) : standardPageMarkup(data, pageKey, site)}</main>${demoFooter(data)}`;
  bindInteractions(root);
}

document.addEventListener('DOMContentLoaded', renderDemo);
