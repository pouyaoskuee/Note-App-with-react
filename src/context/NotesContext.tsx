import React, {createContext, useContext, useReducer} from "react";
import {note} from "../Types/Note.ts";
import {Children} from "../Types/Children.ts";

type NotesContextType = note[];
type NotesDispatchContextType = React.Dispatch<action>;
const NotesContext = createContext({} as NotesContextType)
const NotesDispatchContext= createContext({} as NotesDispatchContextType)




type action= { type:'add', payload:note, } | {type:'del', payload:number } | {type:'check', payload:number };

function countReducer(state:note[], {type ,payload}:action) {
    console.log(state)
    switch(type){
        case 'add':
            return [...state , payload];
        case 'del':
            return state.filter((s) => s.id !== payload)
        case 'check':
            return state.map((s) => s.id === payload?{...s , completed: !s.completed}:s)
        default:
            throw new Error(`Not found ${type}`)
    }
}

export function NotesProvider({ children }:Children) {
    const [notes , dispatch] = useReducer(countReducer , [])

    return (
      <NotesContext.Provider value={notes}>
          <NotesDispatchContext value={dispatch}>
              {children}
          </NotesDispatchContext>
      </NotesContext.Provider>
    )

}



export function useNotes() {
    return useContext(NotesContext);
}

export function useNotesDispatch() {
    return useContext(NotesDispatchContext);
}
