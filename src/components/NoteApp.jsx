import React, {useState} from 'react';
import AddNote from "./AddNote.jsx";
import Notes from "./Notes.jsx";
import {NotesProvider} from "../context/NotesContext.jsx";
import Header from "./Header.jsx";

const NoteApp = () => {

    const [sortBy , setSortBy] = useState('oldest')
    const onSort = (e) => setSortBy(e.target.value)


    return (
        <div>
            <Header sortBy={sortBy} onSort={onSort} />
            <div className="section">
                <AddNote/>
                <Notes sortNotes={sortBy}/>
            </div>
        </div>
    );
};

export default NoteApp;