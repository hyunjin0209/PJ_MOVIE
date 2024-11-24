package com.pj.movie.controller;


import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {
    @Autowired
    public TestService testService;

    @GetMapping("/getCategoryData")
    public List<PmBoardCatgDto> getCategoryData(){
        return testService.getCategoryData();
    }

    @GetMapping("/select/{pbCategoryCd}/{pbUserId}")
    public PmBoardDto select(@PathVariable("pbCategoryCd") String pbCategoryCd,
                             @PathVariable("pbUserId") String pbUserId) {
        return testService.select(pbCategoryCd, pbUserId);
    }

    @GetMapping("/checkBoardList/{pbCategoryCd}")
    public List<PmBoardDto> checkBoardList(@PathVariable("pbCategoryCd") int pbCategoryCd){
        return testService.checkBoardList(pbCategoryCd);
    }

    @PostMapping("/boardInsert/{pbCategoryCd}")
    public int boardInsert(@RequestBody PmBoardDto pmBoardDto){
        return testService.boardInsert(pmBoardDto);
    }

    @PostMapping("/updateBoard")
    public int updatePost(@RequestBody PmBoardDto pmBoardDto){
        return testService.updateBoard(pmBoardDto);
    }

    @PostMapping("/deleteDetailBoard")
    public int deleteDetailBoard(@RequestBody PmBoardDto pmBoardDto){
        return testService.deleteDetailBoard(pmBoardDto);
    }
    @GetMapping ("/detailBoard/{pbId}")
    public PmBoardDto detailBoard(@PathVariable("pbId") int pmBoardDto){
        return testService.detailBoard(pmBoardDto);
    }
}







