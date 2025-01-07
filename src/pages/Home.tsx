import { Fragment } from "react";
import Hero from "../components/hero";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <div
        className="background"
        style={{
          backgroundImage: "url(./background-home.jpg)",
          backgroundSize: "cover",
          height: "65vh",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1 className="Image-text">
            From the source we build brighter futures
          </h1>
        </div>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 4,
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Card sx={{ minWidth: 275 }} elevation={6}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontSize: '1.5rem' }}>
              Our Mission
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
              At the Umthombo Foundation, we believe in being a source of hope,
              empowerment, and transformation for communities in need. Our
              mission is to uplift underprivileged individuals and communities
              by providing access to education, healthcare, and sustainable
              development opportunities.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }} elevation={6}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontSize: '1.5rem' }}>
              Our Vision
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
              Our vision is to create thriving communities where every
              individual has the resources and support to reach their full
              potential. We are committed to fostering resilience, equity, and
              innovation in our approach, ensuring a lasting impact for
              generations to come.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }} elevation={6}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontSize: '1.5rem' }}>
              Our Values
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
              At our core, we value compassion, transparency, and collaboration.
              These principles guide every initiative we undertake, enabling us
              to work hand-in-hand with partners and beneficiaries to build a
              brighter, more equitable future for all.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <div className="mission-text">Inspired by the meaning of "Umthombo" as a source or spring, we strive to be a fountain of opportunity that nurtures potential and fuels positive change.</div>
      <Box display="flex" justifyContent="center" my={2}>
        <Button variant="contained" color="primary" href="/about">
          Learn More
        </Button>
      </Box>
    </Fragment>
  );
}

export default HomePage;
