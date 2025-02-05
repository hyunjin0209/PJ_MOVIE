import axios from "axios";
import { useState } from "react";
import FindId2 from "./FindId2.jsx";
import "../../css/UserJoin.css";

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
    <div className="user-join-wrapper">
      {resultId === null && (
        <div className="user-join-container">
          <div>
            <h2>아이디찾기</h2>
            <div className="join-form">
              <label className="input-label">이름</label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                onChange={(e) =>
                  setFormData({ ...formData, pmUserName: e.target.value })
                }
              />

              <label className="input-label">이메일</label>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                onChange={(e) =>
                  setFormData({ ...formData, pmUserEmail: e.target.value })
                }
              />

              <label className="input-label">핸드폰 번호 (-없이)</label>
              <input
                type="text"
                placeholder="ex)01012345678"
                onChange={(e) =>
                  setFormData({ ...formData, pmUserPhone: e.target.value })
                }
              />

              <label className="input-label">생년월일 (8자리)</label>
              <input
                type="text"
                placeholder="ex)19990101"
                onChange={(e) =>
                  setFormData({ ...formData, pmUserBd: e.target.value })
                }
              />

              <button className="join-button" onClick={ClickFindId}>
                아이디찾기
              </button>
            </div>
          </div>
        </div>
      )}
      {resultId !== null && <FindId2 id={resultId} />}
    </div>
  );
}
