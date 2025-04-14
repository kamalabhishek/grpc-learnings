package com.grpc.movieflix.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "movies")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MovieEntity {
    @Id
    private String id;
    private String name;
    private String description;
    private String genre;
    private String image;
    @Column(columnDefinition = "TINYINT")
    private Boolean watchlist;

}
