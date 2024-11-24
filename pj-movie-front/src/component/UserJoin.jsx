import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserJoin() {
  const nav = useNavigate();
  const [formData, setFormData] = useState();

  const Join = () => {
    signUpUserData();
  };
  const signUpUserData = async () => {
    const option = {
      url: "/test/userJoin",
      method: "POST",
      data: {
        pmUserId: formData.pmUserId,
        pmUserEmail: formData.pmUserEmail,
        pmUserBd: formData.pmUserBd,
        pmUserName: formData.pmUserName,
        pmUserPhone: formData.pmUserPhone,
        pmUserPwd: formData.pmUserPwd,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };
    const response = await axios(option);
    if (response.status === 200) {
      setFormData(response.data);
      alert("회원가입이 완료되었습니다");
      nav("/NowScreening");
    }
  };
  return (
    <>
      <h2>회원가입</h2>
      <br />
      아이디{" "}
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, pmUserId: e.target.value });
        }}
      />
      <br />
      비밀번호{" "}
      <input
        type="password"
        onChange={(e) => {
          setFormData({ ...formData, pmUserPwd: e.target.value });
        }}
      />
      <br />
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
      <button onClick={Join}>회원가입</button>
    </>
  );
}
