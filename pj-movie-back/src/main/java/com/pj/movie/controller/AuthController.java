package com.pj.movie.controller;


import com.pj.movie.dto.PmBoardCatgDto;
import com.pj.movie.dto.PmBoardDto;
import com.pj.movie.dto.PmMemberDto;
import com.pj.movie.service.AuthService;
import com.pj.movie.service.TestService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/auth")
@RestController
public class AuthController {
    @Autowired
    public AuthService authService;

    @PostMapping("/userJoin")
    public int userJoin(@RequestBody PmMemberDto pmMemberDto){
        return authService.userJoin(pmMemberDto);}

    @PostMapping("/userLogin")
    public PmMemberDto userLogIn(@RequestBody PmMemberDto pmMemberDto) {
        return authService.userLogIn(pmMemberDto);}

    @PostMapping("/resetPwd")
    public int resetPwd(@RequestBody PmMemberDto pmMemberDto){
        return authService.resetPwd(pmMemberDto);
    }

    @PostMapping("/resetPwd2")
    public  int resetPwd2(@RequestBody PmMemberDto pmMemberDto){
        return authService.resetPwd2(pmMemberDto);
    }

    @PostMapping("/findId")
    public String findId(@RequestBody PmMemberDto pmMemberDto){
        return authService.findId(pmMemberDto);
    }
}
