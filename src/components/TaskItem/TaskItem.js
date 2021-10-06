import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import { styles } from './styles';

const useStyles = makeStyles(styles)
export default function TaskItem(props) {
    const classes = useStyles()
    const { item } = props
    return (
        <Card key={item.id}>
            <CardHeader
                avatar={<Avatar>R</Avatar>}
                action={<IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={item.title}
                subheader={item.date}
            >
            </CardHeader>
            <CardMedia
                component="img"
                height="190"
                image="https://picsum.photos/536/354"
                alt="Paella dish"
            />
            <CardContent>
                <Box marginBottom={1} marginTop={1}>
                    <Typography variant="body2" color="text.secondary">
                        {item.desciption}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Box>
                    <IconButton aria-label="edit" color="primary">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" sx={{ color: "red" }}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    )
}
