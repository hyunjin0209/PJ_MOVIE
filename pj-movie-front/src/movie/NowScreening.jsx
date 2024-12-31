import { useNavigate } from "react-router-dom";
import { MovieData } from "../image.js/MovieData/MovieData";
import "c:/Users/82108/Desktop/B.O-project/PJ_MOVIE/pj-movie-front/src/css/MainHome.css";
import { useState } from "react";
import Pagination from "react-js-pagination";
export default function NowScreening() {
  const nav = useNavigate();
  const [sessionDate, setsessionDate] = useState(sessionStorage.getItem("id"));

  const [page, setPage] = useState(1);
  let itemsPerPage = 3;

  const handlePageChange = (page) => {
    setPage(page);
  };

  const logout = () => {
    sessionStorage.clear();
    setsessionDate();
  };

  // 페이지 변경 시 currentMovies를 업데이트
  const startIndex = (page - 1) * itemsPerPage;
  const movies = MovieData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="main-home">
      <header className="header">
        <h1 onClick={() => nav("/")}>영화 홈페이지</h1>
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
      <h1>상영 중 영화 목록</h1>
      <div className="movie-grid">
        {movies.map((data, index) => (
          <div key={index} className="movie-item">
            <div className="movie-no">{data.No}</div>
            <div className="movie-title">{data.Title}</div>
            <img src={data.Image} className="movie-image" />
          </div>
        ))}
      </div>

      {/* 페이지네이션을 movie-grid 바깥에 배치 */}
      <div className="pagination-container">
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={itemsPerPage} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={MovieData.length} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={"‹"} // "이전"을 나타낼 텍스트
          nextPageText={"›"} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
      </div>

      <footer className="footer">
        <p>
          © 2024 Movie homepage project. <br />☎ 02-000-0000.
        </p>
      </footer>
    </div>
  );
}
