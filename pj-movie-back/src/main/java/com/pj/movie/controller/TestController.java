package com.pj.movie.controller;

import com.pj.movie.dto.PmBoardCatgDto;
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

    @GetMapping("/login/{a}/{b}")
    public PmMemberDto login(@PathVariable("a") String pmUserId ,@PathVariable("b") String pmUserPwd){
        return testService.login(pmUserId, pmUserPwd);
    }

    @GetMapping("/getCategoryData")
    public List<PmBoardCatgDto> getCategoryData(){
        return testService.getCategoryData();
    }
}
