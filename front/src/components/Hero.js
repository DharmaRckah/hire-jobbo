import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const jobItems = [
  {
    title: "Frontend Developer at Company 1",
    description:
      "Developed responsive user interfaces with React and Material UI.",
  },
  {
    title: "Backend Developer at Company 2",
    description: "Built robust REST APIs using Node.js and Express.",
  },
  {
    title: "Full Stack Developer at Company 3",
    description:
      "Integrated frontend and backend services for a seamless user experience.",
  },
  {
    title: "DevOps Engineer at Company 4",
    description:
      "Implemented CI/CD pipelines and managed cloud infrastructure.",
  },
  {
    title: "Data Scientist at Company 5",
    description: "Analyzed complex datasets to drive business insights.",
  },
  {
    title: "Product Manager at Company 6",
    description: "Led cross-functional teams to deliver high-impact products.",
  },
  {
    title: "UX/UI Designer at Company 7",
    description: "Designed user-centric interfaces and experiences.",
  },
  {
    title: "Mobile Developer at Company 8",
    description: "Developed mobile applications for Android and iOS.",
  },
  {
    title: "QA Engineer at Company 9",
    description: "Ensured software quality through rigorous testing.",
  },
  {
    title: "Software Architect at Company 10",
    description: "Designed scalable software architecture solutions.",
  },
  {
    title: "Cybersecurity Specialist at Company 11",
    description: "Secured systems and data from potential threats.",
  },
  {
    title: "Business Analyst at Company 12",
    description: "Bridged the gap between business needs and technology.",
  },
  {
    title: "Machine Learning Engineer at Company 13",
    description: "Built machine learning models to solve complex problems.",
  },
  {
    title: "Blockchain Developer at Company 14",
    description:
      "Developed decentralized applications using blockchain technology.",
  },
  {
    title: "System Administrator at Company 15",
    description: "Managed and maintained IT infrastructure.",
  },
  {
    title: "Technical Writer at Company 16",
    description: "Created clear and concise technical documentation.",
  },
  {
    title: "SEO Specialist at Company 17",
    description: "Optimized websites for better search engine rankings.",
  },
  {
    title: "Cloud Engineer at Company 18",
    description: "Designed and implemented cloud-based solutions.",
  },
  {
    title: "IT Support Specialist at Company 19",
    description: "Provided technical support and troubleshooting services.",
  },
  {
    title: "AI Researcher at Company 20",
    description:
      "Conducted research on artificial intelligence and machine learning.",
  },
];

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobItems);

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter job items based on search input
    const filtered = jobItems.filter(
      (job) =>
        job.title.toLowerCase().includes(value) ||
        job.description.toLowerCase().includes(value)
    );

    setFilteredJobs(filtered);
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            we hire&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              candidates
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Our mission is to connect job seekers with meaningful employment
            opportunities, ensuring that everyone who wants a job has the
            support, resources, and connections needed to achieve their career
            goals.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Search here..."
              placeholder="Search here..."
              value={searchTerm}
              onChange={handleSearchChange}
              inputProps={{
                autoComplete: "off",
                "aria-label": "Search here...",
              }}
            />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Stack>
        </Stack>

        {/* Render filtered job items */}
        <Box
          sx={{
            pt: { xs: 4, sm: 8 },
            pb: { xs: 4, sm: 8 },
            bgcolor: "white",
          }}
        >
          <Container>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {filteredJobs.map((job, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      textAlign: "center",
                      boxShadow: 3,
                      position: "relative",
                      overflow: "hidden",
                      "&:hover .description": {
                        opacity: 0.9,
                        color: "white",
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {job.title}
                    </Typography>
                    <Box
                      className="description"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transform: "translateY(-100%)",
                        transition: "opacity 0.3s, transform 0.3s",
                        p: 2,
                        boxSizing: "border-box",
                      }}
                    >
                      <Typography variant="body2">{job.description}</Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
