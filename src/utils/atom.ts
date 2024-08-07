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
      date: "2024-09-07T12:20:00",
      isDday: true,
    },
    location: {
      lat: 37.568724,
      lng: 126.8966651,
      name: "상암 월드컵컨벤션 웨딩홀",
      detail: "임페리얼볼룸",
      address: "서울 마포구 월드컵로 240 2층",
      link: "https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,506715,1050669&rt1=&rt2=%EC%88%98%EC%9B%90%EB%85%B8%EB%B8%94%EB%A0%88%EC%8A%A4%EC%9B%A8%EB%94%A9%EC%BB%A8%EB%B2%A4%EC%85%98&rtIds=,9846217",
      isMap: true,
      waytocome: [
        {
          type: "metro",
          content:
            "6호선 월드컵경기장역 2번 출구 도보 3분 (200m)\n월드컵경기장역 2번 출구에 경기장 서측(W) 방향 안내 배너 \n 환승역 : 2호선 합정역, 3호선 불광역·약수역, 4호선 삼각지역, 5호선 공덕역",
        },
        {
          type: "bus",
          content:
            "월드컵경기장 서측. 문화비축기지 정류장 하차 도보 3분 \n 간선 : 571, 710, 760 \n지선 : 7019, 7715, 8777 \n광역 : 9711",
        },
        {
          type: "car",
          content:
            "월드컵경기장 서문 진입 후 서측 1,2 주차장 이용 \n주차 접수대 사전 등록 후 출차 (90분 무료) \n경기·행사일 서측 주차장 만차 시 주차 요원 안내에 따라 \n 난지천공원, 평화의공원, 마포구청 이용 (2시간 무료)",
        },
      ],
    },
    groom: {
      name: "허용준",
      phoneNumber: "01071852791",
      parents: [
        {
          name: "허철근",
          relationship: "father",
          phoneNumber: "01053242422",
          isDead: false,
        },
        {
          name: "강혜자",
          relationship: "mother",
          phoneNumber: "01062632991",
          isDead: false,
        },
      ],
    },
    bride: {
      name: "이숙영",
      phoneNumber: "01050352068",
      parents: [
        {
          name: "이유묵",
          relationship: "father",
          phoneNumber: "01037982067",
          isDead: false,
        },
        {
          name: "박예경",
          relationship: "mother",
          phoneNumber: "01052432068",
          isDead: false,
        },
      ],
    },
    account: {
      groom: [
        {
          holder: "허용준",
          relationship: "groom",
          isSame: true,
          bankName: "카카오뱅크",
          accountNumber: "3333-13-1890279",
          kakaopayLink: "https://qr.kakaopay.com/FPfdj1H2r",
        },
        {
          holder: "허철근",
          relationship: "father",
          bankName: "새마을금고",
          accountNumber: "9003-2875-6557-2",
        },
        {
          holder: "강혜자",
          relationship: "mother",
          bankName: "우리은행",
          accountNumber: "078-045475-02-201",
        },
      ],
      bride: [
        {
          holder: "이숙영",
          relationship: "bride",
          isSame: true,
          bankName: "카카오뱅크",
          accountNumber: "3333-10-5404029",
          kakaopayLink: "https://link.kakaopay.com/_/R_EKw_5",
        },
        {
          holder: "이유묵",
          relationship: "father",
          bankName: "NH 농협은행",
          accountNumber: "193-02-193356",
        },
        {
          holder: "박예경",
          relationship: "mother",
          bankName: "NH 농협은행",
          accountNumber: "241094-52-074040",
        },
      ],
    },
    greeting: {
      content:
        "<p>가장 진실된 것으로\n가장 당신을 위한 생각으로\n나의 마음을 가득 채워가고 싶다</p> \n참 작은 마음이지만\n당신을 위한 것 중 가장 작은 것일지라도\n당신이 허락해준다면\n나 내 온 마음 그것이라 하겠다.\n\n이경선, <마음>",
      type: "step",
    },
    galleryImages: [
      "/assets/images/wedding_01.jpg",
      "/assets/images/wedding_02.jpg",
      "/assets/images/wedding_03.jpg",
      "/assets/images/wedding_04.jpg",
      "/assets/images/wedding_05.jpg",
      "/assets/images/wedding_06.jpg",
      "/assets/images/wedding_07.jpg",
      "/assets/images/wedding_08.jpg",
      "/assets/images/wedding_09.jpg",
      "/assets/images/wedding_10.jpg",
      "/assets/images/wedding_11.jpg",
      "/assets/images/wedding_12.jpg",
    ],
  },
});
