import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import pic from "../assets/img/d2s.jpeg";
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

const Job = () => {
  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 4, sm: 8 },
        bgcolor: "white",
      }}
    >
      <Container>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {jobItems.map((job, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                {/* Unsplash random image with "animals" keyword */}
                <img
                  // src={`https://source.unsplash.com/random/200x200/?animals&sig=${index}`}
                  src={pic}
                  alt={`${job.title} logo`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Job;
