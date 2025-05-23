import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
export const formatDate = (dateString: string) => {
  const date = dayjs(dateString);
  const datePart = date.format("YYYY년 M월 D일 dddd");
  const timePart = date.format("A h시 m분");
  return { datePart, timePart };
};

export const formatBoardDate = (dateString: string) => {
  const date = dayjs(dateString);
  return date.format("YYYY-MM-DD_hh:mm");
};

export const formatTransportation: Record<string, string> = {
  metro: "지하철",
  bus: "버스",
  car: "주차",
};
