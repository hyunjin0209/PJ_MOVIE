package com.pj.movie.service;

import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements TestService{
    @Autowired
    TestMapper testMapper;

    @Override
    public PmMemberDto login(String pmUserId, String pmUserPwd) {
        return testMapper.login(pmUserId, pmUserPwd);
    }

    @Override
    public List<PmBoardCatgDto> getCategoryData(){
            return testMapper.getCategoryData();
    }
}
