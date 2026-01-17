import { atom } from "recoil";

export const templateState = atom({
  key: "templateState",
  default: 1,
});

export const weddingDataState = atom({
  key: "weddingDataState",
  default: {
    id: 0,
    date: {
      date: "2026-03-22T12:40:00",
      isDday: true,
    },
    location: {
      lat: 37.5486247,
      lng: 126.6677721,
      name: "인천 아시아드 웨딩 컨벤션",
      detail: "브릴리에홀",
      address:
        "인천광역시 서구 염곡로 725 (연희동 826번지)\n 인천아시아드주경기장 3번 게이트",
      link: "https://kko.to/zQL9rWrKFM",
      isMap: true,
      waytocome: [
        {
          type: "metro",
          content:
            "인천 2호선 아시아드경기장역 3번출구 앞 승차 \n셔틀버스 운행 (15분 간격)",
        },
        {
          type: "bus",
          content:
            "우성아파트 [42717] : 24-1, 70, 인천e음86, 111, 111B, 302, 310\n인천아시아드주경기장(동문) [89354] : 3-2, 71, 인천e음86",
        },
        {
          type: "car",
          content: `네비게이션 : "아시아드웨딩컨벤션" 또는 "염곡로 725" 입력\n주차장 안내 : 인천아시아드주경기장 3번 게이트 앞 주차장 이용`,
        },
      ],
    },
    groom: {
      name: "강윤구",
      phoneNumber: "01098282601",
      parents: [
        {
          name: "강상석",
          relationship: "father",
          phoneNumber: "-",
          isDead: true,
        },
        {
          name: "엄귀순",
          relationship: "mother",
          phoneNumber: "-",
          isDead: false,
        },
      ],
    },
    bride: {
      name: "최지수",
      phoneNumber: "01046144519",
      parents: [
        {
          name: "최정회",
          relationship: "father",
          phoneNumber: "-",
          isDead: false,
        },
        {
          name: "박진옥",
          relationship: "mother",
          phoneNumber: "-",
          isDead: false,
        },
      ],
    },
    account: {
      groom: [
        {
          holder: "강윤구",
          relationship: "groom",
          isSame: true,
          bankName: "기업은행",
          accountNumber: "434-064623-01-016",
          kakaopayLink: "",
        },
        {
          holder: "엄귀순",
          relationship: "mother",
          bankName: "새마을금고",
          accountNumber: "2303-09-034980-7",
        },
      ],
      bride: [
        {
          holder: "최지수",
          relationship: "bride",
          isSame: true,
          bankName: "우리은행",
          accountNumber: "1002-740-750488",
          kakaopayLink: "",
        },
        {
          holder: "최정회",
          relationship: "mother",
          bankName: "국민은행",
          accountNumber: "815-01-0052-406",
        },
        {
          holder: "박진옥",
          relationship: "mother",
          bankName: "NH 농협은행",
          accountNumber: "302-1062-3577-71",
        },
      ],
    },
    greeting: {
      content:
        "<p>가장 진실된 것으로\n가장 당신을 위한 생각으로\n나의 마음을 가득 채워가고 싶다</p> \n참 작은 마음이지만\n당신을 위한 것 중 가장 작은 것일지라도\n당신이 허락해준다면\n나 내 온 마음 그것이라 하겠다.\n\n이경선, <마음>",
      type: "step",
    },
  },
});
