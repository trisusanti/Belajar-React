import React from "react";
import { Typography } from "@material-ui/core";

function Component() {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" gutterBottom>
        <b>Konten buat kamu</b>
      </Typography>
      <div style={{ padding: 10, overflow: "auto", display: "flat" }}>
        <Typography
          variant="caption"
          style={{
            marginLeft: 8,
            padding: 3,
            color: "white",
            backgroundColor: "green",
            borderRadius: 10
          }}
        >
          Apa aja
        </Typography>
        <Typography
          variant="caption"
          style={{
            marginLeft: 8,
            padding: 3,
            color: "#000",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10
          }}
        >
          Hiburan
        </Typography>
        <Typography
          variant="caption"
          style={{
            marginLeft: 8,
            padding: 3,
            color: "#000",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10
          }}
        >
          Pembayaran
        </Typography>
        <Typography
          variant="caption"
          style={{
            marginLeft: 8,
            padding: 3,
            color: "#000",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10
          }}
        >
          Promo
        </Typography>
        <Typography
          variant="caption"
          style={{
            marginLeft: 8,
            padding: 3,
            color: "#000",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10
          }}
        >
          Jalan-jalan
        </Typography>
        <Typography
          variant="caption"
          style={{
            marginLeft: 8,
            padding: 3,
            color: "#000",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10
          }}
        >
          Berita
        </Typography>
      </div>
    </React.Fragment>
  );
}

export default Component;
