import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Golog from "../../assets/lgjk.png";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import PaymentIcon from "@material-ui/icons/Payment";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import AddIcon from "@material-ui/icons/Add";
import ReorderIcon from "@material-ui/icons/Reorder";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Category from "../../components/category";
import Content from "../../components/content";

function Component() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xs"
        style={{ padding: 0, backgroundColor: "#fff", height: "100vh" }}
      >
        <AppBar position="static" style={{ backgroundColor: "#fff" }}>
          <Grid container spacing={0} style={{ padding: 10 }}>
            <Grid item xs={6}>
              <img src={Golog} style={{ width: 75 }} />
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <LocalOfferIcon style={{ color: "yellow" }} />
              <Grid>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#000" }}
                >
                  Promo
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
        <div style={{ padding: 10 }}>
          <Card style={{ backgroundColor: "navy" }}>
            <Grid container spacing={0} style={{ padding: 10 }}>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle2"
                  gutterbottom
                  style={{ color: "#fff" }}
                >
                  <b>Gopay</b>
                </Typography>
              </Grid>
              <Grid align="right" item xs={6}>
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ color: "#fff" }}
                >
                  Rp2000000
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ padding: 10 }}>
              <Grid align="center" item xs={3}>
                <PaymentIcon style={{ color: "#fff" }} />
                <Grid align="center">
                  <Typography
                    variant="caption"
                    gutterBottom
                    style={{ color: "#fff" }}
                  >
                    Bayar
                  </Typography>
                </Grid>
              </Grid>
              <Grid align="center" item xs={3}>
                <SystemUpdateAltIcon style={{ color: "#fff" }} />
                <Grid align="center">
                  <Typography
                    variant="caption"
                    gutterBottom
                    style={{ color: "#fff" }}
                  >
                    Minta
                  </Typography>
                </Grid>
              </Grid>
              <Grid align="center" item xs={3}>
                <AddIcon style={{ color: "#fff" }} />
                <Grid align="center">
                  <Typography
                    variant="caption"
                    gutterBottom
                    style={{ color: "#fff" }}
                  >
                    Isi Saldo
                  </Typography>
                </Grid>
              </Grid>
              <Grid align="center" item xs={3}>
                <ReorderIcon style={{ color: "#fff" }} />
                <Grid align="center">
                  <Typography
                    variant="caption"
                    gutterBottom
                    style={{ color: "#fff" }}
                  >
                    Lainnya
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div style={{ padding: 10 }}>
          <Category />
        </div>
        <div style={{ padding: 10 }}>
          <Content />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Component;
