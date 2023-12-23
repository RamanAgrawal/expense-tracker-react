import MainGrid from "../HomeComponents/Main";
import ExpenseList from "../HomeComponents/ExpenseList";
import { useSelector } from "react-redux";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "../HomeComponents/Switch";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Profile from "../HomeComponents/Profile";
import { Container, Grid } from "@mui/material";
import Piee from "../HomeComponents/Charts/Pie";

const drawerWidth = 290;
// const showForm=useSelector(state=>state.expenseForm.showForm)

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Home() {
  const premium = useSelector((state) => state.auth.premium);
  const dark = useSelector((state) => state.darkMode.dark);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const darkTheme = createTheme({
    palette: {
      mode: dark && premium ? "dark" : "light",
    },
  });


  

  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={{ display: "flex" }} maxWidth="lg">
        <CssBaseline />
        <AppBar
          sx={{
            top: "0",
            right: "0",
            left: "0",
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              sx={{ flexGrow: "1" }}
              component="div"
            >
              Expense Tracker
            </Typography>
            {premium && <Switch />}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <AccountCircleIcon sx={{ fontSize: "3rem" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={open} sx={{ maxWidth: "100%" }}>
          <MainGrid />
          <Container>
            <Grid container gap={0}>
              <Grid item md={4} xs={12}>
                <Piee />
              </Grid>
              <Grid item md={8} xs={12}>
                <ExpenseList />
              </Grid>
            </Grid>{" "}
          </Container>
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              position: "fixed",
            },
          }}
          variant="temporary"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {open && <Profile />}
        </Drawer>
      </Container>
    </ThemeProvider>
  );
}
