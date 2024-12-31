package com.pj.movie.controller;

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

    @GetMapping("/regionList")
    public List<PmTheaterDto> regionList(@PathVariable String pmTheaterDto){
        return reserVationService.regionList(pmTheaterDto);}
}
