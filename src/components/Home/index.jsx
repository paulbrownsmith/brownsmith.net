import React from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Home = () => {
  return (
    <Stack direction={{ xs: "row" }}>
      <Box sx={{ width: { xs: "0", md: "15%" } }} />
      <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
        <Typography component="h1" variant="h3" sx={{ my: "2rem" }}>
          Hello!
        </Typography>
        <Typography component="p" sx={{ lineHeight: "1.4rem" }}>
          Hi, I'm a UI Developer and UX Engineer with a strong focus on solving
          complex UI challenges, front-end development, and building scalable,
          responsive, and accessible component libraries.
        </Typography>
        <Typography component="p" sx={{ lineHeight: "1.4rem" }} mt={2}>
          I specialize in:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Crafting seamless user experiences through well-structured, high-performance UI solutions." />
          </ListItem>
          <ListItem>
            <Typography>
              Ensuring accessibility compliance (WCAG AA) and full test
              coverage, including acceptance and automated testing.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Thriving in Agile environments, collaborating closely with
              cross-functional teams to deliver user-centered designs.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Certified Scrum Master, adept at improving workflows, fostering
              collaboration, and driving efficient development processes.
            </Typography>
          </ListItem>
        </List>
        <Typography component="p" sx={{ lineHeight: "1.4rem" }}>
          I bring a blend of technical expertise, problem-solving, and a passion
          for accessibility to every project, ensuring that digital experiences
          are both intuitive and inclusive.
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "0", md: "15%" } }} />
    </Stack>
  );
};

export default Home;
