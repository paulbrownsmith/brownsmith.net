import { Box, Typography, Stack } from "@mui/material";
import Markdown from "react-markdown";

const About = () => {
  const md = `
  ### **Thanks for Visiting My Portfolio!**  

  I've been crafting **user interfaces** since the days of **pre-internet CD-ROM GUIs**, blending creativity with functionality long before the web became what it is today.  
  
  My journey began with a **degree in Packaging Design**, leading to my first role as a **graphic designer** at Allied Carpets. But it wasn’t long before I pivoted into development—right at the heart of the **late '90s PC boom**. At **Dell EMEA**, I built regional e-commerce websites that helped generate **millions in daily revenue**, marking the start of my deep dive into UI and front-end development.  
  
  Since **2007**, I've been a **contractor**, collaborating with diverse clients across **Soho, Canary Wharf, Bracknell**, and beyond—bringing innovative digital experiences to life.  
  
  When I’m not designing or developing, you'll find me **skiing, running**, or traveling across **Europe in a campervan** with my wife, always seeking new inspiration.  
  
  `;

  return (
    <Box sx={{ width: 1 }}>
      <Stack direction={{ xs: "row" }}>
        <Box sx={{ width: { xs: "0", md: "15%" } }} />
        <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2} pt={0}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt="Mountain"
            src="/images/paul3.jpg"
          />
          <Box mt={2} width="100%">
            <Typography sx={{ color: "text.primary" }} component="span">
              <Markdown>{md}</Markdown>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "0", md: "15%" } }} />
      </Stack>
    </Box>
  );
};

export default About;
