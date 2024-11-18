import { useNavigate } from "react-router-dom";
import { MovieData } from "../image.js/MovieData/MovieData";
import "../css/MainHome.css";

export default function MainHome() {
  const nav = useNavigate();

  return (
    <div className="main-home">
      <header className="header">
        <h1>영화 홈페이지</h1>
        <div className="button-container">
          <button onClick={() => nav("/Login")}>로그인</button>
          <button onClick={() => nav("/UserJoin")}>회원가입</button>
          <button onClick={() => nav("/BoardList")}>게시판</button>
        </div>
      </header>

      <div className="movie-grid">
        {MovieData.map((data, index) => (
          <div key={index} className="movie-item">
            <div className="movie-no">{data.No}</div>
            <div className="movie-title">{data.Title}</div>
            <img src={data.Image} className="movie-image" />
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>
          © 2024 Movie homepage project. <br />☎ 02-000-0000.
        </p>
      </footer>
    </div>
  );
}
