package com.pj.movie.mapper;

import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface BoardMapper {
    List<PmBoardDto> checkBoardList(@Param("pbcCd")int pbcCd);
    int boardInsert(PmBoardDto pmBoardDto);
    int updateBoard(PmBoardDto pmBoardDto);
    int deleteDetailBoard(PmBoardDto pmBoardDto);
    PmBoardDto detailBoard(int pmBoardDto);
    List<PmBoardAndCatgDto> askList(String pmBoardDto);

}
