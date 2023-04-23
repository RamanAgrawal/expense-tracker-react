import { Box, Grid } from '@mui/material'
import React, { Fragment } from 'react'

const Main = () => {
    return (<Fragment>
        <div style={{marginTop:'100px',width:'90vw',marginInline:'auto', border:'1px solid black'}}>
            <Box>
                <Grid container>
                    <Grid item xs={3}>
                        <Box height={100}>fdfs</Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box>fdfs</Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box>fdfs</Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box>fdfs</Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </Fragment>
    )
}

export default Main