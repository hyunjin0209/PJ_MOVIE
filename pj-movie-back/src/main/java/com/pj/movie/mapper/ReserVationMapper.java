package com.pj.movie.mapper;


import com.pj.movie.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReserVationMapper {
    List<PmTheaterCatgDto> theatercatg(String pmTheaterCatgDto);
    List<PmTheaterDto>regionList(String pmTheaterDto);
    List<PmDayDto>screeningDate(String pmDayDto);
    List<PmMovieDto>movieList(String pmMovieDto);
    List<PmTimeDto>screeningtime(int pmTimeDto);
    List<PmSeatDto>selectSeat(String pmSeatDto);
}
