import { Box, Typography, Stack } from "@mui/material";
import Markdown from "react-markdown";

const Article6 = () => {
  const md = `# **Application Overview: Imported Files UI**  

  This application is designed to manage and track **imported files**. The layout is split into **two main panels**:  
  
  - **Left-hand Panel**: Displays the list of **imported files**  
  - **Right-hand Panel**: Shows the **details and status** of the selected import  
  
  ---
  
  ## **Left Panel: Imported Files List**  
  On the left, you’ll see a list of files that have been imported. Each entry typically includes:  
  - The **job reference** (a unique ID for each import)  
  - The **treatment type** (e.g., *AV Only*, *IX Guard*, or *AV and IX Guard*)  
  - The **upload date**  
  - The **current status** (e.g., *Processing Finished*, *Password Required*, *Import Failed*, *Examining Import Data*)  
  - A short **description** (e.g., *e2e test contentiones discere*)  
  
  This panel acts like your file "inbox," showing the history of imports and their progress at a glance.  
  
  ---
  
  ## **Right Panel: Imported File Details**  
  When you select a file from the left, its **details appear on the right**. This area provides a more in-depth breakdown, including:  
  
  - The **processing outcome** (e.g., *Processing Finished*, *Import Failed*)  
  - The **treatment type** applied to the file  
  - The **file name** (including nested zip files if password protected)  
  - A list of the **processes** the file went through:  
    - *Password Required* (file is encrypted and needs a password)  
    - *Examining Import Data* (file is being checked)  
    - *Import Failed* (processing failed)  
    - *Processing Finished* (file passed all checks and is ready)  
  
  - **Sender and recipient details** (e.g., *Sent by Kylie Minogue to Rick Astley*)  
  - **Processing date and time**  
  - **Hash information** (e.g., SHA256) for integrity verification  
  - The **import method** (e.g., *Imported via CBIE FILES*)  
  - The **expiry date** (when the imported file will be deleted)  
  - The **import size**  
  
  This right panel serves as a **timeline and audit trail** for each file, allowing users to trace what’s happened to it during processing.  
  
  ---
  
  ## **Additional Features Noticed**  
  - **Download options** are available for successfully imported files.  
  - A **search bar** allows searching by subject or job reference.  
  - Version and build info for the application (*e.g., UI version 1.9.0*).  
  - **Accessibility** and **contact** links are provided at the bottom.  
  
  ---
  
  ## **In Short**  
  - The **left panel** is for browsing imported files.  
  - The **right panel** shows detailed status updates, the processing journey, and recipient information for the selected file.  
  
  This makes it easy for users to **monitor file imports, check processing results, and confirm delivery** — all in one place.  
  `;

  return (
    <Box>
      <Box p={2}>
        <Stack direction={{ xs: "row" }}>
          <Box sx={{ width: { xs: "0", md: "15%" } }} />
          <Box sx={{ width: { xs: "100%", md: "70%" } }} p={2}>
            <Typography component="span" variant="h4">
              Application Overview: Imported Files UI
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

export default Article6;
