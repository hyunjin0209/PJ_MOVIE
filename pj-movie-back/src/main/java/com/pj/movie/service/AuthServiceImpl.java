package com.pj.movie.service;

import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.mapper.AuthMapper;
import com.pj.movie.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    AuthMapper authMapper;
    @Override
    public int userJoin(PmMemberDto pmMemberDto) {
    return authMapper.userJoin(pmMemberDto);}

    @Override
    public  PmMemberDto userLogIn(PmMemberDto pmMemberDto) { return authMapper.userLogIn(pmMemberDto); }

    @Override
    public  int resetPwd(PmMemberDto pmMemberDto){ return authMapper.resetPwd(pmMemberDto);}

    @Override
    public  int resetPwd2(PmMemberDto pmMemberDto){ return  authMapper.resetPwd2(pmMemberDto);}

    @Override
    public  String findId(PmMemberDto pmMemberDto) {
        return authMapper.findId(pmMemberDto);
    }
}
