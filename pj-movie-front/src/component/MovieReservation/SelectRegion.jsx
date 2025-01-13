import axios from "axios";
import { useEffect, useState } from "react";

export default function SelectRegion() {
  const [regionList, setRegionList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [screeningDate, setScreeningDate] = useState([]);
  let checkId = sessionStorage.getItem("id");

  useEffect(() => {
    if (checkId === null) {
      alert("로그인후 이용하세요");
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

      <table>
        <thead></thead>
        <tbody>
          {screeningDate.map((data, index) => (
            <tr key={index} onClick={Movie}>
              <td>{data.yyyy}</td>
              <td>{data.mm}</td>
              <td>{data.dd}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />

      <div>
        {movieList.map((data, index) => (
          <div key={index}>
            <div>{data.pmName}</div>
          </div>
        ))}
      </div>
    </>
  );
}
