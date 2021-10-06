import { Grid } from '@mui/material'
import React from 'react'

export default function TaskList(props) {

    return (
        <Grid container spacing={2}>
            {props.children}
        </Grid>
    )
}
