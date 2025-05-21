import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";

const Entry = ({ title, subTitle, image, href }) => {
  console.log("props", title);
  return (
    <Box>
      <Card sx={{ display: "flex", mb: 2 }} elevation={0}>
        <CardMedia component="img" sx={{ width: 100 }} image={image} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              <Link to={href}>{title}</Link>
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {subTitle}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
      <Divider>
        <CodeIcon sx={{ color: "#bbb" }} width="80%" variant="middle" />
      </Divider>
    </Box>
  );
};

export default Entry;
