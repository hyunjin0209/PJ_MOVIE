import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/SelectRegion.css";

export default function SelectRegion() {
  const [step, setStep] = useState(1);
  const [regionList, setRegionList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [screeningDate, setScreeningDate] = useState([]);
  const [screeningTime, setScreeningTime] = useState([]);
  const [selectSeat, setSelectSeat] = useState([]);
  const [reservation, setReservation] = useState({
    ptCd: "",
    pdCd: "",
    pmId: "",
    prhCd: "",
    psCd: "",
  });
  let checkId = sessionStorage.getItem("id");
  const nav = useNavigate();

  useEffect(() => {
    if (checkId === null) {
      alert("로그인후 이용하세요");
      nav("/LogIn");
    } else {
      SelectRegionData();
    }
  }, []);

  const SelectRegionData = async () => {
    const option = {
      url: "/api/reservation/theatercatg/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setRegionList(response.data);
    }
  };

  const SelectTheaterData = async (ptArea) => {
    const option = {
      url: "/api/reservation/regionList/" + ptArea,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setAreaList(response.data);
      setStep(2);
    }
  };

  const ScreeningDate = async (ptName) => {
    const ptCode = areaList.find((data) => data.ptName === ptName).ptCd;
    setReservation({ ...reservation, ptCd: ptCode });

    const option = {
      url: "/api/reservation/screeningDate/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };

    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setScreeningDate(response.data);
      setStep(3);
    }
  };

  const Movie = async (dd) => {
    const pdCode = screeningDate.find((data) => data.dd === dd).pdCd;
    setReservation({ ...reservation, pdCd: pdCode });
    const option = {
      url: "/api/reservation/movieList/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setMovieList(response.data);
      setStep(4);
    }
  };

  const ScreeningTime = async (pmId) => {
    setReservation({ ...reservation, pmId: pmId });
    const option = {
      url: "/api/reservation/screeningtime/" + pmId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setScreeningTime(response.data);
      setStep(5);
    }
  };

  const SelectSeat = async (prhHh) => {
    const prhCode = screeningTime.find((data) => data.prhHh === prhHh).prhCd;
    setReservation({ ...reservation, prhCd: prhCode });
    const option = {
      url:
        "/api/reservation/selectSeat/" +
        reservation.ptCd +
        "/" +
        reservation.pmId +
        "/" +
        reservation.pdCd +
        "/" +
        prhCode,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setSelectSeat(response.data);
      setStep(6);
    }
  };

  const SelectSeatNumber = (psSeatnum) => {
    const psCode = selectSeat.find((data) => data.psSeatnum === psSeatnum).psCd;
    setReservation({ ...reservation, psCd: psCode });
  };

  const Reservation = async () => {
    let check = checkForm();

    if (check) {
      const option = {
        url: "/api/reservation/tryReservation",
        method: "POST",
        data: {
          ptCd: reservation.ptCd,
          pmId: reservation.pmId,
          pdCd: reservation.pdCd,
          psCd: reservation.psCd,
          prhCd: reservation.prhCd,
          pmUserId: checkId,
        },
        headers: { "Content-type": `application/json` },
      };

      const response = await axios(option);

      if (response.status === 200 && response.data) {
        setReservation(response.data);
        alert("예매완료 되었습니다");
        nav("/CheckReservation");
      }
    } else {
      alert("모든 값을 선택해주세요");
    }
  };

  const checkForm = () => {
    if (
      reservation.pdCd &&
      reservation.pmId &&
      reservation.prhCd &&
      reservation.psCd &&
      reservation.ptCd
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {step === 1 && (
        <div className="container">
          <div className="list-container">
            {regionList.map((data, index) => (
              <div
                key={index}
                className="list-item"
                onClick={() => SelectTheaterData(data.ptArea)}
              >
                <div>{data.ptArea}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="container">
          <div className="list-container">
            {areaList.map((data, index) => (
              <div
                key={index}
                className="list-item"
                onClick={() => ScreeningDate(data.ptName)}
              >
                <div>{data.ptName}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="container">
          <div className="list-container">
            {screeningDate.map((data, index) => (
              <div
                key={index}
                className="list-item"
                onClick={() => Movie(data.dd)}
              >
                <div>{data.yyyy + " " + data.mm + " " + data.dd}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="container">
          <div className="list-container">
            {movieList.map((data, index) => (
              <div
                key={index}
                className="list-item"
                onClick={() => ScreeningTime(data.pmId)}
              >
                <div>{data.pmName}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="container">
          <div className="list-container">
            {screeningTime.map((data, index) => (
              <div
                key={index}
                className="list-item"
                onClick={() => SelectSeat(data.prhHh)}
              >
                <div>{data.prhRoom + "상영관" + " " + data.prhHh}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="container">
          <div className="list-container">
            {selectSeat.map((data, index) => (
              <div key={index}>
                <button
                  className="seat-button"
                  disabled={data.checkSeat === 1}
                  onClick={() => SelectSeatNumber(data.psSeatnum)}
                >
                  {data.psSeatnum}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {checkForm() && (
        <div className="container">
          <button className="reserve-button" onClick={Reservation}>
            예매하기
          </button>
        </div>
      )}
    </>
  );
}
