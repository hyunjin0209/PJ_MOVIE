import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/MyPage.css";

export default function MyPage() {
  const nav = useNavigate();
  const [sessionDate, setsessionDate] = useState(sessionStorage.getItem("id"));

  const logout = () => {
    sessionStorage.clear();
    setsessionDate(null);
  };

  return (
    <div className="main-home">
      {/* 헤더 */}
      <header className="header">
        <div className="button-container">
          {sessionDate ? (
            <>
              <button onClick={logout}>로그아웃</button>
              <button onClick={() => nav("/MyPage")}>내정보</button>
            </>
          ) : (
            <>
              <button onClick={() => nav("/Login")}>로그인</button>
              <button onClick={() => nav("/UserJoin")}>회원가입</button>
            </>
          )}
          <button onClick={() => nav("/BoardList")}>게시판</button>
        </div>

        <h1 onClick={() => nav("/")}>🎬 영화 홈페이지</h1>
      </header>

      {/* 헤더 아래, 바디 상단 버튼 */}
      <div className="top-button-container">
        <button onClick={() => nav("/UserDataUpdate")}>회원정보수정</button>
        <button onClick={() => nav("/CheckReservation")}>예매내역</button>
        <button onClick={() => nav("/AskList")}>문의내역</button>
      </div>

      {/* 푸터 */}
      <footer className="footer">
        <p>
          © 2024 Movie homepage project. <br />☎ 02-000-0000.
        </p>
      </footer>
    </div>
  );
}
