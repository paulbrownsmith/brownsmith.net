import { Box, Typography, Stack } from "@mui/material";
import Markdown from "react-markdown";

const Article4 = () => {
  const md = `

During my time at my most recent contract I was tasked with building the new **[TwinStream website](https://twinstream.com)** with **React**, I decided to use the opportunity to try **Tailwind CSS**, and it proved to be an excellent choice for several reasons.

The website was built using **React**, and deployed and hosted in **AWS**.

---

## **Speed & Efficiency**  
Tailwind’s **utility-first approach** allowed for rapid styling **without writing custom CSS**. Instead of switching between CSS files and components, styling was done **inline within JSX**, significantly **speeding up development**.  

This kept styles **scoped, maintainable, and easy to read**.  

---

## **Consistent & Scalable Design**  
- Tailwind’s **design tokens** (colors, spacing, typography) ensured a **consistent** UI across the site.  
- **Theme customization** allowed us to extend default styles while keeping branding intact.  
- Using **variants & responsive utilities**, we made components **fully responsive without media queries**.  

---

## **Performance Benefits**  
Tailwind’s **purge feature** removed unused CSS in production, keeping the final CSS **lightweight and optimized**.  

**Smaller CSS bundle size** = **Faster page loads**  

---

## **Developer Experience**  
- **Fewer context switches** – No need to jump between CSS files.  
- **Reusable components** – Styled quickly without creating a bloated stylesheet.  
- **Dark mode & animations** – Handled effortlessly with built-in utilities.  

---

## **Final Thoughts**  
Tailwind CSS **significantly enhanced productivity** while ensuring **aesthetically pleasing, responsive, and maintainable** styles for twinstream.com. It’s a **perfect fit** for modern React projects where speed, consistency, and scalability matter. 💡✨  

Would I use it again? **Absolutely!** 

  `;

  return (
    <Box>
      <Box p={2}>
        <Stack direction={{ xs: "row" }}>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
          <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
            <Typography component="span" variant="h4">
              Insights on Using Tailwind CSS for twinstream.com (Built with
              React)
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

export default Article4;
