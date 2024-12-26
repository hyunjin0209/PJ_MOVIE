import axios from "axios";
import { useState } from "react";

export default function TestSignIn() {
  const [formData, setFormData] = useState();
  const [data, setData] = useState();

  //버튼클릭시
  const handleCatgClick = () => {
    selectCatgData(); //api테스트 함수 실행
  };

  // api test
  const selectCatgData = async () => {
    const option = {
      url: "/api/test/getCategoryData",
      method: "GET",
    };
    const response = await axios(option);
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const handleBoardClick = () => {
    selectBoard();
  };

  const selectBoard = async () => {
    const option = {
      url: "/api/test/select/" + formData.pbcCd + "/" + formData.pmUserId,
      method: "GET",
    };
    const response = await axios(option);
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
      <h2>SignIn</h2>
      <button onClick={handleCatgClick}>카테고리 조회 버튼</button>
      {data && (
        <>
          {data.map((codeData, i) => (
            <div key={i}>
              이름 : {codeData.pbcname}
              <br />
              코드 : {codeData.pbccd}
            </div>
          ))}
        </>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      코드 :{" "}
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, pbcCd: e.target.value });
        }}
      />
      <br />
      유저 :{" "}
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, pmUserId: e.target.value });
        }}
      />
      <br />
      <button onClick={handleBoardClick}>보드 조회 버튼</button>
    </>
  );
}
