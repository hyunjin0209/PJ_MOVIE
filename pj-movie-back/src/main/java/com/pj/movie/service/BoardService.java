package com.pj.movie.service;
import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BoardService {
    List<PmBoardDto> checkBoardList(int pbCategoryCd);
    int boardInsert(PmBoardDto pmBoardDto);
    int updateBoard(PmBoardDto pmBoardDto);
    int deleteDetailBoard(PmBoardDto pmBoardDto);
    PmBoardDto detailBoard(int pmBoardDto);
    List<PmBoardAndCatgDto> askList(String pmBoardAndCatgDto);
}
