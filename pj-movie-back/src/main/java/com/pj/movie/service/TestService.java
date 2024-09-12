package com.pj.movie.service;

import com.pj.movie.dto.PmMemberDto;
import org.springframework.stereotype.Service;

@Service
public interface TestService {
    PmMemberDto login(String pmUserId, String pmUserPwd);
}
