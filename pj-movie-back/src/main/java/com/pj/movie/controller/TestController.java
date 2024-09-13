package com.pj.movie.controller;


import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")

public class TestController {
    @Autowired
    TestService testService;

 @GetMapping("/login/{pmUserId}/{pmUserPwd}")
    public PmMemberDto login(@PathVariable("pmUserId") String pmUserId
            ,@PathVariable("pmUserPwd") String pmUserPwd) {
        return testService.login(pmUserId, pmUserPwd);
    }
    
    @GetMapping("/getCategoryData")
    public List<PmBoardCatgDto> getCategoryData(){
        return testService.getCategoryData();
    }

    @GetMapping("/select/{pbCategoryCd}/{pbUserId}")
    public PmBoardDto select(@PathVariable("pbCategoryCd") String pbCategoryCd,
                            @PathVariable("pbUserId") String pbUserId) {
            return testService.select(pbCategoryCd, pbUserId);
    }
}
