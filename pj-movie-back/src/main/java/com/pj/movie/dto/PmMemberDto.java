package com.pj.movie.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.Date;


@Schema(description = "유저 DTO")
@Data
public class PmMemberDto {
    @Schema(description = "아이디")
    private String  pmUserId;
    private String  pmUserPwd;
    private String  pmUserName;
    private String  pmUserEmail;
    private String  pmUserPhone;
    private String  pmUserBd;
    private Date    pmRegDt;


}
