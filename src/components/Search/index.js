import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export default function Search(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', padding: "16px 0px 16px 0px", width: "35%" }}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5, }} />
            <TextField id="input-with-sx" label="Search" variant="standard" sx={{ width: "100%" }} onChange={ props.handleChangeSearch} />
        </Box>
    )
}
