package com.pj.movie.service;


import com.pj.movie.dto.*;
import com.pj.movie.mapper.ReserVationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReserVationServiceImpl implements ReserVationService{
    @Autowired
    ReserVationMapper reserVationMapper;
    @Override
    public List<PmTheaterCatgDto> theatercatg(String pmTheaterCatgDto){return reserVationMapper.theatercatg(pmTheaterCatgDto);}
    @Override
    public List<PmTheaterDto>regionList(String pmTheaterDto){return reserVationMapper.regionList(pmTheaterDto);}
    @Override
    public List<PmDayDto>screeningDate(String pmDayDto){return reserVationMapper.screeningDate(pmDayDto);}
    @Override
    public List<PmMovieDto>movieList(String pmMovieDto){return reserVationMapper.movieList(pmMovieDto);}
    @Override
    public List<PmTimeDto>screeningtime(int pmTimeDto){return reserVationMapper.screeningtime(pmTimeDto);}
    @Override
    public List<PmSeatDto>selectSeat(RequestSeatInfo requestSeatInfo){return reserVationMapper.selectSeat(requestSeatInfo);}
    @Override
    public int tryReservation(PmMoviePlanDto pmMoviePlanDto){return reserVationMapper.tryReservation(pmMoviePlanDto);}
}
