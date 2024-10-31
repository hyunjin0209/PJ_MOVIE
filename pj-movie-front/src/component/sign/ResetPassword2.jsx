import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResetPassword2({ formData, setFormData }) {
  console.log(formData);
  const nav = useNavigate();
  const ResetPwd2 = () => {
    if (formData.pmUserPwd === formData.pmUserPwd2) {
      resetUserData2();
    } else {
      alert("패스워드를 확인해주세요");
    }
  };

  const resetUserData2 = async () => {
    console.log(formData);

    const option = {
      url: "/test/resetPwd2",
      method: "POST",
      data: {
        pmUserPwd: formData.pmUserPwd,
        pmUserId: formData.pmUserId,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200) {
      if (response.data) {
        nav("/login");
      }
    }
  };
  return (
    <>
      재설정 비밀번호
      <input
        type="password"
        onChange={(e) => {
          setFormData({ ...formData, pmUserPwd: e.target.value });
        }}
      />
      <br />
      비밀번호 확인
      <input
        type="password"
        onChange={(e) => {
          setFormData({ ...formData, pmUserPwd2: e.target.value });
        }}
      />
      <br />
      <button onClick={ResetPwd2}>비밀번호 재설정</button>
    </>
  );
}
