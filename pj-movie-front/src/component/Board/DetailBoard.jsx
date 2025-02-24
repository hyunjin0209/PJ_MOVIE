import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/BoardList.css";
export default function DetailBoard() {
  const location = useLocation();
  const [formData, setFormData] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const nav = useNavigate();

  let checkId = sessionStorage.getItem("id");

  useEffect(() => {
    if (location.state.data.pbId) {
      detailBoard(location.state.data.pbId);
    }
  }, [location]);

  const detailBoard = async (pbId) => {
    const option = {
      url: "/api/board/detailBoard/" + pbId,
      method: "GET",
      data: {
        pbId: pbId,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200) {
      setFormData(response.data);
    }
  };

  const correction = () => {
    if (checkId === formData.pmUserId) {
      setIsEditing(true);
    } else if (checkId === null) {
      alert("로그인후 이용하세요");
    } else if (checkId !== formData.pmUserId) {
      alert("회원님의 게시글이 아닙니다");
    }
  };

  const updateBoard = async () => {
    const option = {
      url: "/api/board/updateBoard",
      method: "POST",
      data: {
        pbTitle: formData.pbTitle,
        pbContent: formData.pbContent,
        pbId: formData.pbId,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200) {
      setIsEditing(false);
      alert("수정이 완료되었습니다");
      nav("/CheckBoard");
    } else {
      alert("수정 실패");
    }
  };
  const DeleteBoard = () => {
    if (checkId === formData.pmUserId) {
      DeleteBoard2();
    } else if (checkId === null) {
      alert("로그인후 이용하세요");
    } else if (checkId !== formData.pmUserId) {
      alert("회원님의 게시글이 아닙니다");
    }
  };
  const DeleteBoard2 = async () => {
    const option = {
      url: "/api/board/deleteDetailBoard",
      method: "POST",
      data: {
        pbId: formData.pbId,
      },
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const response = await axios(option);

    if (response.status === 200) {
      alert("삭제가 완료되었습니다");
      nav("/BoardList");
    }
  };
  return (
    <>
      <div className="detail-board-container">
        {formData && (
          <div>
            No. :{" "}
            <input
              type="text"
              value={formData.pbId}
              onChange={(e) => {
                setFormData({ ...formData, pbId: e.target.value });
              }}
              readOnly
            />
            <br />
            제목 :{" "}
            <input
              type="text"
              value={formData.pbTitle}
              onChange={(e) => {
                setFormData({ ...formData, pbTitle: e.target.value });
              }}
              readOnly={!isEditing}
            />
            <br />
            작성자 :{" "}
            <input
              type="text"
              value={formData.pmUserId}
              onChange={(e) => {
                setFormData({ ...formData, pmUserId: e.target.value });
              }}
              readOnly
            />
            <br />
            내용 :{" "}
            <input
              type="textarea"
              value={formData.pbContent}
              onChange={(e) => {
                setFormData({ ...formData, pbContent: e.target.value });
              }}
              readOnly={!isEditing}
            />
            <br />
            작성일자 :{" "}
            <input
              type="text"
              value={formData.pbRegDt}
              onChange={(e) => {
                setFormData({ ...formData, pbRegDt: e.target.value });
              }}
              readOnly
            />
            <br />
            <div className="detail-board-buttons">
              {isEditing ? (
                <button onClick={updateBoard}>저장</button>
              ) : (
                <button onClick={correction}>수정</button>
              )}
              <button onClick={DeleteBoard}>삭제</button>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
}
