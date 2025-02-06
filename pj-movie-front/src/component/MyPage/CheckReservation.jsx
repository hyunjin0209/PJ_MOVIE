import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/CheckReservation.css";

export default function CheckReservation() {
  let checkId = sessionStorage.getItem("id");
  const [reservation, setReservation] = useState([]);
  const nav = useNavigate();

  const getChechReservation = async () => {
    if (checkId === null) {
      alert("로그인 후 이용해주세요");
      nav("/LogIn");
    }
    const option = {
      url: "/api/reservation/getCheckReservation/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setReservation(response.data);
      console.log(response.data);
    }
  };

  return (
    <div className="container">
      <div className="reservation-container">
        {reservation.map((data, index) => (
          <div key={index} className="reservation-item">
            <div>{data.ptArea}</div>
            <div>{data.ptName}</div>
            <div>{data.pmName}</div>
            <div>{data.yyyy + " " + data.mm + " " + data.dd}</div>
            <div>{"좌석번호" + " " + data.psSeatNum}</div>
            <div>{data.prhRoom + "상영관" + " " + data.prhHh}</div>
          </div>
        ))}
      </div>
      <button className="check-button" onClick={getChechReservation}>
        내 예매내역 확인하기
      </button>
    </div>
  );
}
