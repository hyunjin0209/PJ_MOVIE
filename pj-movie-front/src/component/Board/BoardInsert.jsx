import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoartWriting() {
  let checkId = sessionStorage.getItem("id");

  const [formData, setFormData] = useState();
  const nav = useNavigate();
  const inSert = () => {
    boardInsertData();
  };
  const boardInsertData = async () => {
    console.log(formData);

    const option = {
      url: "/test/boardInsert/" + formData.pbCategoryCd,
      method: "POST",
      data: {
        pbTitle: formData.pbTitle,
        pbContent: formData.pbContent,
        pbCategoryCd: formData.pbCategoryCd,
        pbUserId: checkId,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200) {
      alert("성공적으로 등록이 완료되었습니다");

      //   nav("/CheckBoard");
    }
  };
  return (
    <>
      <select
        name="selectbox"
        id="selectbox"
        onChange={(e) => {
          setFormData({
            ...formData,
            pbCategoryCd: parseInt(e.target.value),
          });
        }}
      >
        <option value={0}>선택하시오</option>
        <option value={1}>환불</option>
        <option value={2}>예매취소</option>
        <option value={3}>예매</option>
      </select>
      <br />
      제목
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, pbTitle: e.target.value });
        }}
      />
      <br />
      내용
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, pbContent: e.target.value });
        }}
      />
      <button onClick={inSert}>등록</button>
    </>
  );
}
