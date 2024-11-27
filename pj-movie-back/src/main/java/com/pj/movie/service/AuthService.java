package com.pj.movie.service;

import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AuthService {
    int userJoin(PmMemberDto pmMemberDto);
    PmMemberDto userLogIn(PmMemberDto pmMemberDto);
    int resetPwd(PmMemberDto pmMemberDto);
    int resetPwd2(PmMemberDto pmMemberDto);
    String findId(PmMemberDto pmMemberDto);
}
