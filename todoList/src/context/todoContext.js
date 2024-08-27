import {useContext , createContext} from "react";

// create the context

export const TodoContext = createContext({
    // Default value
    todos : [
        {
            id: 1,
            title: "Learn React",
            completed: false
        } 
    ],
    // we would just write the definition of the function , functionality is not reqd
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {},
    updateTodo : (id , todo) => {}
})

// provides the context to the components
export const TodoProvider = TodoContext.Provider

// custom hook to use the context
export default function useTodo(){
    return useContext(TodoContext)
}