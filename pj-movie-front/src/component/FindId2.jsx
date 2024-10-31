import { useNavigate } from "react-router-dom";

export default function FindId2({ id }) {
  const nav = useNavigate();
  const ClickHome = () => {
    nav("/MainHome");
  };
  const ClickLogin = () => {
    nav("/Login");
  };
  return (
    <>
      귀하의 ID는 ({id}) 입니다
      <br />
      <button onClick={ClickHome}>홈페이지로</button>
      <button onClick={ClickLogin}>로그인</button>
    </>
  );
}
