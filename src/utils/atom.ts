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
      date: "2025-06-14T11:30:00",
      isDday: true,
    },
    location: {
      lat: 37.5745971,
      lng: 127.0006569,
      name: "백주년 기념관 웨딩홀",
      detail: "네오트로",
      address: "서울특별시 종로구 대학로3길 29\n 한국교회 100주년 기념관",
      link: "https://map.kakao.com/?urlX=500107.0&urlY=1131934.0&name=%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%8C%80%ED%95%99%EB%A1%9C3%EA%B8%B8%2029&map_type=TYPE_MAP&from=roughmap",
      isMap: true,
      waytocome: [
        {
          type: "metro",
          content:
            "1호선 종로5가역 2번 출구 5분 거리 \n4호선 혜화역 3번 출구 6분 거리 ",
        },
        {
          type: "bus",
          content: "버스 정류소 <이화동 현대그룹 앞> 도보 3분",
        },
        {
          type: "car",
          content: "건물 내 주차장 주차 가능",
        },
      ],
    },
    groom: {
      name: "신희철",
      phoneNumber: "01047247748",
      parents: [
        {
          name: "신정록",
          relationship: "father",
          phoneNumber: "-",
          isDead: false,
        },
        {
          name: "김남순",
          relationship: "mother",
          phoneNumber: "-",
          isDead: false,
        },
      ],
    },
    bride: {
      name: "원하라",
      phoneNumber: "01050352068",
      parents: [
        {
          name: "원경호",
          relationship: "father",
          phoneNumber: "-",
          isDead: true,
        },
        {
          name: "박은진",
          relationship: "mother",
          phoneNumber: "-",
          isDead: false,
        },
      ],
    },
    account: {
      groom: [
        {
          holder: "신희철",
          relationship: "groom",
          isSame: true,
          bankName: "신한은행",
          accountNumber: "110-350-475848",
          kakaopayLink: "",
        },
        {
          holder: "신정록",
          relationship: "father",
          bankName: "하나은행",
          accountNumber: "284-910326-08607",
        },
        {
          holder: "김남순",
          relationship: "mother",
          bankName: "SC제일은행",
          accountNumber: "208-20-129284",
        },
      ],
      bride: [
        {
          holder: "원하라",
          relationship: "bride",
          isSame: true,
          bankName: "하나은행",
          accountNumber: "282-910273-49407",
          kakaopayLink: "",
        },
        {
          holder: "박은진",
          relationship: "mother",
          bankName: "NH 농협은행",
          accountNumber: "387-02-084466",
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
