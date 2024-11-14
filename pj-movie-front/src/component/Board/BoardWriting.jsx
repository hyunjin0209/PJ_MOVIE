import { useState } from "react";
import BoardInsert from "./BoardInsert";
export default function BoardWriting() {
  const [step, setStep] = useState("step1");
  const writing = () => {
    setStep("step2");
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
