import { SignalCellularNoSimOutlined } from '@material-ui/icons';
import axios from 'axios'
import {axiosInstance} from '../../helper/axiosInstance'
const urlApi="http://localhost:8400/api/";

const pathFindAll ="findall";
const pathCreate ="";
const pathGetDetail ="";

const pathUpdate ="";
const pathFileUplodad ="TaskFileUpload/?code=YQG6fuph5LwleZuX9duxCoUa08NvGiPk2JIKkILzEonbhjqRYfyAHA=="



export const apiGetTasks = async () =>{

let Tasks = [];

   await axios.get(urlApi+pathFindAll).then(response=>{
      //  console.log("response: " + response);
      Tasks=  response.data;
    }).catch(error=>{
        console.error(error);
         throw error;
    });

    return Tasks;
 
}


export const apiGetTaskDetail = async (id) =>{


  
    let Task = {}; 


    let urlServicio = urlApi+pathGetDetail +id;

    console.log("urlServicio: " + urlServicio);

       await axiosInstance.get(urlServicio).then(response=>{
          //  console.log("response: " + response);
          Task=  response.data;
        }).catch(error=>{
            console.error(error);
             throw error;
        });
    
        return Task;
     
    }

    
export const apiDeleteTask= async (id) =>{


  
    let Task = {}; 


    let urlServicio = urlApi;

    console.log("urlServicio: " + urlServicio);

       await axiosInstance.delete(urlServicio).then(response=>{
          //  console.log("response: " + response);
          Task=  response;
        }).catch(error=>{
            console.error(error);
             throw error;
        });
    
        return Task;
     
    }
    


export const apiCreateTask = async (Task) =>{

    let TaskResponse = {};
    
       await axiosInstance.post(urlApi+pathCreate,Task).then((response)=>{
          TaskResponse=  response;
        }).catch(error=>{
            console.error(error);
             throw error;
        });
    
        return TaskResponse;
     
    }

export const apiUpdateTask = async (Task) =>{

    let TaskResponse = {};
    
        await axiosInstance.put(urlApi+pathUpdate+Task.id,Task).then((response)=>{
            TaskResponse=  response.data;
        }).catch(error=>{
            console.error(error);
                throw error;
        });
    
        return TaskResponse;
        
    }
    