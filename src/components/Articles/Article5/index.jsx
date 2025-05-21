import { Box, Typography, Stack } from "@mui/material";
import Markdown from "react-markdown";

const Article5 = () => {
  const md = `

  In my most recent contract, I was responsible for designing and building user interfaces for deployment within the **GOV.UK domain**, where **WCAG AA compliance** was mandatory. This required rigorous **accessibility testing** and comprehensive **documentation** to ensure usability for all users.  
  
  ---
  
  ## **Design System & Initial Compliance Checks**  
  
  To maintain compliance, the **initial design system** underwent extensive testing for:  
  - **Color contrast** to ensure readability.  
  - **Font size, weight, and spacing** for clear and accessible text.  
  - **Layout structure** to enhance user navigation and accessibility.  
  
  These checks ensured that information within the UI was presented in a **clear, accessible, and user-friendly** manner.  
  
  ---
  
  ## **Automated Accessibility Testing in the Build Process**  
  
  During development, **browser-based tools** like **Lighthouse** and **aXe DevTools** played a crucial role in verifying accessibility compliance. These tools:  
  
  **Ensure correct semantic markup** – Validating the use of header, article, aside, footer, and other structural elements.  
  **Test color contrast** – Providing immediate feedback on accessibility compliance.  
  
  However, these tools primarily **analyze static markup** and require a **page reload** to conduct tests. This means they **miss dynamic elements** like **modals, dropdowns, and interactive components** that appear after user interaction.  
  
  ---
  
  ## **Expanding Coverage with Cypress a11y Testing**  
  
  To address this gap, I integrated **Cypress a11y checks** into the **acceptance testing suite**. Cypress is a **JavaScript-based, end-to-end (E2E) testing framework** that allows for **real-time interaction** with UI components.  
  
  ### **Key Benefit**  
  Cypress tests run **within the browser**, simulating real user interactions. This makes it easy to add accessibility checks **during an interaction**, such as **when a modal is open or a dropdown is expanded**.  
  
  If an issue is detected, the Cypress test **fails instantly**, allowing for immediate debugging and resolution. This approach ensures **comprehensive accessibility compliance** throughout the entire application—**beyond static pages**.  
  
  ---
  
  # **Accessibility Documentation in GOV.UK**  
  
  Under GOV.UK guidelines, **any UI—regardless of its audience size—must include**:  
  1. **An Accessibility Statement**  
  2. **An Accessibility Conformance Report (ACR)**  
  
  ---
  
  ## **Accessibility Statement**  
  
  An **Accessibility Statement** is a **public declaration** of an organization's commitment to ensuring its digital content is accessible to people with disabilities. It typically includes:  
  
  - **Commitment to Accessibility** – A statement on inclusivity and usability.  
  - **Compliance Standards** – Reference to **WCAG, ADA, or Section 508**.  
  - **Known Issues & Improvement Plans** – Transparency about any existing barriers.  
  - **Contact Information** – How users can report accessibility issues or request assistance.  
  - **Assistive Technologies Supported** – Information on compatibility with screen readers and browsers.  
  - **Ongoing Testing & Updates** – How the website is maintained for accessibility.  
  
  ---
  
  ## **Accessibility Conformance Report (ACR)**  
  
  An **Accessibility Conformance Report (ACR)** evaluates how well a digital product meets accessibility standards, typically using the **Voluntary Product Accessibility Template (VPAT®)**.  
  
  ### **Key Components of an ACR**  
  
  **Product Details** – Name, version, and description of the system being evaluated.  
  **Compliance Standards** – Assessment against **WCAG, Section 508, and EN 301 549**.  
  **Evaluation Methods** – How testing was conducted (manual, automated, screen reader testing).  
  **Conformance Levels** – Categorization of compliance:  
    - **Supports** – Fully meets the requirement.  
    - **Partially Supports** – Some aspects meet the requirement, but issues exist.  
    - **Does Not Support** – The requirement is not met.  
    - **Not Applicable** – The requirement does not apply to the product.  
  **Detailed Findings** – Breakdown of accessibility features and barriers.  
  **Remediation Plans** – Steps to fix non-compliant elements.  
  **Contact Details** – How to report accessibility concerns or request assistance.  
  
  ---
  
  ## **Final Thoughts**  
  
  Ensuring **WCAG AA compliance** in **GOV.UK UI development** requires a **multi-layered approach**—from **design system validation** to **automated and interactive testing**. By integrating **Cypress a11y checks** and **detailed documentation**, we can build digital experiences that are truly **inclusive, accessible, and future-proof**.  
  
  

  `;

  return (
    <Box>
      <Box p={2}>
        <Stack direction={{ xs: "row" }}>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
          <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
            <Typography component="span" variant="h4">
              Ensuring Accessibility Compliance in GOV.UK UI Development
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

export default Article5;
