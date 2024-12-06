import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const nav = useNavigate();

  const [sessionDate, setsessionDate] = useState(sessionStorage);

  const logout = () => {
    sessionStorage.clear();
    setsessionDate();
  };

  return (
    <>
      <div className="main-home">
        <header className="header">
          <h1>영화 홈페이지</h1>
          <div className="button-container">
            <div>
              {sessionDate ? (
                <button onClick={logout}>로그아웃</button>
              ) : (
                <button onClick={() => nav("/Login")}>로그인</button>
              )}
            </div>

            <button onClick={() => nav("/UserJoin")}>회원가입</button>
            <button onClick={() => nav("/BoardList")}>게시판</button>
          </div>
        </header>

        <footer className="footer">
          <p>
            © 2024 Movie homepage project. <br />☎ 02-000-0000.
          </p>
        </footer>
      </div>
    </>
  );
}