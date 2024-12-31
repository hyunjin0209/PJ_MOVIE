package com.pj.movie.dto;


import lombok.Data;

import java.util.Date;

@Data
public class PmBoardAndCatgDto {
    private int pbId;
    private int pbcCd;
    private String pbTitle;
    private String pbContent;
    private String pmUserId;
    private Date pbRegDt;
    private String pbcName;

}
