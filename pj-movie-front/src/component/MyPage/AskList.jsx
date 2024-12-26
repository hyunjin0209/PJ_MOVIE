import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

export default function AskList() {
  const [askList, setAskList] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지
  const itemsPerPage = 10; // 한 페이지당 항목 수
  const nav = useNavigate();
  let checkId = sessionStorage.getItem("id");
  useEffect(() => {
    SelectAskListData();
  }, []);

  const SelectAskListData = async () => {
    const option = {
      url: "/api/board/askList/" + checkId,
      method: "Get",
      data: {
        pmUserId: checkId,
      },
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setAskList(response.data);
    } else {
      alert("에러가 발생하였습니다");
    }
  };

  const handlePageChange = (Page) => {
    setPage(Page);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentBoardList = askList.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <table>
        <thead>
          <tr style={{ fontWeight: "bold" }}>
            <td>No.</td>
            <td>카테고리</td>
            <td>제목</td>
            <td>작성자ID</td>
            <td>작성일시</td>
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
              <td>{data.pbcName}</td>
              <td>{data.pbTitle}</td>
              <td>{checkId}</td>
              <td>{data.pbRegDt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={askList.length}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
    </>
  );
}
