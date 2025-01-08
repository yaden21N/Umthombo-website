import { Fragment } from "react";
import Hero from "../components/hero";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  const upcomingEvents = [
    {
      title: "Community Clean-Up Day",
      date: "March 15, 2024",
      description: "Join us for a day of cleaning and beautifying our local parks.",
    },
    {
      title: "Fundraising Gala",
      date: "April 20, 2024",
      description: "An evening of dinner and entertainment to support our mission.",
    },
    {
      title: "Volunteer Training Session",
      date: "May 5, 2024",
      description: "Learn how you can make a difference in your community.",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <>
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
      </>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 4,
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Card 
          sx={{ 
            minWidth: 200,
            minHeight: 300,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            }
          }} 
          elevation={6}
        >
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
        <Card 
          sx={{ 
            minWidth: 200,
            minHeight: 300,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            }
          }} 
          elevation={6}
        >
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
        <Card 
          sx={{ 
            minWidth: 200,
            minHeight: 300,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            }
          }} 
          elevation={6}
        >
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
      <div className="mission-text">The Umthombo Foundation was born in 2024 out of a heartfelt desire to address the challenges faced by underprivileged communities and serve as a source of renewal and hope. Recognizing the urgent need for access to education, healthcare, and sustainable opportunities, a group of passionate individuals came together with a shared vision: to create a meaningful and lasting impact.Inspired by the meaning of "Umthombo" as a source or spring, we strive to be a fountain of opportunity that nurtures potential and fuels positive change.</div>
      <Box display="flex" justifyContent="center" my={2}>
        <Button variant="contained" color="primary" onClick={handleLearnMore}>
          Learn More
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          my: 10,
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(./donations.jpg)",
            backgroundSize: "contain",
            height: "700px",
            position: "relative",
            color: "white",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            flex: 1,
            mr: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: 20,
              right: "5%",
              width: "30%",
             fontSize: "1.5rem",
             fontWeight: "bold",
              padding: 1,
              borderRadius: 1,
            }}
          >
           The Umthombo Foundation thrives thanks to the generosity of donors and the dedication of volunteers.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography variant="h4" component="h2" align="center" sx={{ mb: 2 }}>
            Upcoming Events
          </Typography>
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index} 
              sx={{ 
                mb: 2, 
                transition: 'transform 0.3s', 
                '&:hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: 6, 
                }
              }} 
              elevation={3}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="body2">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
}

export default HomePage;
