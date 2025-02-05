import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResetPassword2({ formData, setFormData }) {
  console.log(formData);
  const nav = useNavigate();
  const ResetPwd2 = () => {
    if (formData.pmUserPwd === formData.pmUserPwd2) {
      resetUserData2();
      alert("비밀번호가 변경되었습니다");
    } else {
      alert("패스워드를 확인해주세요");
    }
  };

  const resetUserData2 = async () => {
    console.log(formData);

    const option = {
      url: "/api/auth/resetPwd2",
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
      <div className="user-join-wrapper">
        <div className="user-join-container">
          <label className="input-label">재설정 비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) =>
              setFormData({ ...formData, pmUserPwd: e.target.value })
            }
          />

          <label className="input-label">비밀번호 확인인</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) =>
              setFormData({ ...formData, pmUserPwd2: e.target.value })
            }
          />
          <button className="join-button" onClick={ResetPwd2}>
            비밀번호 재설정
          </button>
        </div>
      </div>
    </>
  );
}
