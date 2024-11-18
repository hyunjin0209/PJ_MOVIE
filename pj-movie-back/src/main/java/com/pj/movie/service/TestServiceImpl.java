package com.pj.movie.service;

import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements TestService {
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
    
    public PmBoardDto select(String pbCategoryCd, String pbUserId){
        return  testMapper.select(pbCategoryCd,pbUserId);
    }

    @Override
    public int userJoin(PmMemberDto pmMemberDto) {
        return testMapper.userJoin(pmMemberDto);
    }

    @Override
    public  PmMemberDto userLogIn(PmMemberDto pmMemberDto) { return testMapper.userLogIn(pmMemberDto); }

    @Override
    public  int resetPwd(PmMemberDto pmMemberDto){ return testMapper.resetPwd(pmMemberDto);}
    @Override
    public  int resetPwd2(PmMemberDto pmMemberDto){ return  testMapper.resetPwd2(pmMemberDto);}
    public  String findId(PmMemberDto pmMemberDto) {
        return testMapper.findId(pmMemberDto);
    }

    @Override
    public List<PmBoardDto> CheckBoard(int pbCategoryCd){
            return  testMapper.CheckBoard(pbCategoryCd);
    }

    @Override
    public int boardInsert(PmBoardDto pmBoardDto){return testMapper.boardInsert(pmBoardDto);}
    @Override
    public int updateBoard(PmBoardDto pmBoardDto){return testMapper.updateBoard(pmBoardDto);}
    @Override
    public int deleteDetailBoard(PmBoardDto pmBoardDto){return testMapper.deleteDetailBoard(pmBoardDto);}
    @Override  public PmBoardDto detailBoard(int pmBoardDto){return  testMapper.detailBoard(pmBoardDto);}
    }


