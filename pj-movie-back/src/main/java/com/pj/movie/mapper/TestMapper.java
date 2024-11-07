package com.pj.movie.mapper;

import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TestMapper {
    PmMemberDto login(@Param("pmUserId") String pmUserId, @Param("pmUserPwd") String pmUserPwd);
    List<PmBoardCatgDto> getCategoryData();
    PmBoardDto select(@Param("pbCategoryCd") String pbCategoryCd, @Param("pbUserId")String pbUserId);
    int userJoin(PmMemberDto pmMemberDto);
    PmMemberDto userLogIn(PmMemberDto pmMemberDto);
    int resetPwd(PmMemberDto pmMemberDto);
    int resetPwd2(PmMemberDto pmMemberDto);
    String findId(PmMemberDto pmMemberDto);
    List<PmBoardDto> CheckBoard(@Param("pbCategoryCd")int pbCategoryCd);
    int boardInsert(PmBoardDto pmBoardDto);
}
