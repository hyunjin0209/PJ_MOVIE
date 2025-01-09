import axios from "axios";
import { useEffect, useState } from "react";

export default function SelectRegion() {
  const [regionList, setRegionList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  let checkId = sessionStorage.getItem("id");

  useEffect(() => {
    {
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
          <div key={index} onClick={Movie}>
            <div>{data.ptName}</div>
          </div>
        ))}
      </div>
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
