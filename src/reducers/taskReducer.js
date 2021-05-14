import{types} from '../types/types'

const initialState = {
    tasks: [],
    taskDetail:{
        id:null,
        descripcion:"",
        vigente:true,
        fechaCreacion:null},
    editTask: null
}

export const taskReducer =(state=initialState,action) =>{

    switch (action.type) {

        case types.TASK_FETCH_REQUEST:
            return {
                ...state,
                tasks: []
            }        
        case types.TASK_FETCH_SUCCESS:
            return {
                ...state,
                tasks: action.payload.tasks
            }
            case types.TASK_NEW:
            return {
                ...state,
                editTask:null,
                taskDetail: initialState.taskDetail
            }
        case types.TASK_SAVE_REQUEST:
            return {
                ...state,
                editTask:null
            }
        case types.TASK_SAVE_SUCCESS:
            return {
                ...state,
                editTask:null,
                taskDetail:action.payload.taskDetail
            }       
            case types.TASK_LOAD_REQUEST:
            return {
                ...state,
                taskDetail: initialState.taskDetail
            }
            case types.TASK_LOAD_SUCCESS:
            return {
                ...state,
                taskDetail: action.payload.task
            }
            case types.TASK_EDIT_REQUEST:
                return {
                    ...state,
                    editTask: action.payload.id
                }

        default:
            return { ...state}
    }

}