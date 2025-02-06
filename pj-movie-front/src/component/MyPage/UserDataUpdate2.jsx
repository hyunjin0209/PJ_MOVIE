// UserDataUpdate2 Component
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/UserDataUpdate.css"; // Add the CSS file here

export default function UserDataUpdate2({ formData, setFormData }) {
  const nav = useNavigate();
  const [isEditing, setIsEditing] = useState(true);
  let checkId = sessionStorage.getItem("id");

  useEffect(() => {
    if (checkId) {
      userData();
    }
  }, []);

  const userData = async () => {
    const option = {
      url: "/api/auth/userData2/" + checkId,
      method: "GET",
      data: {
        pmUserId: formData.pmUserId,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200) {
      setFormData(response.data);
    }
    console.log(response.data);
  };

  const userDataUpdate = async () => {
    const option = {
      url: "/api/auth/userDataUpdate",
      method: "POST",
      data: {
        pmUserId: formData.pmUserId,
        pmUserEmail: formData.pmUserEmail,
        pmUserBd: formData.pmUserBd,
        pmUserName: formData.pmUserName,
        pmUserPhone: formData.pmUserPhone,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200) {
      alert("수정이 완료되었습니다");
      nav("/mypage");
    }
  };

  return (
    <div className="step2-container">
      <h2>회원정보 수정</h2>
      아이디{" "}
      <input
        type="text"
        value={formData.pmUserId}
        onChange={(e) => {
          setFormData({ ...formData, pmUserId: e.target.value });
        }}
      />
      <br />
      이름{" "}
      <input
        type="text"
        value={formData.pmUserName}
        onChange={(e) => {
          setFormData({ ...formData, pmUserName: e.target.value });
        }}
      />
      <br />
      이메일{" "}
      <input
        type="text"
        value={formData.pmUserEmail}
        onChange={(e) => {
          setFormData({ ...formData, pmUserEmail: e.target.value });
        }}
      />
      <br />
      핸드폰번호(-없이){" "}
      <input
        type="text"
        value={formData.pmUserPhone}
        onChange={(e) => {
          setFormData({ ...formData, pmUserPhone: e.target.value });
        }}
      />
      <br />
      생년월일(8자리){" "}
      <input
        type="text"
        value={formData.pmUserBd}
        onChange={(e) => {
          setFormData({ ...formData, pmUserBd: e.target.value });
        }}
      />
      <br />
      <button onClick={userDataUpdate}>회원정보수정</button>
    </div>
  );
}
