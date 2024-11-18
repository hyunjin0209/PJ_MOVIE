import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
export default function BoardList() {
  const [category, setcategory] = useState({ pbCategoryCd: 0 });
  const [checkBoardList, setCheckBoardList] = useState([]);
  const [boardList, setBoardList] = useState([]);
  const [page, setPage] = useState(1);
  const nav = useNavigate();
  const a = 1;
  const handleBoardClick = () => {
    if (category.pbCategoryCd !== 0) {
      SelectBoardData();
      setBoardList([]);
    } else {
      alert("카테고리를 선택하여 주세요");
    }
  };

  useEffect(() => {
    BoardData();
  }, []);

  const BoardData = async () => {
    const option = {
      url: "/test/boardList",
      method: "GET",
      data: {},
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200) {
      if (response.data) {
        setBoardList(response.data);
      }
    }
  };

  const SelectBoardData = async () => {
    const option = {
      url: "/test/checkBoardList/" + category.pbCategoryCd,
      method: "GET",
      data: {
        pbCategoryCd: category.pbCategoryCd,
      },
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200) {
      if (response.data) {
        setCheckBoardList(response.data);
      }
    } else {
      alert("에러가 발생하였습니다");
    }
  };

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
          {boardList.map((data, index) => (
            <tr
              key={index}
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => nav("/DetailBoard", { state: { data } })}
            >
              <td>{index + 1}</td>
              <td>{data.pbTitle}</td>
              <td>{data.pbUserId}</td>
            </tr>
          ))}

          {checkBoardList.map((data, index) => (
            <tr
              key={index}
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => nav("/DetailBoard", { state: { data } })}
            >
              <td>{index + 1}</td>
              <td>{data.pbTitle}</td>
              <td>{data.pbUserId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <select
        name="selectbox"
        id="selectbox"
        onChange={(e) => {
          setcategory({
            ...category,
            pbCategoryCd: parseInt(e.target.value),
          });
        }}
      >
        <option>선택하시오</option>
        <option value={1}>환불</option>
        <option value={2}>예매취소</option>
        <option value={3}>예매</option>
      </select>
      <button onClick={handleBoardClick}>조회</button>
      <br />
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={450} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator의 페이지 범위
        prevPageText={"‹"} // "이전"을 나타낼 텍스트
        nextPageText={"›"} // "다음"을 나타낼 텍스트
        onChange={a} // 페이지 변경을 핸들링하는 함수
      />
    </>
  );
}
