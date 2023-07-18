import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#626262" : "#FFFFFF",
  },
}));

const SkeletonGrid = () => {
  return (
    <>
      <CustomizedProgressBars />
    </>
  );
};

export function CustomizedProgressBars() {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <BorderLinearProgress />
      <BorderLinearProgress />
      <BorderLinearProgress />
      <BorderLinearProgress />
      <BorderLinearProgress />
      <BorderLinearProgress />
      <BorderLinearProgress />
    </Stack>
  );
}

export default SkeletonGrid;
