import { useMutation } from "@apollo/client";
import { Box, Grid, styled } from "@mui/material";
import React from "react";
import { movie } from "../../../utils/constants";
import { GET_MOVIES, UPDATE_MOVIE } from "../../../utils/queries";
import MediaCard from "../../molecules/card";

interface MovieCardsGridProps {
  data: movie[] | undefined;
  watchlist: boolean | null;
  genre: string | null;
}

const CustomBox = styled(Box)({
  flexGrow: 1,
  width: "70vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function MovieCards(props: MovieCardsGridProps) {
  const [updateMovie] = useMutation(UPDATE_MOVIE);

  const handleWatchlist = async (watchlistMovie: movie) => {
    const filter = {
      watchlist: props.watchlist,
      genre: props.genre,
    };
    const { id, name, description, image, genre, watchlist } = watchlistMovie;
    await updateMovie({
      variables: {
        updateMovieId: id,
        movieInput: { name, description, image, genre, watchlist: !watchlist },
      },
      refetchQueries: [
        {
          query: GET_MOVIES,
          variables: { filter },
        },
      ],
    });
  };

  return (
    <CustomBox>
      <Grid container spacing={12}>
        {props.data && (
          <>
            {props.data.map((movie: movie, index: number) => (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
                <MediaCard
                  data={{ ...movie }}
                  handleClick={(selectedMovie) => {
                    handleWatchlist(selectedMovie);
                  }}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </CustomBox>
  );
}

MovieCards.defaultProps = {
  watchlist: null,
  genre: null,
};

export default MovieCards;
