import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/Appbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";

function Component() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`./localdata/user.json`).then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <AppBar position="static" style={{ backgroundColor: "#fff" }}>
          <Grid container spacing={0} style={{ padding: 10 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ color: "#000" }}>
                <b>Akun</b>
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
        <Grid
          container
          spacing={0}
          style={{ padding: 10, backgroundColor: "white" }}
        >
          <Grid item xs={6}>
            <Typography variant="caption">
              <b>{data.name}</b>
            </Typography>
          </Grid>
          <Grid align="right" item xs={6}>
            <Typography variant="caption" style={{ color: "green" }}>
              UBAH
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">{data.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">{data.phone}</Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
export default Component;
