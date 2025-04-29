import { Box, Typography, Stack, Button } from "@mui/material";
import Markdown from "react-markdown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Resume = () => {
  const md = `
## Summary  
A creative front-end designer and developer with experience in **UI design, front-end development, and UX engineering**. My expertise spans **Product Design, UI/UX, React, CSS Modules, Material UI, TypeScript**, as well as **Scrum Master and Delivery Lead responsibilities**.

### Strengths:  
- **Component-based development**, leveraging **atomic design principles** for consistency, responsiveness, and accessibility.  
- Advocating for **design systems** to streamline UI implementation.  
- Ensuring **efficient, reusable, and scalable** front-end solutions.  

---

## **Professional Experience**  

### **Product Designer & Developer - Twinstream Ltd**  
📅 *Nov 2020 - Present*  

- Designed and developed **user interfaces** for **cross-domain solutions**, collaborating with stakeholders and backend teams.  
- Conducted **user journey mapping** using **Figma and Sketch**, iterating through **continuous feedback loops**.  
- Developed **accessible, modular UI components** with **React, Material UI, and Storybook**.  
- Authored **Accessibility VPAT documentation, audits, and assessments**.  

**Tech Stack:** React, Material UI, React Testing Library, Next.js, TailwindCSS, Git, Bitbucket, AWS  

---

### **Front-End Developer - Waitrose**  
📅 *Jan 2019 - Oct 2020*  

- Built **functional, accessible front-end components** using **React, Redux, and AWS microservices**.  
- Delivered **customer loyalty and reward features** to enhance engagement.  

**Tech Stack:** React, TypeScript, Redux, Storybook, CSS Modules/SASS, Accessibility, Yarn, Jest, Git  

---

### **React Native Developer / Scrum Master - Aston Barclay Vehicle Remarketing**  
📅 *July 2018 - Jan 2019*  

- Led **retrospectives, sprint reviews, and planning sessions**.  
- Developed an **iOS & Android mobile app** using **React Native** for **automobile pricing**.  
- Introduced **Jira, Slack, and GitHub-based code reviews** to optimize workflow.  

**Tech Stack:** React Native, Redux, Styled Components, iOS, Android, Git, Sketch  

---

### **Front-End Developer - Waitrose**  
📅 *June 2015 - June 2018*  

- Developed **bespoke UI components** for **delivery & collection booking systems**.  
- Ensured **unit test coverage** with **Jest**.  
- Actively participated in **Scrum ceremonies**.  

**Tech Stack:** React, Redux, CSS Modules/SASS, Yarn, Jest, Codecept/Puppeteer, Git  

---

### **Front-End Developer UI/UX Designer - Quindell Plc**  
📅 *Feb 2014 - May 2015*  

- Developed a **greenfield property lettings platform** using **Backbone.js**.  
- Designed **UI prototypes, user flows, and UX journeys**.  

**Tech Stack:** Backbone.js, Browserify, Handlebars, LESS/CSS, Bootstrap  

---

### **Creative Front-End Developer / Designer - Sony Computer Entertainment Europe**  
📅 *July 2013 - Feb 2014*  

- Designed & built a **responsive front-end framework for SingStar** on PlayStation 4.  

**Tech Stack:** Bootstrap, HTML5, CSS3, JavaScript, Photoshop  

---

### **Front-End Developer - Sainsbury’s**  
📅 *Jan 2013 - July 2013*  

- Developed **mobile UI components** for **products, payments, and user accounts**.  

**Tech Stack:** HTML5, CSS3, JavaScript  

---

### **Creative Front-End Developer / Designer - Sony Computer Entertainment Europe**  
📅 *June 2012 - Dec 2012*  

- Developed a **fully responsive website** for **Little Big Planet**.  

**Tech Stack:** HTML5, CSS3, Bootstrap, FreeMarker, Photoshop  

---

## **Skills & Interests**  

### **Certifications:**  
- **Certified Scrum Master**  
- **BA (Hons) Packaging Design**  
- **PRINCE2 Foundation Certificate**  

### **Contact:**  
📞 07880 700518  
✉️ [paul@brownsmith.net](mailto:paul@brownsmith.net)  
📍 Camberley, Surrey, UK  
  `;

  return (
    <Box sx={{ width: 1 }}>
      <Box p={2}>
        <Stack direction={{ xs: "row" }}>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
          <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
            <Stack direction={{ xs: "row" }}>
              <Box
                component="img"
                sx={{
                  width: "150px",
                  mr: 2,
                  borderRadius: "50%",
                }}
                alt="Mountain"
                src="/images/paul.jpg"
              />
              <Box>
                <Typography component="p" variant="h4">
                  Paul Brownsmith
                </Typography>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ color: "text.secondary" }}
                >
                  UI/UX Engineer
                </Typography>
                <Typography component="p" variant="h4">
                  <Button
                    startIcon={<GitHubIcon />}
                    component={Link}
                    to={"https://github.com/brownsmith"}
                    sx={{ my: 0, color: "#1b338c" }}
                  >
                    GitHub Profile
                  </Button>
                </Typography>
                <Typography component="p" variant="h4">
                  <Button
                    startIcon={<LinkedInIcon />}
                    component={Link}
                    to={"https://www.linkedin.com/in/paulbrownsmith/"}
                    sx={{ my: 0, color: "#1b338c" }}
                  >
                    LinkedIn Profile
                  </Button>
                </Typography>
              </Box>
            </Stack>
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

export default Resume;
