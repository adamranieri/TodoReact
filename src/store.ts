import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task{
    taskId: string
    desc: string
    priority: number
    isComplete: boolean

}

export interface State {
    tasks:Task[]
}
const initialState: State = { 
    tasks : [] 
}


const slice = createSlice({
    name:"Tasks",
    initialState,
    reducers:{
        addTask(state, action:PayloadAction<Task>){
            state.tasks.push(action.payload)
        },

        removeTask(state, action:PayloadAction<string>){
            state.tasks = state.tasks.filter(t => t.taskId !== action.payload)
        },

        markComplete(state, action:PayloadAction<string>){
            state.tasks.filter(t => t.taskId === action.payload)[0].isComplete = true
        }

    }
})

export type RootState = ReturnType<typeof store.getState>

export const {addTask, removeTask, markComplete} = slice.actions

export const store = configureStore({reducer: slice.reducer})
