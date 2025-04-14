import { Box, Grid, styled, Tab } from "@mui/material";
import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import { theme } from "../../../theme/theme";
import Dropdown from "../../molecules/Dropdown";
import ButtonComponent from "../../atoms/Button";
import { useQuery } from "@apollo/client";
import { useModal } from "../../../context/ModalContext";
import ProductModal from "../Modal";
import MovieCards from "../CardsGrid";
import { GET_MOVIES } from "../../../utils/queries";

const TopGrid = styled(Grid)({
  backgroundColor: theme.palette.grey[400],
  justifyContent: "space-between",
  flexFlow: "no-wrap",
  alignItems: "center",
  padding: "16px 24px",
});

const ChildGrid = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
});

const TabContent = styled(Tab)({
  variant: "subtitle2",
});

const CustomButton = styled(ButtonComponent)({
  padding: "8px",
  borderRadius: "4px",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  "&.Mui-disabled": {
    background: "#9b8ead",
  },
});

const CustomTab = styled(TabPanel)({
  display: "flex",
  justifyContent: "center",
});

const TabsWithFilter = () => {
  const [tabValue, setTabValue] = React.useState<string>("all");
  const [watchlist, setWatchlist] = React.useState<boolean | null>(null);
  const [genre, setGenre] = React.useState<string | null>(null);
  const { open, openModal } = useModal();

  const filter = {
    watchlist: watchlist,
    genre: genre,
  };

  const { data } = useQuery(GET_MOVIES, {
    fetchPolicy: "cache-and-network",
    variables: { filter },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    newValue === "all" ? setWatchlist(null) : setWatchlist(true);
  };

  const handleProductData = (obj: string) => {
    obj === "all" ? setGenre(null) : setGenre(obj);
  };

  return (
    <>
      <TabContext value={tabValue}>
        <TopGrid container>
          <Grid item>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} data-testid="tab">
                <TabContent label="Explore" value="all"></TabContent>
                <TabContent label="Favorites" value="watchlist"></TabContent>
              </TabList>
            </Box>
          </Grid>
          <Grid item>
            <ChildGrid container>
              <Grid item>
                <Dropdown
                  handleChange={(obj) => {
                    handleProductData(obj);
                  }}
                />
              </Grid>
              <Grid item>
                <CustomButton
                  label="Add New Movie"
                  variant="contained"
                  textVariant="h3"
                  onClick={() => {
                    openModal();
                  }}
                />
              </Grid>
            </ChildGrid>
          </Grid>
        </TopGrid>
        <CustomTab value="all">
          <Grid item xs={10}>
            {data && (
              <MovieCards
                data={data.movies}
                watchlist={watchlist}
                genre={genre}
              />
            )}
          </Grid>
        </CustomTab>
        <CustomTab value="watchlist">
          <Grid item xs={10}>
            {data && (
              <MovieCards
                data={data.movies}
                watchlist={watchlist}
                genre={genre}
              />
            )}
          </Grid>
        </CustomTab>
      </TabContext>
      {open && <ProductModal />}
    </>
  );
};

export default TabsWithFilter;
