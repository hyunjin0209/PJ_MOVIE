package com.pj.movie.service;

import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface TestService {
    PmMemberDto login(String pmUserId, String pmUserPwd);
    List<PmBoardCatgDto> getCategoryData();
    PmBoardDto select(String pbcCd, String pmUserId);
}


