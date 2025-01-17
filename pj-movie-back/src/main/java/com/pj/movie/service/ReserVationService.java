package com.pj.movie.service;


import com.pj.movie.dto.*;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReserVationService {
    List<PmTheaterCatgDto> theatercatg(String pmTheaterCatgDto);

    List<PmTheaterDto> regionList(String pmTheaterDto);

    List<PmDayDto> screeningDate(String pmDayDto);

    List<PmMovieDto> movieList(String pmMovieDto);

    List<PmTimeDto> screeningtime(int pmTimeDto);

    List<PmSeatDto> selectSeat(String pmSeatDto);
}
