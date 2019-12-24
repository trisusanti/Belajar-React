import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded";

function Component() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        width: "100%",
        display: "flex",
        maxWidth: 450,
        position: "fixed",
        bottom: 0,
        zIndex: 99
      }}
    >
      <BottomNavigationAction label="Beranda" icon={<HomeIcon />} />
      <BottomNavigationAction label="Pesanan" icon={<ReceiptIcon />} />
      <BottomNavigationAction label="Pesan" icon={<TextsmsRoundedIcon />} />
      <BottomNavigationAction label="Inbox" icon={<EmailIcon />} />
      <BottomNavigationAction label="Akun" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
export default Component;
