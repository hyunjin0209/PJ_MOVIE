import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectRegion() {
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
  console.log();
  // console.log(regionList);
  const SelectRegionData = async () => {
    const option = {
      url: "/api/reservation/theatercatg/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setRegionList(response.data);

      // console.log(response.data);
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
      console.log(reservation);
    }
  };
  const ScreeningDate = async (ptName) => {
    const ptCode = areaList.find((data) => data.ptName === ptName).ptCd;
    setReservation({ ...reservation, ptCd: ptCode });
    // const pdCode = screeningDate.find((data) => data.dd === dd).pdCd;
    // setReservation({ ...reservation, pdCd: pdCode });
    const option = {
      url: "/api/reservation/screeningDate/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setScreeningDate(response.data);
      console.log(reservation);
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
      console.log(reservation);
    }
  };
  const ScreeningTime = async (pmId) => {
    // const pmCode = movieList.find((data) => data.pmId === pmId).pmId;
    setReservation({ ...reservation, pmId: pmId });
    const option = {
      url: "/api/reservation/screeningtime/" + pmId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setScreeningTime(response.data);
      console.log(reservation);
    }
  };
  const SelectSeat = async (prhHh) => {
    const prhCode = screeningTime.find((data) => data.prhHh === prhHh).prhCd;
    setReservation({ ...reservation, prhCd: prhCode });
    const option = {
      url: "/api/reservation/selectSeat/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setSelectSeat(response.data);
      console.log(reservation);
    }
  };
  const SelectSeatNumber = (psSeatnum) => {
    const psCode = selectSeat.find((data) => data.psSeatnum === psSeatnum).psCd;
    setReservation({ ...reservation, psCd: psCode });
    console.log(reservation);
  };
  const Reservation = async () => {
    const option = {
      url: "/api/reservation/tryReservation",
      method: "POST",
      data: {
        ptCd: reservation.ptCd,
        pmId: reservation.pmId,
        pdCd: reservation.pdCd,
        psCd: reservation.psCd,
        prhCd: reservation.prhCd,
      },
      headers: { "Content-type": `application/json` },
    };

    const response = await axios(option);

    if (response.status === 200 && response.data) {
      setReservation(response.data);
      alert("예매완료 되었습니다");
      nav("/CheckReservation");
    }
  };

  return (
    <>
      <div>
        {regionList.map((data, index) => (
          <div key={index} onClick={() => SelectTheaterData(data.ptArea)}>
            <div>{data.ptArea}</div>
          </div>
        ))}
      </div>
      <br />
      <div>
        {areaList.map((data, index) => (
          <div key={index} onClick={() => ScreeningDate(data.ptName)}>
            <div>{data.ptName}</div>
          </div>
        ))}
      </div>
      <br />

      <div>
        {screeningDate.map((data, index) => (
          <div key={index} onClick={() => Movie(data.dd)}>
            <div>{data.yyyy + " " + data.mm + " " + data.dd}</div>
          </div>
        ))}
      </div>
      <br />

      <div>
        {movieList.map((data, index) => (
          <div key={index} onClick={() => ScreeningTime(data.pmId)}>
            <div>{data.pmName}</div>
          </div>
        ))}
      </div>
      <br />

      <div>
        {screeningTime.map((data, index) => (
          <div key={index} onClick={() => SelectSeat(data.prhHh)}>
            <div>{data.prhRoom + "상영관" + " " + data.prhHh}</div>
          </div>
        ))}
      </div>
      <br />
      <div>
        {selectSeat.map((data, index) => (
          <div key={index} onClick={() => SelectSeatNumber(data.psSeatnum)}>
            <button>{data.psSeatnum}</button>
          </div>
        ))}
      </div>
      <br />
      <button onClick={() => Reservation}>예매하기</button>
    </>
  );
}
