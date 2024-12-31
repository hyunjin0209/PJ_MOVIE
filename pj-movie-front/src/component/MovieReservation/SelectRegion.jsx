import axios from "axios";
import { useEffect, useState } from "react";

export default function SelectRegion() {
  const [regionList, setRegionList] = useState([]);
  //   let checkId = sessionStorage.getItem("id");
  //   useEffect(() => {
  //     // if (checkId) {
  //     SelectRegionData();
  //   }, []);

  const SelectRegionData = async () => {
    const option = {
      url: "/api/reservation/regionList",
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setRegionList(response.data);
      console.log(response.data);
    }
  };

  return (
    <>
      <button onClick={SelectRegionData}>dsa</button>
      {/* <div>
        <tr style={{ fontWeight: "bold" }}>
          <td>No.</td>
          <td>제목</td>
          <td>작성자ID</td>
        </tr>

        {regionList.map((data, index) => (
          <tr
            key={index}
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => nav("/MainPage", { state: { data } })}
          >
            <td>{data.ptArea}</td>
          </tr>
        ))}
      </div> */}
    </>
  );
}
