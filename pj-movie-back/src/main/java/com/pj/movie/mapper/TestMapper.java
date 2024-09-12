package com.pj.movie.mapper;

import com.pj.movie.dto.PmMemberDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TestMapper {
    PmMemberDto login(@Param("pmUserId") String pmUserId, @Param("pmUserPwd") String pmUserPwd);
}
