package com.pj.movie.service;

import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {
    @Autowired
    BoardMapper boardMapper;
    @Override
    public List<PmBoardDto> checkBoardList(int pbcCd){
        return  boardMapper.checkBoardList(pbcCd);
    }

    @Override
    public int boardInsert(PmBoardDto pmBoardDto){return boardMapper.boardInsert(pmBoardDto);}

    @Override
    public int updateBoard(PmBoardDto pmBoardDto){return boardMapper.updateBoard(pmBoardDto);}

    @Override
    public int deleteDetailBoard(PmBoardDto pmBoardDto){return boardMapper.deleteDetailBoard(pmBoardDto);}

    @Override  public PmBoardDto detailBoard(int pmBoardDto){return  boardMapper.detailBoard(pmBoardDto);}

    @Override
    public List<PmBoardAndCatgDto> askList(String pmBoardAndCatgDto){return boardMapper.askList(pmBoardAndCatgDto);}
}