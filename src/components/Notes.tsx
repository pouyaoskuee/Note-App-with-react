 import Message from "./Message";
import { useNotes, useNotesDispatch} from "../context/NotesContext";
import {note} from "../Types/Note.ts";
import React from "react";
 import {SortNotes} from "../Types/SortNotes.ts";




function Notes({sortNotes}: { sortNotes:SortNotes }) {
    const notess = useNotes()
    // const notess = [1,2]

    // console.log(notess, 'notess')

    if (!notess) return

    let sortedNotes:note[] = []
    if (sortNotes==='oldest')  sortedNotes= [...notess].sort((a,b) =>new Date( a.created).getTime() - new Date(b.created).getTime())
    if (sortNotes==='newest') sortedNotes= [...notess].sort((a,b) =>new Date( b.created).getTime() - new Date(a.created).getTime())
    if (sortNotes==='completed') sortedNotes= [...notess].sort((a,b) => Number(a.completed) - Number(b.completed))





    return (
        <div className="notes">
            <NoteSort notess={notess}/>
            <div className="notes__carts">
                {sortedNotes.map((note) => (
                    <NotesCard note={note} key={note.id} />
                ))}
            </div>
        </div>
    )

}


export default Notes



function NotesCard({note}:{note:note}) {
    const dispatch = useNotesDispatch()

    type option ={
        year:'numeric'| '2-digit',
        month:'numeric'| 'long',
        day:'numeric'| '2-digit',
    }

    const option:option ={
        year:'numeric',
        month:'long',
        day:'numeric',
    }


    return (
        <div className="notes__cart">
            <div className='cart__header'>
                <div className="cart__description">
                    <p className={'ham'}>{note.title}</p>
                    <p>{note.description}</p>
                </div>
                <div className="cart__icon">
                    <span onClick={()=>dispatch({type:'del' , payload:note.id})} >🗑️</span>
                    <input checked={note.completed} id={(note.id).toString()} value={note.id} onChange={e=>{
                        const noteId = Number(e.target.id)
                        dispatch({type:'check' , payload:noteId})
                    }} type="checkbox" />
                </div>
            </div>
            <div className='cart__date'>{new Date(note.created).toLocaleDateString('en-US', option)}</div>
        </div>
    )
}

const NoteSort = ({notess}:{notess:note[]}) => {

    if(!notess)return

    const AllNotes = notess.length
    const CompletedNotes = notess.filter((note) => note.completed)
    const UnCompletedNotes = notess.filter((note) => !note.completed)

    if (!AllNotes){
        return <Message>
           <p>this is a child message ℹ️ </p>
        </Message>
    }


    return (
        <div className="notes__sort">
            <ul>
                <li>all <span>{AllNotes}</span></li>
                <li>completed <span>{CompletedNotes.length}</span></li>
                <li>Uncompleted <span>{UnCompletedNotes.length}</span></li>
            </ul>
        </div>
    )
}