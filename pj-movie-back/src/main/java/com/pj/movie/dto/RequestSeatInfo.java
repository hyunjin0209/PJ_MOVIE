package com.pj.movie.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RequestSeatInfo {
    private int ptCd;
    private int pmId;
    private int pdCd;
    private int prhCd;
}