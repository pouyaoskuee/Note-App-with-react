import {expect, test} from "vitest";
import {fireEvent, render, screen} from "/test-utils.jsx";
import NoteApp from "../NoteApp.jsx";
import {wrapperSymbol} from "jsdom/lib/generated/idl/utils.js";
import {NotesProvider} from "../../context/NotesContext.jsx";
import AppProvider from "../../Providers/AppProvider.jsx";

function addNote(notes){
    const inputTitle= screen.getByPlaceholderText(/Add note title.../)
    const inputDes= screen.getByPlaceholderText(/Add note description.../)
    const button= screen.getByRole('button', { name: /Add new note/i });

    notes.forEach((notes)=>{
        fireEvent.change(inputTitle, { target: { value: notes.title } });
        fireEvent.change(inputDes, { target: { value: notes.description } });
        fireEvent.click(button)
    })

}


// test('input shulde be empty', () => {
//     render(<NoteApp sortBy={'oldest'}/>)
//     const inputTitle= screen.getByPlaceholderText(/Add note title.../)
//     const inputDes= screen.getByPlaceholderText(/Add note description.../)
//
//     fireEvent.change(inputTitle, { target: { value: "test title" } });
//     fireEvent.change(inputDes, { target: { value: "test title" } });
//      const button= screen.getByRole('button', { name: /Add new note/i });
//      fireEvent.click(button);
//      expect(inputTitle.value).toBe('');
//
// })

test('input shulde be empty', ()=>{
    render(<NoteApp sortBy={'oldest'}/> )
    addNote([{title:'new title',description:'new description'}])
    const inputTitle= screen.getByPlaceholderText(/Add note title.../)
    expect(inputTitle.value).toBe('')

})
test('how match note', ()=>{
    render(<NoteApp sortBy={'oldest'}/>, {wrapper:AppProvider});
    addNote([{title:'new title',description:'new description'},{title:'new title',description:'new description'},{title:'new title',description:'new description'}])

    const notes= screen.getAllByText(/new title/i)
    expect(notes.length).toBeGreaterThan(2)
})

test('note have class', ()=>{
    render(<NoteApp sortBy={'oldest'}/>)
    addNote([{title:'new title',description:'new description'}])

    const notes= screen.getByText(/new title/i)
    expect(notes).toHaveClass(/ham/i)
})

test('completed after click', ()=>{
    render(<NoteApp sortBy={'oldest'}/>)
    addNote([{title:'new title',description:'new description'}])
    const check = screen.getByText('🗑')
    fireEvent.click(check)
    const notes= screen.getByText(/new title/i )
    expect(notes).toHaveClass(/ham/i)
})