import { Wedding } from "@/interface/wedding";

export const WEDDING_FORM_INIT: Wedding = {
  id: 0,
  design: {
    mainImage: "/imgs/mainSample.png",
    template: "1",
    font: "pretendard",
    color: "#F9F9F9",
    effect: "none",
  },
  date: {
    date: "2024-09-07T12:20:00",
    isDday: true,
  },
  groom: {
    name: "김신랑",
    phoneNumber: "01012341234",
    parents: [
      {
        name: "김신랑아버님",
        phoneNumber: "",
        isDead: false,
        relationship: "father",
      },
      {
        name: "김신랑어머님",
        phoneNumber: "",
        isDead: false,
        relationship: "mother",
      },
    ],
  },
  bride: {
    name: "박신부",
    phoneNumber: "01012341234",
    parents: [
      {
        name: "박신부아버님",
        relationship: "father",
        phoneNumber: "",
        isDead: false,
      },
      {
        name: "박신부어머님",
        relationship: "mother",
        phoneNumber: "",
        isDead: false,
      },
    ],
  },
  account: {
    groom: [
      {
        relationship: "groom",
        isSame: true,
        bankName: "",
        accountNumber: "",
        kakaopayLink: "",
      },
      {
        relationship: "",
        bankName: "",
        accountNumber: "",
        kakaopayLink: "",
      },
    ],
    bride: [
      {
        relationship: "bride",
        isSame: true,
        bankName: "",
        accountNumber: "",
        kakaopayLink: "",
      },
    ],
  },
  greeting: {
    content:
      "<p>가장 진실된 것으로\n가장 당신을 위한 생각으로\n나의 마음을 가득 채워가고 싶다</p> \n참 작은 마음이지만\n당신을 위한 것 중 가장 작은 것일지라도\n당신이 허락해준다면\n나 내 온 마음 그것이라 하겠다.\n\n이경선, <마음>",
    type: "step",
  },
  location: {
    lat: 37.28163212324522,
    lng: 127.0303329958705,
    name: "월드컵컨벤션 웨딩홀",
    detail: "3F 노블레스홀",
    address: "서울 마포구 월드컵로 240 2층\n상암 월드컵컨벤션 웨딩홀",
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
      { type: "direct", content: "걸어서" },
    ],
  },
  gallary: {
    layout: "slide",
    galleryImages: [],
  },
  board: {
    password: null,
  },
  outro: {
    outroImage: "",
    content: "",
    type: "poem1",
  },
  attendCount: 1000010,
};
