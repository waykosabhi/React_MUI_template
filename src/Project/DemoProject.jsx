import {
  DockTwoTone,
  GitHub,
  Image,
  Instagram,
  LaptopMac,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import { TimelineOppositeContent } from "@mui/lab";

const DemoProject = () => {
  return (
    <>
      {/* HOme start */}
      <Box sx={{ position: "relative" }}>
        <Stack
          sx={{
            bgcolor: "#f5c583",
            minHeight: "100vh",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <LaptopMac sx={{ fontSize: "10rem" }} />

          <Typography variant="h2" color="initial">
            Davina Griss
          </Typography>
          <Switch></Switch>
        </Stack>
        <Avatar
          variant="rounded"
          src="https://t4.ftcdn.net/jpg/00/79/07/81/360_F_79078102_2fa1JMfQY2nsWrYpsegWvHxPWHjwBZl4.jpg"
          sx={{
            position: "absolute",
            bottom: 50,
            left: "47%",
            width: 70,
            height: 50,
          }}
        />
      </Box>
      {/* HOme end */}

      {/* About me start */}
      <Stack
        sx={{
          minHeight: "80vh",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="p" marginTop={5}>
          ABOUT ME
        </Typography>

        <Container>
          <Box marginTop={10} sx={{ display: "flex", gap: 20 }}>
            <Grid>
              <Box item xs={4}>
                <Card
                  sm={{ maxWidth: 300 }}
                  justifyContent="space-between "
                  sx={{ border: "solid 2rem white" }}
                >
                  <Paper elevation={5}>
                    <CardMedia
                      component="img"
                      image="https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg"
                      alt=""
                    />
                    <CardContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Avatar
                        variant="square"
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTa2JRumnP1BfwZQZZVosH01ibvr0zNzV-k41Gci2S5xZNCpZ1F"
                      />
                      <Avatar
                        variant="square"
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_dqmX6rwdMnb--indfyZL9midEH8ct1e5Y_DNKQL0NQXJVQ6p"
                      />
                      <Avatar
                        variant="square"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiTpFIce6j9KcSVHNiiJqtqc2FWpY9It3UMYWzG78XeA3IQhL"
                      />
                    </CardContent>
                  </Paper>
                </Card>
              </Box>
            </Grid>
            <Box sx={{ display: "flex-column", gap: 10 }}>
              <Card sm={{ maxWidth: 250 }}>
                <CardHeader>
                  <Badge color="secondary" badgeContent=" " />
                </CardHeader>
                <CardContent>
                  <Typography variant="h5">Hi :) </Typography>
                  <Typography variant="h6">
                    👋 I'm Davina Griss. Fictional person for preview purposes
                    :) I'm working with newest front-end frameworks like
                    Angular, React and Vue. What you are seeing now is portfolio
                    template from Dorota1997. If you like this portfolio
                    template, make sure to ⭐ the repository to make it more
                    recognizable for other users. Thank you 💜{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Stack>
      {/* About me end */}

      {/* Peojects start*/}
      <Box>
        <Stack
          sx={{
            bgcolor: "#F5E4C9",
            minHeight: "70vh",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="p" marginTop={5}>
            PROJECTS
          </Typography>

          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ border: "solid 1rem white " }}>
                  <CardMedia
                    height="250"
                    component="img"
                    image="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/animal-shelter/p1.jpg"
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    ANIMAL SHELTER
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ border: "solid 1rem white " }}>
                  <CardMedia
                    height="250"
                    component="img"
                    image="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/photography/p1.jpg"
                  />
                </Box>
                <CardContent>
                  <Typography sx={{ textAlign: "center" }} variant="h5">
                    PHOTOGRAPHY
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ border: "solid 1rem white " }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/adventure/p1.jpg"
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    3D OBJECT VIEWER
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Container>
        </Stack>
      </Box>
      {/* Peojects end*/}

      {/* skills start */}
      <Box>
        <Stack
          sx={{
            bgcolor: "black",
            minHeight: "50vh",
          }}
        >
          <Typography
            sx={{ textAlign: "center", color: "white" }}
            variant="p"
            marginTop={5}
          >
            SKILLS
          </Typography>

          <Container>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 110,
                  height: 120,
                  marginTop: "3rem",
                },
              }}
            >
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://banner2.cleanpng.com/20190125/wpj/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbcb7d671.680718971548434364753.jpg" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    HTML 5
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    CSS 3
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="data:image/png;base64,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" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    Angular
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://cdn-icons-png.flaticon.com/512/919/919832.png" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    TypeScript
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    JavaScript
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn33U4msAO3aApavbY3to8duyEKQyxh1kGdw1uhQD5QUTxpS3y2OgxPhuzrW-VbKTg4po&usqp=CAU" />
                  <Typography variant="p" sx={{ color: "white" }}>
                    SASS
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    Bootstrap
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://e7.pngegg.com/pngimages/340/226/png-clipart-purple-and-white-logo-c-computer-programming-software-development-programmer-marklogic-coder-miscellaneous-purple.png" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    C#
                  </Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  bgcolor: "#201F1C",
                }}
                elevation={5}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  gap={2}
                >
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7fsbcnHdLcmWqj4ugFg5eK361gCSvFB4dg&usqp=CAU" />
                  <Typography
                    variant="p"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    MySql
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Container>
        </Stack>
      </Box>
      {/* skills end */}

      {/* Experience start */}
      <Box>
        <Stack
          sx={{
            bgcolor: "#F5E4C9",
            minHeight: "50vh",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="p" marginTop={5}>
            EXPERINCE
          </Typography>

          <Timeline position="alternate-reverse">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ margin: "auto" }}
                align="left"
                variant="body2"
                color="text.secondary"
              >
                10.2019 - present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Avatar src="data:image/png;base64,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" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ marginInlineStart: 40, marginTop: 10 }}>
                  <CardContent>
                    <Chip
                      label="Angular 8/9/10"
                      sx={{
                        bgcolor: "#A99148",
                        color: "white",
                      }}
                    />
                    <Typography variant="h6">Front-End Developer</Typography>
                    <Typography>DefOpenSource</Typography>
                    <Box>
                      <Chip
                        label="REST API"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="RxJS"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="JavaScript"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="Bootstrap"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="MDBootstrap"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="EF Core"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label=".NET Core"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="SignalR"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="Angular Material"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ margin: "auto" }}
                align="left"
                variant="body2"
                color="text.secondary"
              >
                10.2019 - present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Avatar src="data:image/png;base64,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" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ marginInlineEnd: 40, marginTop: 10 }}>
                  <CardContent>
                    <Chip
                      label="Angular 8/9/10"
                      sx={{
                        left: "0",
                        bgcolor: "#A99148",
                        color: "white",
                      }}
                    />
                    <Typography variant="h6">Front-End Developer</Typography>
                    <Typography>DefOpenSource</Typography>
                    <Box>
                      <Chip
                        label="RxJS"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="Django"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="PHP"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="JavaScript"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                      <Chip
                        label="DHTMLX Gantt"
                        sx={{
                          bgcolor: "#AC7897",
                          color: "white",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Avatar src="https://static.vecteezy.com/system/resources/previews/002/219/590/original/illustration-of-hourglass-icon-free-vector.jpg" />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
          </Timeline>
        </Stack>
      </Box>
      {/* Experience  end*/}

      {/* footer start */}
      <Stack
        sx={{
          bgcolor: "black",
          minHeight: "30vh",
        }}
      >
        <Box sx={{ textAlign: "center", marginTop: 12, marginBottom: 3 }}>
          <Link href="#">
            <GitHub sx={{ color: "white" }} />
          </Link>
          <Link href="#" color="inherit">
            <Instagram sx={{ color: "white" }} />
          </Link>
        </Box>
        <Typography variant="p" sx={{ color: "white", textAlign: "center" }}>
          Copyright © Davina Griss
        </Typography>
      </Stack>

      {/* footer end */}
    </>
  );
};

export default DemoProject;
