import axios, { all } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/UserJoin.css";

export default function UserJoin() {
  const nav = useNavigate();
  const [formData, setFormData] = useState();

  const Join = () => {
    signUpUserData();
  };
  const signUpUserData = async () => {
    const option = {
      url: "/api/auth/userJoin",
      method: "POST",
      data: {
        pmUserId: formData.pmUserId,
        pmUserEmail: formData.pmUserEmail,
        pmUserBd: formData.pmUserBd,
        pmUserName: formData.pmUserName,
        pmUserPhone: formData.pmUserPhone,
        pmUserPwd: formData.pmUserPwd,
      },
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setFormData(response.data);
      alert("회원가입이 완료되었습니다");
      nav("/");
    } else {
      alert("모든 정보를 입력해주세요");
    }
  };

  return (
    <div className="user-join-wrapper">
      {" "}
      <div className="user-join-container">
        <h2>회원가입</h2>
        <div className="join-form">
          <label className="input-label">아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            onChange={(e) =>
              setFormData({ ...formData, pmUserId: e.target.value })
            }
          />
          <label className="input-label">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) =>
              setFormData({ ...formData, pmUserPwd: e.target.value })
            }
          />
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
        </div>
        <button className="join-button" onClick={Join}>
          회원가입
        </button>
      </div>
    </div>
  );
}
