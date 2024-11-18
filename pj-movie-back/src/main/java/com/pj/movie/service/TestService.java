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
    PmBoardDto select(String pbCategoryCd, String pbUserId);
    int userJoin(PmMemberDto pmMemberDto);
    PmMemberDto userLogIn(PmMemberDto pmMemberDto);
    int resetPwd(PmMemberDto pmMemberDto);
    int resetPwd2(PmMemberDto pmMemberDto);
    String findId(PmMemberDto pmMemberDto);
    List<PmBoardDto> checkBoardList(int pbCategoryCd);
    int boardInsert(PmBoardDto pmBoardDto);
    int updateBoard(PmBoardDto pmBoardDto);
    int deleteDetailBoard(PmBoardDto pmBoardDto);
    PmBoardDto detailBoard(int pmBoardDto);
    List<PmBoardDto>boardList();
}


