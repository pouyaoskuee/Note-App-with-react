import Message from "./Message.jsx";
import {useNotes, useNotesDispatch} from "../context/NotesContext.jsx";


function Notes({sortNotes}) {
    const notess = useNotes()
    // const notess = [1,2]

    // console.log(notess, 'notess')

    if (!notess) return

    let sortedNotes = []
    if (sortNotes==='oldest')  sortedNotes= [...notess].sort((a,b) =>new Date( a.created) - new Date(b.created))
    if (sortNotes==='newest') sortedNotes= [...notess].sort((a,b) =>new Date( b.created) - new Date(a.created))
    if (sortNotes==='completed') sortedNotes= [...notess].sort((a,b) => Number(a.completed) - Number(b.completed))
    console.log(sortedNotes)
    console.log(sortNotes)





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



function NotesCard({note}){
    const dispatch = useNotesDispatch()

    const option ={
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
                    <input checked={note.completed} id={note.id} value={note.id} onChange={e=>{
                        const noteId = Number(e.target.id)
                        dispatch({type:'chek' , payload:noteId})
                    }} type="checkbox" />
                </div>
            </div>
            <div className='cart__date'>{new Date(note.created).toLocaleDateString('en-US', option)}</div>
        </div>
    )
}

const NoteSort = ({notess}) => {

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
                <li>com <span>{CompletedNotes.length}</span></li>
                <li>uncom <span>{UnCompletedNotes.length}</span></li>
            </ul>
        </div>
    )
}