import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

export default function BoardList() {
  const [category, setCategory] = useState({ pbCategoryCd: 0 });
  const [boardList, setBoardList] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsPerPage = 10; // 한 페이지당 항목 수
  const nav = useNavigate();

  const handleBoardClick = () => {
    if (category.pbCategoryCd !== null) {
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
      url: "/api/board/checkBoardList/" + category.pbCategoryCd,
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
      <table>
        <thead>
          <tr style={{ fontWeight: "bold" }}>
            <td>No.</td>
            <td>제목</td>
            <td>작성자ID</td>
          </tr>
        </thead>
        <tbody>
          {currentBoardList.map((data, index) => (
            <tr
              key={index}
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => nav("/DetailBoard", { state: { data } })}
            >
              <td>{(page - 1) * itemsPerPage + index + 1}</td>
              <td>{data.pbTitle}</td>
              <td>{data.pbUserId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <select
        name="selectbox"
        id="selectbox"
        onChange={(e) =>
          setCategory({ ...category, pbCategoryCd: parseInt(e.target.value) })
        }
      >
        <option>선택하시오</option>
        <option value={1}>환불</option>
        <option value={2}>예매취소</option>
        <option value={3}>예매</option>
      </select>
      <button onClick={handleBoardClick}>조회</button>
      <br />

      <Pagination
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={boardList.length}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
    </>
  );
}
