package com.pj.movie.service;


import com.pj.movie.dto.PmBoardAndCatgDto;
import com.pj.movie.dto.PmTheaterCatgDto;
import com.pj.movie.dto.PmTheaterDto;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReserVationService {
    List<PmTheaterCatgDto> theatercatg(String pmTheaterCatgDto);

    List<PmTheaterDto> regionList(String pmTheaterDto);
}
