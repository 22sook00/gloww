import { atom } from "recoil";

export const templateState = atom({
  key: "templateState",
  default: 1,
});

export const weddingDataState = atom({
  key: "weddingDataState",
  default: {
    id: 0,
    date: "2024-09-07T12:20:00",
    location: {
      lat: 37.28163212324522,
      lng: 127.0303329958705,
      name: "월드컵컨벤션 웨딩홀",
      address: "서울 마포구 월드컵로 240 2층\n상암 월드컵컨벤션 웨딩홀",
      link: "",
      waytocome: {
        metro: [""],
        bus: [""],
        car: [""],
      },
    },
    groom: { phoneNumber: null },
    bride: { phoneNumber: null },
    message: {},
    galleryImages: [],
  },
});
