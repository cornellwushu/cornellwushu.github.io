import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import { Grid, Typography, Container, Button, IconButton, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typing, Logo } from '../styles/FooterStyles';
import { rgba } from 'polished';
import { bgColorPrimary, bgColorSecondary, fontColorPrimary, fontPrimary } from '../styles/ColorsFonts';

const Footer = () => {
  return (
    <>
      <Grid container bgcolor={'whitesmoke'} alignItems={'center'} justifyContent={'center'} pb={3} pt={2}>
        <Grid item align={'center'}>
          <Container sx={{ width: 300 }}>
            <Logo style={{ height: 150, backgroundRepeat: 'no-repeat', marginLeft: 35 }} />
            <Typography variant={'h4'} sx={{ color: '#201E1F', marginLeft: { md: -3, xs: -1 } }}><i>Cornell Wushu</i></Typography>
          </Container>
        </Grid>
        <Grid item >
          <Grid container align={'center'}>
            <Grid item md={12}>
              <IconButton href="https://www.instagram.com/cornellwushu/" target="_blank" size="large">
                <InstagramIcon sx={{ color: "#CC1122" }} />
              </IconButton>
            </Grid>
            <Grid item md={12}>
              <IconButton href="https://www.facebook.com/groups/194421890577476" target="_blank" size="large">
                <FacebookIcon sx={{ color: "#CC1122" }} />
              </IconButton>
            </Grid>
            <Grid item md={12}>
              <IconButton href="https://www.youtube.com/user/CornellWushu" target="_blank" size="large">
                <YouTubeIcon sx={{ color: "#CC1122" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item justifyContent={'center'} align={'center'} sx={{ paddingBottom: { xs: 6 }, paddingTop: { xs: 3 } }}>
          <Container>
            <Typography variant="p" fontSize={20}>
              <i>@ cornell university<br />
                Built by Pratyush Sudhakar</i>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;