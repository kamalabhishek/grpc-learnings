import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { theme } from "../../../theme/theme";
import Text from "../../atoms/Typography";
import { ButtonBase, Divider, Grid, Link, styled } from "@mui/material";
import { movie } from "../../../utils/constants";
import Illustration from "../../atoms/Illustration";
import filledStar from "../../../assets/filledStar.svg";
import emptyStar from "../../../assets/emptyStar.svg";

interface CardProps {
  data: movie;
  handleClick : (movie: movie) => void
}

const ActionGrid = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0px 8px",
});

export default function MediaCard(props: CardProps) {
  return (
    <Card
      sx={{ maxWidth: 500, minWidth:320}}
      onClick={() => {
        props.handleClick(props.data);
      }}
    >
      <CardMedia
        component="img"
        height="480"
        image={props.data.image}
        alt="green iguana"
      />
      <CardContent sx={{ height: 170}}>
        <Text gutterBottom variant="h2" color={theme.palette.grey[600]}>
          {props.data.name}
        </Text>
        <Text variant="body1" color={theme.palette.grey[600]}>
          {props.data.description}
        </Text>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <ActionGrid container>
          <Grid item>
            <Link
              href="https://in.bookmyshow.com/explore/home/"
              underline="hover"
            >
              <ButtonBase>
                <Text variant="caption1" color={theme.palette.primary.main}>
                  Book Tickets
                </Text>
              </ButtonBase>
            </Link>
          </Grid>
          <Grid item>
            <ButtonBase>
              {props.data.watchlist ? (
                <Illustration source={filledStar} alt="remove" />
              ) : (
                <Illustration source={emptyStar} alt="add" />
              )}
            </ButtonBase>
          </Grid>
        </ActionGrid>
      </CardActions>
    </Card>
  );
}
