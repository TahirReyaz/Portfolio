import React from 'react';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const Social = () => {

    return (
        <Grid container direction="column" alignItems="center" justifyContent="space-around" id="social">
            <LinkedInIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
            <MailIcon fontSize="large" />
        </Grid>
    );
}

export default Social;