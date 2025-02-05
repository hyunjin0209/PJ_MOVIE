import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/MainHome.css";
import { MovieData } from "../../image.js/MovieData/MovieData";
import Pagination from "react-js-pagination";
export default function MainPage() {
  const nav = useNavigate();

  const [sessionDate, setsessionDate] = useState(sessionStorage.getItem("id"));

  const logout = () => {
    sessionStorage.clear();
    setsessionDate();
  };
  const [page, setPage] = useState(1);
  let itemsPerPage = 3;

  const handlePageChange = (page) => {
    setPage(page);
  };
  const startIndex = (page - 1) * itemsPerPage;
  const movies = MovieData.slice(startIndex, startIndex + itemsPerPage);

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
            <div>
              {sessionDate ? (
                <button onClick={() => nav("/MyPage")}>내정보</button>
              ) : (
                <button onClick={() => nav("UserJoin")}>회원가입</button>
              )}
            </div>
            <button onClick={() => nav("/BoardList")}>게시판</button>
          </div>
        </header>
        <button className="q-button" onClick={() => nav("/NowScreening")}>
          영화리스트
        </button>
        <button className="q-button" onClick={() => nav("/SelectRegion")}>
          영화예매
        </button>
        <h1>주간 인기영화 순위</h1>
        <div className="movie-grid">
          {movies.map((data, index) => (
            <div key={index} className="movie-item">
              <div className="movie-no">{data.No}</div>
              <div className="movie-title">{data.Title}</div>
              <img src={data.Image} className="movie-image" />
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={MovieData.length}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </div>

        <footer className="footer">
          <p>
            © 2024 Movie homepage project. <br />☎ 02-000-0000.
          </p>
        </footer>
      </div>
    </>
  );
}
