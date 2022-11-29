import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotesList from "./components/NotesList";
import { useState, useEffect } from 'react'
import Search from './components/Search'
import Header from './components/Header'
import { nanoid } from 'nanoid'
function App() {
  const [text, settext] = useState('');
  const [searchText, setsearchText] = useState('');
  const [todoupdate, settodoupdate] = useState({})
  const [notes, setnotes] = useState([{
    id: nanoid(),
    text: 'learn react js with in 4 months',
    date: '12/3/2022',
    complete: false
  }]);
  const [addnoteText, setaddnotetext] = useState('');
  const Addnote = (text) => {
    if (text.trim() === '') {
      toast.error('please fill the form');
      return;
    } else if (text.trim().length < 5) {
      toast.warning('please enter vallid task');
      return;
    } else if (todoupdate && todoupdate.id) {
      const filtered = notes.filter((note) => (note.id !== todoupdate.id));
      filtered.unshift({
        id: todoupdate.id,
        text: addnoteText,
        date: todoupdate.date,
        complete: todoupdate.complete
      });
      setnotes(filtered);
      settodoupdate({})
      setaddnotetext('');
      toast.success("task updated successfully");
      console.log(filtered);
    } else {
      const grapingDate = new Date();
      const newnote = {
        id: nanoid(),
        text: text,
        date: grapingDate.toLocaleDateString(),
        complete: false
      }
      const newnotes = [...notes, newnote];
      setnotes(newnotes);
      setaddnotetext('');
      toast.success("task added sucessfully");
    }
  }
  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note) => (note.id) !== id);
    setnotes(filteredNotes);
    settodoupdate({});
    setaddnotetext("")
    return toast.success('task deleted successfully');
  }
  const complete = (task) => {
    const filteredtodo = notes.filter((note) => (note.id !== task.id));
    filteredtodo.push({
      id: task.id,
      text: task.text,
      date: task.date,
      complete: true,
    })
    setnotes(filteredtodo);
    toast.success("task completed successfully")
  }
  const update = (task) => {
    setaddnotetext(task.text)
    settodoupdate(task);

  }
  return (
    <>
      <div className="container">
        <Header />
        <ToastContainer />
        <Search searchText={setsearchText} />
        <NotesList update={update} complete={complete} searchText={searchText} notes={notes} handleDelete={handleDelete} setaddnotetext={setaddnotetext} text={text} addnoteText={addnoteText} Addnote={Addnote} />
      </div>
    </>
  );
}

export default App;
