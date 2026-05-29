import React, {useState} from 'react';
import AddNote from "./AddNote.js";
import Notes from "./Notes.js";
import Header from "./Header";
import {SortNotes} from "../Types/SortNotes.ts";

const NoteApp = () => {

    const [sortBy , setSortBy] = useState<SortNotes>('oldest')
    const onSort = (value:SortNotes) => setSortBy(value)


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