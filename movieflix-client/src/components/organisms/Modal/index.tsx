import styled from "@emotion/styled";
import { Grid, Dialog, Box } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../theme/theme";
import Illustration from "../../atoms/Illustration";
import Text from "../../atoms/Typography";
import closeIcon from "../../../assets/cross.svg";
import ButtonComponent from "../../atoms/Button";
import { useModal } from "../../../context/ModalContext";
import InputField from "../../atoms/InputField";
import Dropdown from "../../molecules/Dropdown";
import { useMutation } from "@apollo/client";
import { movieInput, MOVIE_DATA } from "../../../utils/constants";
import { NEW_MOVIE } from "../../../utils/queries";

const ModalContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  background: theme.palette.grey[400],
  border: `0.163rem solid ${theme.palette.grey[300]}`,
  borderRadius: 12,
  width: "fit-content",
  paddingTop: 12,
  paddingBottom: 12,
});

const ModalItem = styled(Grid)({
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 40,
  paddingRight: 40,
});

const IconContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const ButtonContainer = styled(Grid)({
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
  marginTop: 32,
});

const CloseBox = styled(Box)({
  cursor: "pointer",
});

const InputBox = styled(Box)({
  padding: "8px 0px",
});

const CustomButton = styled(ButtonComponent)({
  padding: "8px",
  borderRadius: "4px",
  textTransform: "none",
  height: "36px",
  "&.Mui-disabled": {
    background: "#520307",
    color: "grey",
  },
});

const ProductModal = () => {
  const { open, closeModal } = useModal();
  const [newMovie, setNewMovie] = useState<movieInput>(MOVIE_DATA);

  const [addMovie, { loading }] = useMutation(NEW_MOVIE);

  const submitMovie = async () => {
    await addMovie({
      variables: {
        movieInput: newMovie,
      },
    });
    if (!loading) {
      closeModal();
    }
    window.location.reload();
  };

  const validateModal = () => {
    return (
      newMovie.name === "" ||
      newMovie.image === "" ||
      newMovie.description === "" ||
      newMovie.genre === "all" ||
      newMovie.genre === ""
    );
  };

  return (
    <Dialog open={open} onClose={() => closeModal()}>
      <ModalContainer container sx={{ minWidth: "500px" }}>
        <ModalItem item>
          <IconContainer container>
            <Grid item>
              <Text variant="h1" color={theme.palette.grey[100]}>
                Details of the new movie
              </Text>
            </Grid>
            <Grid item>
              <CloseBox onClick={() => closeModal()} data-testid="close-modal">
                <Illustration source={closeIcon} alt={"close"} />
              </CloseBox>
            </Grid>
          </IconContainer>
        </ModalItem>
        <ModalItem item>
          <Grid container direction={"column"}>
            <InputBox>
              <Grid item>
                <Text variant="body1" color={theme.palette.grey[100]}>
                  Name
                </Text>
              </Grid>
              <Grid item>
                <InputField
                  placeHolder={"Enter movie name"}
                  value={newMovie.name}
                  handleChange={(e) => {
                    setNewMovie({ ...newMovie, name: e.target.value });
                  }}
                />
              </Grid>
            </InputBox>
            <InputBox>
              <Grid item>
                <Text variant="body1" color={theme.palette.grey[100]}>
                  Description
                </Text>
              </Grid>
              <Grid item>
                <InputField
                  placeHolder={"Enter movie description"}
                  value={newMovie.description}
                  handleChange={(e) => {
                    setNewMovie({
                      ...newMovie,
                      description: e.target.value,
                    });
                  }}
                />
              </Grid>
            </InputBox>
            <InputBox>
              <Grid item>
                <Grid item>
                  <Text variant="body1" color={theme.palette.grey[100]}>
                    Image URL
                  </Text>
                </Grid>
                <Grid item>
                  <InputField
                    type="number"
                    placeHolder={"Add movie poster URL"}
                    value={newMovie.image}
                    handleChange={(e) => {
                      setNewMovie({ ...newMovie, image: e.target.value });
                    }}
                  />
                </Grid>
              </Grid>
            </InputBox>
            <InputBox>
              <Grid item>
                <Grid item>
                  <Text variant="body1" color={theme.palette.grey[100]}>
                    Genre
                  </Text>
                </Grid>
                <Grid item>
                  <Dropdown
                    handleChange={(obj) => {
                      setNewMovie({
                        ...newMovie,
                        genre: obj,
                      });
                    }}
                  />
                </Grid>
              </Grid>
            </InputBox>
          </Grid>
        </ModalItem>
        <ModalItem item>
          <ButtonContainer container>
            <Grid item>
              <CustomButton
                label="Cancel"
                variant="outlined"
                textVariant="h3"
                onClick={() => closeModal()}
              />
            </Grid>
            <Grid item>
              <CustomButton
                label="Submit"
                variant="contained"
                textVariant="h3"
                disabled={validateModal()}
                onClick={submitMovie}
              />
            </Grid>
          </ButtonContainer>
        </ModalItem>
      </ModalContainer>
    </Dialog>
  );
};

export default ProductModal;
