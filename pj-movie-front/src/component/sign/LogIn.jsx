import axios from "axios";
import { useState } from "react";

export default function LogIn() {
  const [formData, setFormData] = useState();

  const logIn = () => {
    loginData();
  };
  const loginData = async () => {
    const option = {
      url: "/test/userLogin",
      method: "POST",
      data: {
        pmUserId: formData.pmUserId,
        pmUserPwd: formData.pmUserPwd,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    console.log(option);

    const response = await axios(option);
    console.log(response.data);
    if (response.status === 200) {
      console.log(response.data);
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
    </>
  );
}
