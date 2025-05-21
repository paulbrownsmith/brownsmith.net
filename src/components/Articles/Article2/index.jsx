import { Box, Typography, Stack, Alert } from "@mui/material";
import Markdown from "react-markdown";
import Header from "../../Header";

const Article2 = () => {
  const md = `
  
  #### **The Challenge**  
  In a recent contract, I was tasked with designing an intuitive user interface for configuring a **Cross-Domain system**—specifically for **non-technical users**.  
  
  #### **The Goal**  
  Create a seamless system that allows users to **create and manage cross-domain data configurations** without needing technical expertise. These configurations, stored as JSON, determine the **systems and treatments** used in data transfers.  
  
  ---
  
  ### **The Approach**  
  
  #### **Breaking Down Complexity**  
  To make the UI as intuitive as possible, I started by **deconstructing the JSON structure** into meaningful sections. For example, fields like **Name, Description, Purpose, and Contact Email** naturally grouped together when visualized in the UI.  
  
  From there, I established logical groupings of fields that would make sense from a user’s perspective.  
  
  #### **Validating with Stakeholders**  
  To ensure these groupings aligned with real-world use, I facilitated a **focus group** with stakeholders, developers, and the delivery team. Using **FigJam**, I presented a **visual representation** of the grouped fields, allowing the team to **collaborate, refine, and confirm** the most intuitive structure.  
  `;
  const md2 = `
  ---
  
  ### **The Solution**  
  
  Once the structure was finalized, it translated directly into **UI pages**. I mocked up the interface in **Figma**, leveraging **Material UI (MUI) components** such as: Text fields, Radio buttons, Select dropdowns and Checkboxes  
  
  These components provided users with a **guided, step-by-step experience** for creating their configurations.  
  
  After building the mockups, I created a **clickable prototype** in Figma. This allowed stakeholders to **interact with the design** and provide feedback before development began.  
  `;

  const md3 = `
  ---
  
  ### **The Outcome**  
  
  Using **Figma’s interactive prototyping** was a game-changer. It provided a **realistic preview** of the application before a single line of code was written, reducing rework and ensuring alignment with stakeholder expectations.  
  
  The final product was built with **React and MUI**, delivering a polished and intuitive experience that mirrored the prototype. This approach **bridged the gap** between design and development, ensuring a smooth transition from concept to reality.  
  
  **The result? A streamlined, user-friendly system that made complex data configurations effortless for non-technical users.**  
  `;

  return (
    <Box>
      <Box p={2}>
        <Stack direction={{ xs: "row" }}>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
          <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
            <Typography component="span" variant="h4">
              Designing a User-Friendly Cross-Domain Configuration System
            </Typography>
            <Alert sx={{ mt: 2 }} severity="info">
              Please note that for contractual reasons I am unable to publish
              hi-res images from this project
            </Alert>
            <Typography sx={{ color: "text.primary" }} component="span">
              <Markdown>{md}</Markdown>
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt="Cross domain configuration user journey"
                src="/images/posts/user-journey.jpg"
              />
              <Markdown>{md2}</Markdown>
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt="Cross domain configuration user journey"
                src="/images/posts/final-solution.jpg"
              />
              <Markdown>{md3}</Markdown>
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Article2;
