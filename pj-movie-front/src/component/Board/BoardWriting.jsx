import { useState } from "react";
import BoardInsert from "./BoardInsert";
export default function BoardWriting() {
  const [step, setStep] = useState("step1");
  let checkId = sessionStorage.getItem("id");
  const writing = () => {
    if (checkId === null) {
      alert("로그인후 이용하세요");
    } else {
      setStep("step2");
    }
  };

  return (
    <>
      {step === "step1" && (
        <div>
          <button onClick={writing}>글쓰기</button>
        </div>
      )}
      {step === "step2" && (
        <div>
          <BoardInsert />
        </div>
      )}
    </>
  );
}
