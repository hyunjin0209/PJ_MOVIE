package com.pj.movie.dto;


import lombok.Data;

import java.util.Date;

@Data
public class PmBoardAndCatgDto {
    private int pbId;
    private int pbCategoryCd;
    private String pbTitle;
    private String pbContent;
    private String pbUserId;
    private Date pbRegDt;
    private int pbcCd;
    private String pbcName;

}
