import { useState } from "react";
import UserDataUpdate2 from "./UserDataUpdate2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserDataUpdate() {
  const [formData, setFormData] = useState();
  const nav = useNavigate();
  const [step, setStep] = useState("step1");

  const CheckData = () => {
    CheckUserData();
  };

  const CheckUserData = async () => {
    console.log(formData);

    const option = {
      url: "/api/auth/userData",
      method: "POST",
      data: {
        pmUserPwd: formData.pmUserPwd,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200 && response.data) {
      setStep("step2");
    } else {
      alert("비밀번호가 다릅니다");
    }
  };

  return (
    <>
      {step === "step1" && (
        <div>
          비밀번호확인
          <input
            type="password"
            onChange={(e) => {
              setFormData({ ...formData, pmUserPwd: e.target.value });
            }}
          />
          <br />
          <button onClick={CheckData}>확인</button>
        </div>
      )}

      {step === "step2" && (
        <div>
          <UserDataUpdate2 formData={formData} setFormData={setFormData} />
        </div>
      )}
    </>
  );
}
