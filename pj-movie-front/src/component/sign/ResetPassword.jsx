import axios from "axios";
import { useState } from "react";
import ResetPassword2 from "./ResetPassword2";
// import { useNavigate } from "react-router-dom";
export default function ResetPassword() {
  const [formData, setFormData] = useState();
  // const nav = useNavigate();
  const [step, setStep] = useState("step1");
  const ResetPwd = () => {
    resetUserData();
  };

  const resetUserData = async () => {
    console.log(formData);

    const option = {
      url: "/api/auth/resetPwd",
      method: "POST",
      data: {
        pmUserName: formData.pmUserName,
        pmUserBd: formData.pmUserBd,
        pmUserId: formData.pmUserId,
        pmUserEmail: formData.pmUserEmail,
        pmUserPhone: formData.pmUserPhone,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200 && response.data) {
      setStep("step2");
      //   setFormData(response.data);
      //   //   nav("/login");
    } else {
      alert("정보가 틀렸습니다");
    }
  };

  return (
    <>
      {step === "step1" && (
        <div>
          이름
          <input
            onChange={(e) => {
              setFormData({ ...formData, pmUserName: e.target.value });
            }}
          />
          <br />
          생년월일
          <input
            onChange={(e) => {
              setFormData({ ...formData, pmUserBd: e.target.value });
            }}
          />
          <br />
          아이디
          <input
            onChange={(e) => {
              setFormData({ ...formData, pmUserId: e.target.value });
            }}
          />
          <br />
          이메일
          <input
            onChange={(e) => {
              setFormData({ ...formData, pmUserEmail: e.target.value });
            }}
          />
          <br />
          전화번호
          <input
            onChange={(e) => {
              setFormData({ ...formData, pmUserPhone: e.target.value });
            }}
          />
          <br />
          <button onClick={ResetPwd}>다음</button>
        </div>
      )}

      {step === "step2" && (
        <div>
          <ResetPassword2 formData={formData} setFormData={setFormData} />
        </div>
      )}
    </>
  );
}
