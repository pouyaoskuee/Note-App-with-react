import {useState} from "react";



function Notes({notess , onDelete ,onChekd}){



    return (
        <div className="notes">
            <div className="notes__sort">
                <ul>
                    <li>all <span>3</span></li>
                    <li>com <span>2</span></li>
                    <li>uncom <span>1</span></li>
                </ul>
            </div>
            <div className="notes__carts">
                {notess.map((note) => (
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
                    <input id={note.id} value={note.id} onChange={onChekd} type="checkbox" />
                </div>
            </div>
            <div className='cart__date'>{new Date(note.created).toLocaleDateString('en-US', option)}</div>
        </div>
    )
}