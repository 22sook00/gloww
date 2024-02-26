/**
 * 디자인 폼
 */
export const TEMPLATE_ARR = [
  { templateId: 1, name: "템플릿1" },
  { templateId: 2, name: "템플릿2" },
  { templateId: 3, name: "템플릿3" },
];

export const EFFECT_ARR = [
  { effectId: 0, name: "없음" },
  { effectId: 1, name: "눈 효과" },
  { effectId: 2, name: "컨페티" },
  { effectId: 3, name: "물결" },
];

export const COLOR_ARR = [
  { colocId: 0, name: "#FFE4E0" },
  { colocId: 1, name: "#FFF4B8" },
  { colocId: 2, name: "#F2F8E4" },
  { colocId: 3, name: "#E4F1F8" },
  { colocId: 4, name: "#E4E9F8" },
  { colocId: 5, name: "#616367" },
];

export const GREETING_ARR = [
  { greetingId: 0, name: "사랑" },
  { greetingId: 1, name: "가정" },
  { greetingId: 2, name: "시국" },
  { greetingId: 3, name: "존중" },
  { greetingId: 4, name: "한걸음" },
];

export const TRANSPORTATION_ARR = [
  { transportationId: 0, name: "자가용" },
  { transportationId: 1, name: "버스" },
  { transportationId: 2, name: "지하철" },
  { transportationId: 3, name: "도보" },
  { transportationId: 4, name: "직접 입력" },
];

export const GALLARY_ARR = [
  { gallaryId: 0, name: "슬라이드 형" },
  { gallaryId: 1, name: "갤러리 형" },
  { gallaryId: 2, name: "앨범 형" },
  { gallaryId: 3, name: "그리드 형" },
];
export const OUTRO_ARR = [
  { outroId: 0, name: "감사1" },
  { outroId: 1, name: "감사2" },
  { outroId: 2, name: "연인 시1" },
  { outroId: 3, name: "연인 시2" },
  { outroId: 4, name: "영화 구절1" },
  { outroId: 5, name: "영화 구절2" },
];

/**
 * 인풋 폼
 */
export const FORM_VALIDATION = {
  password: /^.{6,20}$/,
  groom: /^[가-힣a-zA-Z\d\s]+$/,
  bride: /^[가-힣a-zA-Z\d\s]+$/,
  birth: /^(\d{4})(\d{2})(\d{2})$/,
  cellPhone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
  telephone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
};

export const FORM_PLACEHOLDER = {
  groom: "신랑 성함 입력",
  bride: "신부 성함 입력",
};
export const FORM_ERROR = {
  groom: {
    empty: "아이디를 입력해 주세요.",
    validation: "6자~16자 이내의 영문/숫자로만 입력해 주세요",
    duplicate: "이미 사용중인 아이디입니다.",
  },
  bride: {
    empty: "아이디를 입력해 주세요.",
    validation: "6자~16자 이내의 영문/숫자로만 입력해 주세요",
    duplicate: "이미 사용중인 아이디입니다.",
  },
};

/**
 * 인삿말
 */

export const INIT_GREETING_DATA = `
 <p>서로에게 행복을 주는 사람을 만났습니다.</p>
 <p>웃는 모습이 너무나 예쁜 그 사람을 만났습니다.</p>
 <p>배려하는 마음이 따뜻한 그 사람을 만났습니다.</p>
 
 <p>운명처럼 만나게 된 우리의 인연</p>
 <p>그 인연에 이끌려 이제 영원을</p>
 <p>함께 약속하려 합니다.</p>
 
 <p>저희의 하나 됨을 지켜보아 주시고</p>
 <p>격려해 주시면 더없는 기쁨으로</p>
 <p>간직하겠습니다.</p>

`;
