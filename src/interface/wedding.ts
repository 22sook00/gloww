export interface Wedding {
  id: number;
  design: Design;
  date: Date;
  location: Location;
  groom: Info;
  bride: Info;
  greeting: Greeting;
  gallary: Gallary;
  account: {
    groom: Account[];
    bride: Account[];
  };
  board: Board;
  outro: Outro;
  attendCount?: number;
}
/**디자인 */
export interface Design {
  mainImage: string;
  template: string;
  color: string;
  font: "pretendard" | "bookk" | "nanum";
  effect: "none" | "snow" | "confetti" | "sakura" | "wave";
}
export interface Date {
  date: string; //2024-09-07T12:20:00
  isDday: boolean;
}

/**신랑 & 신부 정보 */
export interface Info {
  name: string;
  phoneNumber: string;
  parents: Parents[];
}

export interface Parents {
  name: string;
  phoneNumber: string;
  isDead: boolean;
  relationship: "father" | "mother";
}

export interface Greeting {
  content: string;
  type: "love" | "family" | "situation" | "respect" | "step";
}

export interface Location {
  lat: number;
  lng: number;
  name: string;
  detail: string;
  address: string;
  link: string;
  isMap: boolean;
  waytocome: {
    type: "metro" | "bus" | "car" | "direct";
    content: string;
  }[];
}

export interface Gallary {
  layout: "slide" | "grid" | "collague";
  galleryImages: string[];
}

export interface Account {
  relationship: string;
  bankName: string;
  accountNumber: string;
  kakaopayLink?: string;
  isSame?: boolean;
  holder: string;
}

export interface Board {
  password: number | null;
}

export interface Outro {
  outroImage: string;
  content: string;
  type:
    | "appreciation1"
    | "appreciation2"
    | "poem1"
    | "poem2"
    | "movie1"
    | "movie2";
}
