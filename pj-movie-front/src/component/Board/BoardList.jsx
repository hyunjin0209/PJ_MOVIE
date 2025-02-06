import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../../css/BoardList.css";
export default function BoardList() {
  const [category, setCategory] = useState({ pbcCd: 0 });
  const [boardList, setBoardList] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsPerPage = 10; // 한 페이지당 항목 수
  const nav = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    setsessionDate();
  };
  const [sessionDate, setsessionDate] = useState(sessionStorage.getItem("id"));
  const handleBoardClick = () => {
    if (category.pbcCd !== null) {
      setPage(1); // 페이지 초기화
      SelectBoardData();
    } else {
      alert("카테고리를 선택하여 주세요");
    }
  };

  useEffect(() => {
    SelectBoardData();
  }, []);

  const SelectBoardData = async () => {
    const option = {
      url: "/api/board/checkBoardList/" + category.pbcCd,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setBoardList(response.data);
    } else {
      alert("에러가 발생하였습니다");
    }
  };

  const handlePageChange = (Page) => {
    setPage(Page);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentBoardList = boardList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
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
        <div className="board-container">
          <table className="board-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>제목</th>
                <th>작성자ID</th>
              </tr>
            </thead>
            <tbody>
              {currentBoardList.map((data, index) => (
                <tr
                  key={index}
                  onClick={() => nav("/DetailBoard", { state: { data } })}
                >
                  <td>{(page - 1) * itemsPerPage + index + 1}</td>
                  <td>{data.pbTitle}</td>
                  <td>{data.pmUserId}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <select
            className="category-select"
            onChange={(e) =>
              setCategory({ ...category, pbcCd: parseInt(e.target.value) })
            }
          >
            <option>선택하시오</option>
            <option value={1}>환불</option>
            <option value={2}>예매취소</option>
            <option value={3}>예매</option>
          </select>
          <button className="board-button" onClick={handleBoardClick}>
            조회
          </button>

          <Pagination
            activePage={page}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={boardList.length}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}
            className="board-pagination"
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
