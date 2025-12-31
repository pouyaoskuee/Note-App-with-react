// import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import AddNote from './components/AddNote.jsx'
import Notes from './components/Notes.jsx'
import {useState} from "react";

function App() {
    const [notes, setNotes] = useState([])
    const [sortBy , setSortBy] = useState('oldest')

    const onSort = (e) => setSortBy(e.target.value)

    const handelAddNote = (newNote) => {

        setNotes((prevNotes)=>[...prevNotes, newNote])
    }

    const handleDeleteNote= (id)=>{
        // const filteredNotes = notes.filter(note => note.id !== id)
        // setNotes(filteredNotes)
        setNotes((filteredNotes) => filteredNotes.filter((n) => n.id !== id));
    }

    const handleCheckNote=(e)=>{
        // const checkNote = notes.find(note=>note.id === id)
        // checkNote.completed = !checkNote.completed

        const noteId = Number(e.target.id)
        // const newNotes= notes.map((note=>{
        //     return note.id === noteId? {...note, completed:!note.completed}:note
        // }))
        // setNotes(newNotes)

        setNotes((prevState)=>(
            prevState.map((note)=>note.id === noteId?{...note , completed: !note.completed}:note)
        ))



    }

  return (
      <>
          <Header notes={notes} sortBy={sortBy} onSort={onSort} />
          <div className="section">
              <AddNote onAddNote={handelAddNote}/>
              <Notes notess={notes} onDelete={handleDeleteNote} onChekd={handleCheckNote} sortNotes={sortBy}/>
          </div>
      </>



  )
}

export default App


//<Notes notess={notes}/> میتونی اینجور معنیش کنی نوتس یه فانکشن هست که نوتسس رو قراره دریافت کنه---حالا نوتسس یدونه ارگمان نوتس رو بهش پاس میده--یعنی خلاصه اینکه نوتس راگمانش نوتسس هست و ارگمان اون نوت هست
//function Notes({notess}) حالا اینور نوتس بالاخره ارگمان رو دریافت کرده است حالا میتونی نوتسس رو توی کدات استفاده کنی
// پس نتیحه میگیرمی نوتسس داخل کامپوننت نوتس همون نوته که توش اری اف ابجکت داره توی کامپوننت اپ