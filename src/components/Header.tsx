import {useNotes} from "../context/NotesContext.tsx";
import {SortNotes} from "../Types/SortNotes.ts";
import React from "react";

type HeaderProps = {
    sortBy: SortNotes ;
    onSort: (value:SortNotes) => void;
}

function Header({ sortBy , onSort}:HeaderProps) {
    const notes = useNotes()


    return (
        <div className="header">
            <h1>Notes App({notes.length})</h1>
            <div className="select">
                <select value={sortBy} onChange={(e)=>{onSort(e.target.value as SortNotes )}}>
                    <option value={'newest'}>newest</option>
                    <option value={'oldest'}>oldest</option>
                    <option value={'completed'}>completed</option>
                </select>
            </div>
        </div>
    )
}


export default Header;