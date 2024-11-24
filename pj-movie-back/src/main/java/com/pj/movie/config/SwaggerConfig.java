package com.pj.movie.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(title = "PJ_MOVIE API",
                description = "영화관 api명세서",
                version = "v1"))
@Configuration
public class SwaggerConfig {
    @Bean
    public GroupedOpenApi SampleOpenApi() {
        String[] paths = {"/**"};

        return GroupedOpenApi.builder()
                .group("movie v1")
                .pathsToMatch(paths)
                .build();
    }
}

