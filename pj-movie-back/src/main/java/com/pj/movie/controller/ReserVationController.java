package com.pj.movie.controller;

import com.pj.movie.dto.*;

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
    @GetMapping("/screeningDate/{pmUserId}")
    public List<PmDayDto> screeningDate(@PathVariable("pmUserId") String pmDayDto){
        return reserVationService.screeningDate(pmDayDto);}
    @GetMapping("/movieList/{pmUserId}")
    public List<PmMovieDto> movieList(@PathVariable("pmUserId") String pmMovieDto){
        return reserVationService.movieList(pmMovieDto);}
    @GetMapping("/screeningtime/{pmId}")
    public List<PmTimeDto> screeningtime(@PathVariable("pmId") int pmTimeDto){
        return reserVationService.screeningtime(pmTimeDto);}
}
