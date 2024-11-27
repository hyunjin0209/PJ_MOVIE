package com.pj.movie.controller;


import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.service.TestService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {
    @Autowired
    public TestService testService;

    @Operation(summary = "로그인 테스트", description = "테스트")
    @GetMapping("/login/{pmUserId}/{pmUserPwd}")
    public PmMemberDto login(
            @Parameter(description = "유저아이디")
            @PathVariable("pmUserId") String pmUserId,
            @Parameter(description = "유저비밀번호")
            @PathVariable("pmUserPwd") String pmUserPwd) {
        return testService.login(pmUserId, pmUserPwd);}

    @GetMapping("/getCategoryData")
    public List<PmBoardCatgDto> getCategoryData(){
        return testService.getCategoryData();}

    @GetMapping("/select/{pbCategoryCd}/{pbUserId}")
    public PmBoardDto select(@PathVariable("pbCategoryCd") String pbCategoryCd,
                             @PathVariable("pbUserId") String pbUserId) {
        return testService.select(pbCategoryCd, pbUserId);}
}







