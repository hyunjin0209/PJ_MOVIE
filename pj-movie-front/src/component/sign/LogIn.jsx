import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Login.css";
export default function LogIn() {
  const [formData, setFormData] = useState();
  const nav = useNavigate();
  const logIn = () => {
    loginData();
  };

  console.log(formData);

  const loginData = async () => {
    const option = {
      url: "/api/auth/userLogin",
      method: "POST",
      data: {
        pmUserName: formData.pmUserName,
        pmUserBd: formData.pmUserBd,
        pmUserId: formData.pmUserId,
        pmUserEmail: formData.pmUserEmail,
        pmUserPhone: formData.pmUserPhone,
        pmUserPwd: formData.pmUserPwd,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);
    // console.log(response.data);
    if (response.status === 200) {
      if (response.data) {
        sessionStorage.setItem("name", response.data.pmUserName);
        sessionStorage.setItem("birth date", response.data.pmUserBd);
        sessionStorage.setItem("id", response.data.pmUserId);
        sessionStorage.setItem("email", response.data.pmUserEmail);
        sessionStorage.setItem("phone number", response.data.pmUserPhone);
        nav("/");
      } else {
        alert("아이디 또는 비밀번호가 다릅니다");
      }
    }
  };

  return (
    <div className="main-home">
      <header className="header">
        <h1 onClick={() => nav("/")}>영화 홈페이지</h1>
      </header>

      <div className="main-login">
        <div className="container">
          <h2>로그인</h2>
          <div className="input-with-button">
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) =>
                setFormData({ ...formData, pmUserId: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) =>
                setFormData({ ...formData, pmUserPwd: e.target.value })
              }
            />
            <button className="login-button" onClick={logIn}>
              로그인
            </button>
          </div>
          <div className="extra-buttons-horizontal">
            <button onClick={() => nav("/FindId")}>아이디 찾기</button>
            <button onClick={() => nav("/ResetPassword")}>비밀번호 변경</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          © 2024 Movie homepage project. <br />☎ 02-000-0000.
        </p>
      </footer>
    </div>
  );
}
