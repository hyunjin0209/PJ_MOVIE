package com.pj.movie.service;

import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import org.springframework.stereotype.Service;

@Service
public interface TestService {
    PmMemberDto login(String pmUserId, String pmUserPwd);
    PmBoardDto select(String pbCategoryCd, String pbUserId);
}


