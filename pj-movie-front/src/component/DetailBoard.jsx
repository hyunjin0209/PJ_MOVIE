import { useLocation } from "react-router-dom";

export default function DetailBoard() {
  const location = useLocation();
  const boardData = location.state.data;
  console.log(boardData);
  return (
    <>
      No. : <input type="text" value={boardData.pbId} readOnly />
      <br />
      제목 : <input type="text" value={boardData.pbTitle} readOnly />
      <br />
      작성자 : <input type="text" value={boardData.pbUserId} readOnly />
      <br />
      내용 : <input type="text" value={boardData.pbContent} readOnly />
      <br />
      작성일자 : <input type="text" value={boardData.pbRegDt} readOnly />
    </>
  );
}
