import { atom } from "recoil";

export const templateState = atom({
  key: "templateState",
  default: 1,
});

export const weddingDataState = atom({
  key: "weddingDataState",
  default: {
    id: 0,
    date: { date: "2024-09-07T12:20:00" },
    location: {
      lat: 37.5682,
      lng: 126.8974,
      name: "월드컵컨벤션 웨딩홀",
      detail: "임페리얼 홀",
      isMap: true,
      address: "서울 마포구 월드컵로 240 2층\n상암 월드컵컨벤션 웨딩홀",
      link: "",
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
      name: "",
      account: {},
      parents: [{ name: "", account: {}, phoneNumber: "" }],
      phoneNumber: null,
    },
    bride: {
      name: "",
      account: {},
      parents: [{ name: "", account: {}, phoneNumber: "" }],
      phoneNumber: null,
    },
    message: {},
    galleryImages: [],
  },
});
