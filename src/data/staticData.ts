/**
 * 디자인 폼
 */
export const TEMPLATE_ARR = [
  { templateId: 1, code: "1", name: "템플릿1" },
  { templateId: 2, code: "2", name: "템플릿2" },
  { templateId: 3, code: "3", name: "템플릿3" },
];

export const FONT_ARR = [
  { fontId: 0, code: "pretendard", name: "기본서체" },
  { fontId: 1, code: "bookk", name: "부크명조" },
  { fontId: 2, code: "nanum", name: "나눔스퀘어" },
];

export const EFFECT_ARR = [
  { effectId: 0, code: "none", name: "없음" },
  { effectId: 1, code: "snow", name: "눈 효과" },
  { effectId: 2, code: "confetti", name: "컨페티" },
  { effectId: 3, code: "wave", name: "물결" },
];

export const COLOR_ARR = [
  { colocId: 0, code: "#F9F9F9", name: "#F9F9F9" },
  { colocId: 1, code: "#FFE4E0", name: "#FFE4E0" },
  { colocId: 2, code: "#FFF4B8", name: "#FFF4B8" },
  { colocId: 3, code: "#F2F8E4", name: "#F2F8E4" },
  { colocId: 4, code: "#E4F1F8", name: "#E4F1F8" },
  { colocId: 5, code: "#E4E9F8", name: "#E4E9F8" },
  { colocId: 6, code: "#616367", name: "#616367" },
];

export const GREETING_ARR = [
  { greetingId: 0, code: "love", name: "사랑" },
  { greetingId: 1, code: "family", name: "가정" },
  { greetingId: 2, code: "situation", name: "시국" },
  { greetingId: 3, code: "respect", name: "존중" },
  { greetingId: 4, code: "step", name: "한걸음" },
];

export const TRANSPORTATION_ARR = [
  { transportationId: 0, code: "car", name: "자가용" },
  { transportationId: 1, code: "bus", name: "버스" },
  { transportationId: 2, code: "metro", name: "지하철" },
  { transportationId: 3, code: "direct", name: "직접 입력" },
];

export const GALLARY_ARR = [
  { gallaryId: 0, code: "slide", name: "슬라이드 형" },
  { gallaryId: 1, code: "collague", name: "콜라쥬 형" },
  { gallaryId: 2, code: "grid", name: "그리드 형" },
];
export const OUTRO_ARR = [
  { outroId: 0, code: "thanks1", name: "감사1" },
  { outroId: 1, code: "thanks2", name: "감사2" },
  { outroId: 2, code: "poem1", name: "연인 시1" },
  { outroId: 3, code: "poem2", name: "연인 시2" },
  { outroId: 4, code: "movie1", name: "영화 구절1" },
  { outroId: 5, code: "movie2", name: "영화 구절2" },
];

/**
 * 인풋 폼
 */
export const FORM_VALIDATION: any = {
  password: /^.{4,20}$/,
  name: /^[가-힣a-zA-Z\d\s]+$/,
  groom: /^[가-힣a-zA-Z\d\s]+$/,
  bride: /^[가-힣a-zA-Z\d\s]+$/,
  birth: /^(\d{4})(\d{2})(\d{2})$/,
  cellPhone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
  telephone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
};

export const FORM_PLACEHOLDER: any = {
  groom: "신랑 성함 입력",
  bride: "신부 성함 입력",
  writer: "작성하시는 분의 성함을 입력해 주세요",
  name: "작성하시는 분의 성함을 입력해 주세요",
  password: "4자~20자 이내의 숫자를 작성해 주세요",
  message: "신랑 신부에게 전할 축하메시지를 작성해 주세요",
};
export const FORM_ERROR: any = {
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
  name: {
    empty: "작성자 이름을 입력해 주세요.",
  },
  password: {
    empty: "비밀번호를 입력해 주세요.",
    validation: "4자~20자 이내의 숫자를 작성해 주세요",
  },
  message: {
    empty: "신랑 신부에게 전할 축하메시지를 작성해 주세요",
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
