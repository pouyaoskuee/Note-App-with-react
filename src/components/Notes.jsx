

function Notes({notess , onDelete ,onChekd , sortNotes}) {

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
                    <NotesCard note={note} key={note.id} onDelete={onDelete} onChekd={onChekd} />
                ))}
            </div>
        </div>
    )

}


export default Notes



function NotesCard({note , onDelete , onChekd}){
    const option ={
        year:'numeric',
        month:'long',
        day:'numeric',
    }


    return (
        <div className="notes__cart">
            <div className='cart__header'>
                <div className="cart__description">
                    <p>{note.title}</p>
                    <p>{note.description}</p>
                </div>
                <div className="cart__icon">
                    <span onClick={()=>onDelete(note.id)} >🗑️</span>
                    <input checked={note.completed} id={note.id} value={note.id} onChange={onChekd} type="checkbox" />
                </div>
            </div>
            <div className='cart__date'>{new Date(note.created).toLocaleDateString('en-US', option)}</div>
        </div>
    )
}

const NoteSort = ({notess}) => {

    const AllNotes = notess.length
    const CompletedNotes = notess.filter((note) => note.completed)
    const UnCompletedNotes = notess.filter((note) => !note.completed)

    if (!AllNotes) return <h2>you dont have any notes</h2>

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