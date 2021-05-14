import{types} from '../types/types' 
import {apiGetTasks, apiCreateTask, apiGetTaskDetail,apiUpdateTask} from '../helper/api/TaskApi'

export const getTasks = () =>{
    return async (dispatch) =>{ 
        dispatch(fetchTasksRequest());
    
        
        let tasks = await apiGetTasks();
        console.log(tasks);
            dispatch(fetchTasksSuccess(tasks));     
        }
    }

//---------------------
export const fetchTasksSuccess = (tasks) =>({
    type: types.TASK_FETCH_SUCCESS,
    payload: {
        tasks
    }
})

export const fetchTasksRequest = () =>({
    type: types.TASK_FETCH_REQUEST
})
    
    
export const taskSave= (task) =>{
    return async( dispatch ) => {

        console.log("====>GUARDA  1");
       
        let newTask = {};
        if(task.id==null){
            newTask= await apiCreateTask(task);
        }else{
            newTask= await apiCreateTask(task);
            console.log(newTask);
        }      

     // await  getTasks();
     //   dispatch(restaurantSaveSuccess(newRestaurant,newRestaurant.dishes));

    }
}

const taskSaveRequest= () =>({
    type: types.TASK_SAVE_REQUEST
})

export const taskNew= () =>({
    type: types.TASK_NEW
})


const taskSaveSuccess= (taskDetail) =>({
    type: types.TASK_SAVE_SUCCESS,
    payload:{
        taskDetail
    }
})

//-----------------


export const taskGetDetail = (id) =>{
    return async(dispatch) =>{
        dispatch(taskLoadRequest());
        let task= await apiGetTaskDetail(id);
        dispatch(taskLoadSuccess(task));
    }
}

const taskLoadSuccess= (task) =>({
    type: types.TASK_LOAD_SUCCESS,
    payload:{
        task
    }
})

const taskLoadRequest= () =>({
    type: types.TASK_LOAD_REQUEST
})

export const taskEditRequest= (id) =>({
    type: types.TASK_EDIT_REQUEST,
    payload:{
        id
    }
})
