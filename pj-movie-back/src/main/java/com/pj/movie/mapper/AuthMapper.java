package com.pj.movie.mapper;

import com.pj.movie.dto.PmMemberDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AuthMapper {
    int userJoin(PmMemberDto pmMemberDto);
    PmMemberDto userLogIn(PmMemberDto pmMemberDto);
    int resetPwd(PmMemberDto pmMemberDto);
    int resetPwd2(PmMemberDto pmMemberDto);
    String findId(PmMemberDto pmMemberDto);
}
