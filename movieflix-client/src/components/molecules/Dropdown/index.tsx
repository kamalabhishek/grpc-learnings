import styled from "@emotion/styled";
import { Select, MenuItem, FormControl } from "@mui/material";
import React from "react";
import { theme } from "../../../theme/theme";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Text from "../../atoms/Typography";
import { GENRES } from "../../../utils/constants";

interface DropdownProps {
  handleChange: (obj: string) => void;
}

const CustomDropdown = styled(Select)({
  "& .MuiSelect-select": {
    paddingRight: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.grey[100]} !important`,
    padding: "0px",
  },
});

const StyledMenuItem = styled(MenuItem)({
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
});

function Dropdown(props: DropdownProps) {
  return (
    <FormControl data-testid="dropdown" fullWidth>
      <CustomDropdown
        IconComponent={KeyboardArrowDownOutlinedIcon}
        defaultValue={GENRES[3]}
        data-testid="time-dropdown"
        id="dropdown"
        onChange={(e) => props.handleChange(e.target.value as string)}
      >
        {GENRES.map((category) => (
          <StyledMenuItem key={category} value={category}>
            <Text variant="button" color={theme.palette.grey[100]}>
              {category}
            </Text>
          </StyledMenuItem>
        ))}
      </CustomDropdown>
    </FormControl>
  );
}

export default Dropdown;
