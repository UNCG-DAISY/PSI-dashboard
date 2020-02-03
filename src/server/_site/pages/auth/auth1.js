import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';

import Test from '../../components/test'
import {hasUser} from '../../components/checkIfUser'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function About({user}) {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About.js
        </Typography>
        <Test user={user} />
        
      </Box>
      {user.id}
    </Container>
  );
}

About.getInitialProps = async ctx => {
  const {req,res} = ctx
  console.log( '' ?? 1111)

  hasUser(req)
 
  return {}
}

export default About