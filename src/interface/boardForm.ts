export const INIT_BOARD_FORM = {
  id: "",
  writer: "",
  password: "",
  message: "",
  created_at: "",
};
export interface BoardFormProps {
  id: string;
  writer: string;
  password?: string;
  message: string;
  created_at?: string;
}
