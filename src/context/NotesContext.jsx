import {createContext, useCallback, useContext, useReducer} from "react";


const NotesContext = createContext()
const NotesDispatchContext= createContext()



export function NotesProvider({ children }) {
    const [notes , dispatch] = useReducer(countReducer , [])
    console.log(notes)


    function countReducer(state, {type ,payload}) {
        switch(type){
            case 'add':
                return [...state , payload];
            case 'del':
                return state.filter((s) => s.id !== payload)
            case 'chek':
                return state.map((s) => s.id === payload?{...s , completed: !s.completed}:s)
            default:
                throw new Error(`Not found ${type}`)
        }
    }


    return (
      <NotesContext.Provider value={notes}>
          <NotesDispatchContext value={dispatch}>
              {children}
          </NotesDispatchContext>
      </NotesContext.Provider>
    )

}

export const useNotes= ()=> useContext(NotesContext)
export const useNotesDispatch=()=> useContext(NotesDispatchContext)
