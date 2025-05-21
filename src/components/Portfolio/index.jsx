import { Box, Typography, Stack } from "@mui/material";
import Entry from "../Entry";

const Portfolio = () => {
  return (
    <Box sx={{ width: 1 }}>
      <Stack direction={{ xs: "row" }}>
        <Box sx={{ width: { xs: "0", md: "15%" } }} />
        <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
          <Box mt={2} width="100%">
            <Entry
              title="Designing a User-Friendly Cross-Domain Configuration System"
              subTitle="How did I create a seamless system that allows users to create and manage cross-domain data configurations without needing technical expertise"
              image="/images/posts/cross-domain.png"
              href="user-fiendly-cross-domain-ui"
            />
            <Entry
              title="Application Overview: Imported Files UI"
              subTitle="A look into an application designed in Figma and built using React and Material UI"
              image="/images/posts/file-import.jpg"
              href="imported-files-ui"
            />
            <Entry
              title="Material UI for protoype and production?"
              subTitle="How flexible is Material UI for building usable prototypes and producing a finished application?"
              image="/images/posts/material-ui.png"
              href="material-ui"
            />
            <Entry
              title="Ensuring Accessibility Compliance in GOV.UK UI Development"
              subTitle="What tools and documentation are used for ensuring an Accessible UI in the public sector?"
              image="/images/posts/accessibility.png"
              href="accessibility-in-gov-uk"
            />
            <Entry
              title="User Testing & A/B Experimentation at Waitrose"
              subTitle="A look into how we assessed our UI improvements"
              image="/images/posts/waitrose.png"
              href="user-testing-waitrose"
            />
            <Entry
              title="Insights on Using Tailwind CSS for twinstream.com (Built with React)"
              subTitle="Using React and TailwindCSS for a website build"
              image="/images/posts/tailwind-css-logo.png"
              href="tailwindcss-insights"
            />
            <Box
              sx={{
                minHeight: "100px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Typography component="span" variant="p">
                Further portfolio examples are available upon request
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "0", md: "15%" } }} />
      </Stack>
    </Box>
  );
};

export default Portfolio;
