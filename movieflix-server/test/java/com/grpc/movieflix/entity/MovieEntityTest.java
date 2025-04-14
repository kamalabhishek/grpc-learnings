package com.grpc.movieflix.entity;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(MockitoExtension.class)
class MovieEntityTest {

    @InjectMocks
    MovieEntity movieEntity;

    @Test
    void movieEntityTest(){

        movieEntity = new MovieEntity();
        movieEntity.setId("test");
        movieEntity.setName("test");
        movieEntity.setDescription("test");
        movieEntity.setGenre("test");
        movieEntity.setWatchlist(false);
        movieEntity.setImage("test");

        assertEquals("test", movieEntity.getName());
        assertEquals("test", movieEntity.getId());
        assertEquals("test", movieEntity.getGenre());
        assertEquals("test", movieEntity.getImage());
        assertEquals("test", movieEntity.getDescription());
        assertFalse(movieEntity.isWatchlist());
    }

}
