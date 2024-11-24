package com.pj.movie.controller;

import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.service.TestService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RequiredArgsConstructor
@RestController
public class authContoller {
    private final TestService testService;

    @Operation(summary = "로그인 테스트", description = "테스트")
    @GetMapping("/login/{pmUserId}/{pmUserPwd}")
    public PmMemberDto login(
            @Parameter(description = "유저아이디")
            @PathVariable("pmUserId") String pmUserId,
            @Parameter(description = "유저비밀번호")
            @PathVariable("pmUserPwd") String pmUserPwd
    ) {
        return testService.login(pmUserId, pmUserPwd);
    }

    @PostMapping("/userJoin")
    public int userJoin(@RequestBody PmMemberDto pmMemberDto){
        return testService.userJoin(pmMemberDto);
    }

    @PostMapping("/userLogin")
    public PmMemberDto userLogIn(@RequestBody PmMemberDto pmMemberDto) {
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
