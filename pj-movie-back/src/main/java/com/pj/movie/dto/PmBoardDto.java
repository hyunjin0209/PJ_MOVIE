package com.pj.movie.dto;


import lombok.Data;

import java.util.Date;

@Data
public class PmBoardDto {
    private String pbId;
    private String pbCategoryCd;
    private String pbTitle;
    private String pbContent;
    private String pbUserId;
    private Date pbRegDt;




}
