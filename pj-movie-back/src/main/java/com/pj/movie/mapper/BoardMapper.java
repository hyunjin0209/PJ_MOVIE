package com.pj.movie.mapper;

import com.pj.movie.dto.PmBoardDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface BoardMapper {
    List<PmBoardDto> checkBoardList(@Param("pbCategoryCd")int pbCategoryCd);
    int boardInsert(PmBoardDto pmBoardDto);
    int updateBoard(PmBoardDto pmBoardDto);
    int deleteDetailBoard(PmBoardDto pmBoardDto);
    PmBoardDto detailBoard(int pmBoardDto);
}
