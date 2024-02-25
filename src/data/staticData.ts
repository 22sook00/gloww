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
  { colocId: 0, name: "bg-slate-300" },
  { colocId: 1, name: "bg-slate-400" },
  { colocId: 2, name: "bg-slate-500" },
  { colocId: 3, name: "bg-slate-600" },
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
