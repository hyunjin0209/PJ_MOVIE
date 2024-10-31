package com.pj.movie.controller;


import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.service.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test")

public class TestController {
    private static final Logger log = LoggerFactory.getLogger(TestController.class);
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
    @PostMapping("/userJoin")
    public int userJoin(@RequestBody PmMemberDto pmMemberDto){
     return testService.userJoin(pmMemberDto);
    }

    @PostMapping("/userLogin")
    public int userLogIn(@RequestBody PmMemberDto pmMemberDto) {
        return testService.userLogIn(pmMemberDto);
    }

    @PostMapping("/resetPwd")
    public int resetPwd(@RequestBody PmMemberDto pmMemberDto){
        return testService.resetPwd(pmMemberDto);
    }

    @PostMapping("/resetPwd2")
    public  int resetPwd2(@RequestBody PmMemberDto pmMemberDto){
        return testService.resetPwd2(pmMemberDto);
    }
    @PostMapping("/findId")
    public String findId(@RequestBody PmMemberDto pmMemberDto){
        return testService.findId(pmMemberDto);
    }

}








