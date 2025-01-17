import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectRegion() {
  const [regionList, setRegionList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [screeningDate, setScreeningDate] = useState([]);
  const [screeningTime, setScreeningTime] = useState([]);
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
      // console.log(response.data);
      console.log(response.data);
    }
  };
  const ScreeningDate = async () => {
    const option = {
      url: "/api/reservation/screeningDate/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setScreeningDate(response.data);
    }
  };
  const Movie = async () => {
    const option = {
      url: "/api/reservation/movieList/" + checkId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setMovieList(response.data);
    }
  };
  const ScreeningTime = async (pmId) => {
    const option = {
      url: "/api/reservation/screeningtime/" + pmId,
      method: "GET",
      headers: { "Content-type": `application/json` },
    };
    const response = await axios(option);
    if (response.status === 200 && response.data) {
      setScreeningTime(response.data);
      console.log();
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
          <div key={index} onClick={ScreeningDate}>
            <div>{data.ptName}</div>
          </div>
        ))}
      </div>
      <br />

      <div>
        {screeningDate.map((data, index) => (
          <div key={index} onClick={Movie}>
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
          <div key={index}>
            <div>{data.prhRoom + "상영관" + " " + data.prhHh}</div>
          </div>
        ))}
      </div>
    </>
  );
}
