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
    <div className="user-join-wrapper">
      {step === "step1" && (
        <div className="user-join-container">
          <div>
            <h2>비밀번호 변경</h2>
            <div className="join-form">
              <label className="input-label">이름</label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                onChange={(e) =>
                  setFormData({ ...formData, pmUserName: e.target.value })
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

              <label className="input-label">아이디</label>
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                onChange={(e) =>
                  setFormData({ ...formData, pmUserId: e.target.value })
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
              <button className="join-button" onClick={ResetPwd}>
                다음
              </button>
            </div>
          </div>
        </div>
      )}

      {step === "step2" && (
        <div>
          <ResetPassword2 formData={formData} setFormData={setFormData} />
        </div>
      )}
    </div>
  );
}
