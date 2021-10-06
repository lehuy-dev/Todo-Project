import React, { Component } from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import { STATUSES } from '../../constants/Taskboard';
import { Grid, Stack, Typography } from '@mui/material';
import TaskItem from '../../components/TaskItem/TaskItem';
import TaskList from '../../components/TasList/TaskList';
import { connect } from 'react-redux';
import { actFetchListTask, actFilterTask } from '../../actions/task';
import {changeModelContent, changeModelTitle, hideModel, showModel} from '../../actions/model'
import { bindActionCreators } from 'redux';
import Search from '../../components/Search/index'
import TaskForm from '../../components/TaskForm/TaskForm';

class Taskboard extends Component {
    
    componentDidMount(){
        
        const {onFetchTasks} = this.props
     
        onFetchTasks()
    }
    

    handleChangeSearch = (e)=>{
        const {onFilterTask} = this.props
        onFilterTask(e.target.value)
    }
    handleClickShowModel=()=>{
        this.props.onShowModel()
        this.props.onChangeTitle("Add task")
        this.props.onChangeContent(<TaskForm handleClose={this.props.onHideModel}/>)
    }
    render() {
        const {tasks} = this.props;
       
        const task = (status) => {
            return (
                <Stack spacing={1}>
                    {
                      tasks.map((item, index) => {
                            return (
                                item.status === status && <TaskItem item={item} key={index} />
                            )
                        })

                    }
                </Stack>
            )
        }
        const tasklist = STATUSES.map((item) => {
            return (
                <Grid item md={12 / (STATUSES.length)} xs={12} key={item.value}>
                    <Typography variant="h6"> {item.label}</Typography>
                    {task(item.value)}
                </Grid>
            )
        })

        return (
            <div >
                <Button variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={this.handleClickShowModel}
                   
                    sx={{marginTop:"8px"}}>
                    Thêm công việc
                </Button>
                <Search handleChangeSearch={this.handleChangeSearch}/>
                <TaskList>
                    {tasklist}
                </TaskList>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        tasks : state.taskReducer.listTask
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onFetchTasks: bindActionCreators(actFetchListTask, dispatch),
        onFilterTask: bindActionCreators(actFilterTask, dispatch),
        onShowModel : bindActionCreators(showModel, dispatch),
        onHideModel : bindActionCreators(hideModel, dispatch),
        onChangeTitle: bindActionCreators(changeModelTitle, dispatch),
        onChangeContent: bindActionCreators(changeModelContent, dispatch)
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         onFetchTasks: ()=>dispatch(actFetchListTask())
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Taskboard)