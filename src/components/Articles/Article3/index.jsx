import { Box, Typography, Stack } from "@mui/material";
import Markdown from "react-markdown";

const Article3 = () => {
  const md = `

  While working at **Waitrose**, we leveraged the **user testing lab at John Lewis HQ in Victoria** to validate our assumptions on **UI and UX improvements** for the **Waitrose.com grocery website**.  

  ---

  ## **User Testing Process**  
  
  To refine the website experience, we introduced **new UI features** using **feature flags**, allowing us to test changes in real-world scenarios. We assessed these updates by observing actual customers interacting with the platform.  
  
  An **independent facilitator** guided users through tasks like *“Navigate to your account”* to gauge the usability of new features. These participants belonged to our predefined **persona groups**, enabling us to capture insights from diverse customer segments.  
  
  Using **cameras and screen recording**, we tracked user behavior from a **control room**, giving us the flexibility to intervene if needed. This hands-on approach ensured we captured valuable feedback in real time.  
  
  Additionally, we conducted **split testing** by comparing the original customer journey with the improved version. A volunteer unfamiliar with Waitrose Online completed the original journey, while others tested the new version. By analyzing metrics such as **time taken, eye movement, and click patterns**, we made **data-driven decisions**, ensuring changes were based on real user interactions rather than assumptions.  
  
  ---
  
  ## **Key Benefits of A/B Testing**  
  
  **Data-Driven Decisions** – A/B testing provided concrete insights into what worked best for users, leading to informed design choices.  
  
  **Enhanced User Experience** – By identifying the most effective design elements, we improved navigation, usability, and overall satisfaction.  
  
  **Higher Conversion Rates** – Optimizing UI elements helped drive better engagement and conversions, aligning with business goals.  
  
  **Continuous Learning & Iteration** – Ongoing testing allowed us to refine designs based on real user feedback, ensuring constant improvement.  
  
  ---
  
  By integrating **A/B testing and user research**, we created a more intuitive and efficient **online shopping experience**, backed by measurable results. 
  
  `;

  return (
    <Box>
      <Box p={2}>
        <Stack direction={{ xs: "row" }}>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
          <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
            <Typography component="span" variant="h4">
              User Testing & A/B Experimentation at Waitrose
            </Typography>
            <Typography sx={{ color: "text.primary" }} component="span">
              <Markdown>{md}</Markdown>
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Article3;
