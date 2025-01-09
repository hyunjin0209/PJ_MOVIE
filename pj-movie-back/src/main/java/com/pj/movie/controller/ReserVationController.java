package com.pj.movie.controller;

import com.pj.movie.dto.PmMovieDto;
import com.pj.movie.dto.PmTheaterCatgDto;
import com.pj.movie.dto.PmTheaterDto;

import com.pj.movie.service.ReserVationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/reservation")

@RestController
public class ReserVationController {
    @Autowired
    public ReserVationService reserVationService;

    @GetMapping("/theatercatg/{pmUserId}")
    public List<PmTheaterCatgDto> theatercatg(@PathVariable("pmUserId") String pmTheaterCatgDto){
        return reserVationService.theatercatg(pmTheaterCatgDto);}
    @GetMapping("/regionList/{ptArea}")
    public List<PmTheaterDto> regionList(@PathVariable("ptArea") String pmTheaterDto){
        return reserVationService.regionList(pmTheaterDto);}
    @GetMapping("/movieList/{pmUserId}")
    public List<PmMovieDto> movieList(@PathVariable("pmUserId") String pmMovieDto){
        return reserVationService.movieList(pmMovieDto);}
}
