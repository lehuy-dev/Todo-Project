import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import React from 'react'

export default function TaskForm(props) {
    const { handleClose } = props
    return (
        <>
            <DialogContent>
                <Field name="title" component={input}>
                <TextField
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()} variant="contained">Cancel</Button>
                <Button onClick={() => handleClose()} variant="contained">Submit</Button>
            </DialogActions>
        </>
    )
}
