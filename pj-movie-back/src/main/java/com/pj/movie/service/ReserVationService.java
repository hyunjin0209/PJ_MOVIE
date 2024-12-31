package com.pj.movie.service;


import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmTheaterDto;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReserVationService {
    List<PmTheaterDto> regionList(String pmTheaterDto);
}
