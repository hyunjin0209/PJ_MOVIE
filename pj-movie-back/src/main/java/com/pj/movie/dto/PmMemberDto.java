package com.pj.movie.dto;


import lombok.Data;

import java.util.Date;

@Data
public class PmMemberDto {
    private String  pmUserId;
    private String  pmUserPwd;
    private String  pmUserName;
    private String  pmUserEmail;
    private String  pmUserPhone;
    private String  pmUserBd;
    private Date    pmRegDt;


}
