// UserDataUpdate Component
import { useState } from "react";
import UserDataUpdate2 from "./UserDataUpdate2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/UserDataUpdate.css"; // Add the CSS file here

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
    <div className="container">
      {step === "step1" && (
        <div className="step1-container">
          <h2>비밀번호확인</h2>
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
        <div className="step2-container">
          <UserDataUpdate2 formData={formData} setFormData={setFormData} />
        </div>
      )}
    </div>
  );
}
