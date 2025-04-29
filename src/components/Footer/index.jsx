import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        flexDirection: "column",
        borderTop: "1px solid #ddd",
        mt: 4,
      }}
    >
      <Box
        component="img"
        sx={{
          width: "80px",
        }}
        alt="Mountain"
        src="/images/mountain.jpeg"
      />

      <Typography component="span" variant="h5">
        Paul Brownsmith -{" "}
      </Typography>
      <Typography
        component="span"
        variant="h5"
        sx={{ color: "text.secondary" }}
      >
        UI/UX Engineer
      </Typography>
    </Box>
  );
}

export default Footer;
