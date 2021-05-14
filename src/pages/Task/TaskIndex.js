import React, { useEffect } from "react";
import { TaskList } from "./TaskList";
import { TaskDetail } from "./TaskDetail";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { useParams, Redirect } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Controls from "../../components/controls/Controls";
import { Link,useRouteMatch } from 'react-router-dom'

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container"; 

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
     
    },
    pageContent: {
      flexDirection: "row",
      marginTop: "10px",
      background: "rgb(0, 0, 0,0)"
    },
  }));
  

export const TaskIndex = () => {
    const classes = useStyles();
    return (
       
    <Container fixed direction="column" className={classes.root}>
         <Paper className={classes.pageContent} elevation={0}>


         <Grid  direction="row" container  spacing={2} >             
            <Grid item xs={12} sm={5}>
              <TaskDetail /> 
            </Grid>

            <Grid item xs={12} sm={7}>                  
                      <TaskList />    
            </Grid>

            
         </Grid>



         </Paper>
    </Container>
      
    )
}
