import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      아이디
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, pmUserId: e.target.value });
        }}
      />
      <br />
      비밀번호
      <input
        type="password"
        onChange={(e) => {
          setFormData({ ...formData, pmUserPwd: e.target.value });
        }}
      />
      <br />
      <button onClick={logIn}>로그인</button>
      <button onClick={() => nav("/FindId")}>아이디찾기</button>
      <button onClick={() => nav("/ResetPassword")}>비밀번호변경</button>
    </>
  );
}
