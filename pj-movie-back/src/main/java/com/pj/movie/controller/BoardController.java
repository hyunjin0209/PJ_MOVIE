package com.pj.movie.controller;


import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.service.BoardService;
import com.pj.movie.service.TestService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/board")

@RestController
public class BoardController {
    @Autowired
    public BoardService boardService;

    @GetMapping("/checkBoardList/{pbcCd}")
    public List<PmBoardDto> checkBoardList(@PathVariable("pbcCd") int pbcCd){
        return boardService.checkBoardList(pbcCd);}

    @PostMapping("/boardInsert/{pbcCd}")
    public int boardInsert(@RequestBody PmBoardDto pmBoardDto){
        return boardService.boardInsert(pmBoardDto);}

    @PostMapping("/updateBoard")
    public int updatePost(@RequestBody PmBoardDto pmBoardDto){
        return boardService.updateBoard(pmBoardDto);}

    @PostMapping("/deleteDetailBoard")
    public int deleteDetailBoard(@RequestBody PmBoardDto pmBoardDto){
        return boardService.deleteDetailBoard(pmBoardDto);}

    @GetMapping ("/detailBoard/{pbId}")
    public PmBoardDto detailBoard(@PathVariable("pbId") int pmBoardDto){
        return boardService.detailBoard(pmBoardDto);}
    @GetMapping("/askList/{pmUserId}")
    public List<PmBoardAndCatgDto> askList(@PathVariable("pmUserId") String pmBoardAndCatgDto){
        return boardService.askList(pmBoardAndCatgDto);}

}
