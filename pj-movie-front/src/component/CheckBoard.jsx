import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CheckBoard() {
  const [category, setcategory] = useState({ pbCategoryCd: 0 });
  const [boardList, setboardList] = useState([]);
  const nav = useNavigate();
  const handleBoardClick = () => {
    if (category.pbCategoryCd !== 0) {
      SelectBoardData();
    } else {
      alert("카테고리를 선택하여 주세요");
    }
  };
  const SelectBoardData = async () => {
    const option = {
      url: "/test/CheckBoard/" + category.pbCategoryCd,
      method: "GET",
      data: {
        pbCategoryCd: category.pbCategoryCd,
      },
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200) {
      if (response.data) {
        setboardList(response.data);
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
              style={{ color: "black", cursor: "pointer" }}
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
        <option value={0}>선택하시오</option>
        <option value={1}>환불</option>
        <option value={2}>예매취소</option>
        <option value={3}>예매</option>
      </select>
      <button onClick={handleBoardClick}>조회</button>
      <br />
    </>
  );
}
