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
    PmBoardDto select(@Param("pbcCd") String pbcCd, @Param("pmUserId")String pmUserId);
}
