import React,{useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {useForm,Form} from  '../../hooks/useForm'
import Controls from "../../components/controls/Controls";
import { Grid } from "@material-ui/core";
import { taskSave ,taskNew,getTasks,taskGetDetail} from "../../actions/taskAction";

import { uiShowMessage} from "../../actions/uiAction";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import CardHeader from '@material-ui/core/CardHeader';


import { useDispatch,useSelector } from "react-redux"; 

const initialValues = {
    id:null,
    descripcion:"",
    vigente:false}


    const useStyles = makeStyles((theme) => ({
        root: {
          padding: "4px",
        },
        sectionItem: {marginTop:"20px",
        },
        
        imageDish: {
          width: theme.spacing(7),
          height: theme.spacing(7),
          justifyContent:"right",
        },
        sectionImage: {
          padding:"10px",
          margin: theme.spacing(1),
        },
      }));
    


export const TaskDetail = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('descripcion' in fieldValues)
            temp.descripcion = fieldValues.descripcion ? "" : "La descripcion es obligatoria."
         setErrors({
            ...temp
        })
    
        if (fieldValues == values){
          return Object.values(temp).every(x => x == "");
        }
            
            
     }

     const { taskDetail,editTask} = useSelector( state => state.task ); 

    
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    loadForm
  } = useForm(taskDetail , true, validate);

  
  const dispatch = useDispatch();


        
useEffect(  () => { 

  console.log("===>isNewRestaurant");
  console.log(editTask);
if(editTask){
   dispatch(taskGetDetail(editTask));
   setValues({...taskDetail}); 
}else{
  setValues(initialValues); 
}
  
  
  console.log(taskDetail);

 // setValues({...taskDetail}); 


},[editTask]);

        
useEffect(  () => {  
  console.log(taskDetail);

  setValues({...taskDetail}); 


},[taskDetail]);
   

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("===>LOG");
    if (validate()) {
      await dispatch(taskSave(values));    
      await  dispatch(taskNew());    
      
      await dispatch(getTasks());    
         resetForm();
         dispatch(uiShowMessage("Se guardo la tera de forma exitosa","success"));
        
       
      }


      const saveTask = async (values)=>{


        await dispatch(taskSave(values));    
         resetForm();
         dispatch(uiShowMessage("Se guardo la tera de forma exitosa","success"));
        
       }
  }
  let renderIdBox ="";
  if (values.id) {    
    renderIdBox =  <Controls.Input
                      name="id"
                      label="id"
                      value={values.id}
                  />;
  }  

    return (
        
          

            
              <Card >
              <CardHeader 
                subheader="Información General"
                />
             <Divider />

              <CardContent>
              <Form onSubmit={handleSubmit}>
             <Grid container>
                <Grid item xs={12}>

               {renderIdBox}
                

                <Controls.Input
                        name="descripcion"
                        label="Descripcion"
                        value={values.descripcion}
                        onChange={handleInputChange}
                        error={errors.descripcion}
                    />
                    
                    
                    <Controls.Checkbox
                        name="vigente"
                        label="Vigente"
                        value={values.vigente}
                        onChange={handleInputChange}
                    />

                </Grid>


                <Grid item xs={12}>
                    <Controls.Button
                    name="addDish"
                    text="Guardar"
                    type="submit"
                    />

                    
                            <Controls.Button
                            text="Limpiar"
                            color="default"
                            onClick={resetForm} />
                </Grid>

                
             </Grid>
        </Form>
              </CardContent>
              </Card> 


         
    )
}
