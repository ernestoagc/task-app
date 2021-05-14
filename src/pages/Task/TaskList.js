import React ,{useEffect} from 'react'
import Controls from "../../components/controls/Controls";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { format } from "date-fns";

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import CardHeader from '@material-ui/core/CardHeader';
import useTable from '../../hooks/useTable'
import { useDispatch,useSelector } from "react-redux";
import { getTasks,taskGetDetail,taskEditRequest } from "../../actions/taskAction";

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';


import { Table, TableBody,TableRow, TableCell } from '@material-ui/core'

 const headCells = [
    { id: 'id', label: 'Id' },
    { id: 'descripcion', label: 'Descripcion' },
    { id: 'fechaCreacion', label: 'Fecha Creacion' },
    { id: 'vigente', label: 'Vigente' },
    { id: 'accion', label: 'Acciones' }
]


export const TaskList = () => {

    const { tasks  } = useSelector((state) => state.task);
    const dispatch = useDispatch();

    
    useEffect(() => {
        
        console.log("CargaTaskList");
        dispatch(getTasks());

    

    }, [  ]);



    let rows = [];
    const {TblContainer, TblHeader} =useTable(rows,headCells);

    const deleteTask = (item) => {

    }

    const loadTask= async  (id) => {
        console.log("CARGA");        
        dispatch(taskEditRequest(id));
      //  await dispatch(taskGetDetail(id));
    }

    return (
        <Card >
        <CardHeader 
          subheader="Listado de tareas"
          />
       <Divider />       
       <CardContent>
       <TblContainer>
            <TblHeader/>
            <TableBody>
                { tasks ?(
                  tasks.map(item=> (
                    <TableRow key={item.id}>
                                    <TableCell align="right"> {item.id}</TableCell>
                                    <TableCell align="right"> {item.descripcion}</TableCell>
                                    <TableCell align="right"> {item.fechaCreacion }</TableCell>
                                    <TableCell align="right">
                                        {item.vigente ? <CheckBoxIcon fontSize="small" /> : <CheckBoxOutlineBlankIcon fontSize="small" /> }



                                    </TableCell>
                                    <TableCell align="right">
                                    <Controls.ActionButton
                                            onClick={() => { deleteTask(item) }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    <Controls.ActionButton
                                        onClick={() => { loadTask(item.id) }}>
                                        <EditIcon fontSize="small" />
                                    </Controls.ActionButton>
                                      
                                      </TableCell>


                    </TableRow>
                  ))
                  ): <TableRow />
                }
            </TableBody>
          </TblContainer>


       </CardContent>
              </Card> 

    )
}
