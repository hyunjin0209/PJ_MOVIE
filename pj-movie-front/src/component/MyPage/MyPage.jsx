import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const nav = useNavigate();
  return (
    <>
      <button onClick={() => nav("/UserDataUpdate")}>회원정보수정</button>
      <button onClick={() => nav("/AskList")}>문의내역</button>
    </>
  );
}
