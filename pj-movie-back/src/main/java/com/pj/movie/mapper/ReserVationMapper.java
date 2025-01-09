package com.pj.movie.mapper;


import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmMovieDto;
import com.pj.movie.dto.PmTheaterCatgDto;
import com.pj.movie.dto.PmTheaterDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReserVationMapper {
    List<PmTheaterCatgDto> theatercatg(String pmTheaterCatgDto);
    List<PmTheaterDto>regionList(String pmTheaterDto);
    List<PmMovieDto>movieList(String pmMovieDto);
}
