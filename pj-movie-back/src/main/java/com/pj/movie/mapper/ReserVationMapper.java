package com.pj.movie.mapper;


import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmTheaterDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReserVationMapper {
    List<PmTheaterDto> regionList(String pmTheaterDto);
}
