import React from "react";
import MotorcycleRoundedIcon from "@material-ui/icons/MotorcycleRounded";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
import LocalDiningRoundedIcon from "@material-ui/icons/LocalDiningRounded";
import LocalTaxiRoundedIcon from "@material-ui/icons/LocalTaxiRounded";
import MarkunreadMailboxRoundedIcon from "@material-ui/icons/MarkunreadMailboxRounded";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import StarsIcon from "@material-ui/icons/Stars";
import AppsIcon from "@material-ui/icons/Apps";
import { Grid, Typography } from "@material-ui/core";

function Component() {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid align="center" item xs={3}>
          <MotorcycleRoundedIcon
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoRide
            </Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <DriveEtaRoundedIcon
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoCar
            </Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <LocalDiningRoundedIcon
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoFood
            </Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <LocalTaxiRoundedIcon
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoBluebird
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={0} style={{ marginTop: 10 }}>
        {" "}
        <Grid align="center" item xs={3}>
          <MarkunreadMailboxRoundedIcon
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoSend
            </Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <PhoneAndroidRoundedIcon
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoPulsa
            </Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <StarsIcon
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              GoPoints
            </Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <AppsIcon
            style={{
              color: "black",
              borderRadius: "50%",
              width: 35,
              height: 35,
              padding: 5,
              borderWidth: 2,
              borderStyle: "solid"
            }}
          />
          <Grid>
            <Typography variant="caption" gutterBottom>
              Lainnya
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default Component;
