import axios from "axios";
import { useState } from "react";
import FindId2 from "./FindId2";

export default function FindId() {
  const [formData, setFormData] = useState();
  const [resultId, setResultId] = useState(null);
  const ClickFindId = () => {
    SelectMemberIdData();
  };

  const SelectMemberIdData = async () => {
    const option = {
      url: "/api/auth/findId",
      method: "POST",
      data: {
        pmUserName: formData.pmUserName,
        pmUserEmail: formData.pmUserEmail,
        pmUserPhone: formData.pmUserPhone,
        pmUserBd: formData.pmUserBd,
      },
      headers: { "Content-Type": `application/json` },
    };

    const response = await axios(option);
    if (response.status === 200) {
      if (response.data) {
        setResultId(response.data);
      } else {
        alert("입력한 정보가 일치하지 않습니다");
      }
    } else {
      alert("에러가 발생하였습니다");
    }
  };

  return (
    <>
      {resultId === null && (
        <div>
          <h2>아이디찾기</h2>
          이름{" "}
          <input
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, pmUserName: e.target.value });
            }}
          />
          <br />
          이메일{" "}
          <input
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, pmUserEmail: e.target.value });
            }}
          />
          <br />
          핸드폰번호(-없이){" "}
          <input
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, pmUserPhone: e.target.value });
            }}
          />
          <br />
          생년월일(8자리){" "}
          <input
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, pmUserBd: e.target.value });
            }}
          />
          <br />
          <button onClick={ClickFindId}>아이디찾기</button>
        </div>
      )}

      {resultId !== null && <FindId2 id={resultId} />}
    </>
  );
}
