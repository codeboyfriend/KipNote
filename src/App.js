import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Note from "./components/pages/Note";
import Archives from "./components/pages/Archives";
import Deletes from "./components/pages/Deletes";
import Label from "./components/Label";
import TodoPage from "./components/pages/TodoPage";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ForgotPass from "./components/pages/ForgotPass";
import Update from "./components/pages/Update";
import Help from "./components/pages/Help";

function App() {
  const [side, setSide] = useState(true);
  const [gridView, setGridView] =  useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('Take Note...');
  const [pinNotes, setPinNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);
  const [modalInput, setModalInput] = useState('');
  const [modalContent, setModalContent] = useState(
    () => JSON.parse(localStorage.getItem('modalContent')) || []
  );
  const [todoInput, setTodoInput] = useState('');
  const [allNote, setAllNote] = useState([]);
  const [labelInput, setLabelInput] = useState('');
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    localStorage.setItem('modalContent', JSON.stringify(modalContent))
  }, [modalContent]);

  const [note, setNote] = useState([
    {
      id: 1,
      title: 'Firebase',
      body: 'I started learning firebase three days ago',
      reminder: true,
      pin: true,
      archive: true,
      delete: false,
      label: 'testing'
    },
    {
      id: 2,
      title: 'Chakra UI',
      body: 'It is really an amazing CSS framework',
      reminder: false,
      pin: false,
      archive: false,
      delete: false,
      label: 'testing'
    },
    {
      id: 3,
      title: 'Javascript',
      body: 'It is one of the top programming language',
      reminder: false,
      pin: false,
      archive: false,
      delete: false,
      label: 'testing'
    }
  ]);

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toggleReminder = (id) => {
    setNote(
      note.map((each) => 
        each.id === id ? {...each, reminder: 
        !each.reminder} : each 
      )
    )
  }

  const togglePin = (id) => {
    setNote(
      note.map((each) => 
        each.id === id ? {...each, pin: 
        !each.pin} : each
      )
    )
  }

  const toggleArchive = (id) => {
    setNote(
      note.map((each) => 
        each.id === id ? {...each, archive: 
        !each.archive} : each
      )
    )
  }

  const toggleDelete = (id) => {
    setNote(
      note.map((each) => 
        each.id === id ? {...each, delete: 
        !each.delete} : each
      )
    )
  }

  const labelhandler = (id) => {
    setNote(
      note.map((each) => 
      each.id === id ? {...each, label:
      labelInput} : each
      )
    )
  }

  const handleLabel = (id) => {
    setLabelInput(id.text)
  }

  const handlePinNote = () => {
    setPinNotes(
      note.filter(each => each.pin === true && each.archive === false && each.delete === false ? {
        ...each
      } : null)
    )
  }

  const handleArchive = () => {
    setArchiveNotes(
      note.filter(each => each.archive === true && each.delete === false ? {
        ...each
      } : null)
    )
  }

  const handleDeleteNote = () => {
    setDeleteNotes(
      note.filter(each => each.delete === true ? {
        ...each
      } : null)
    )
  }

  setInterval(() => {
    deleteNotes.shift()
  }, 604800000);

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: 
        !todo.completed} : todo
      )
    )
  }

  const filterNote = () => {
    setAllNote(
      note.filter(each => each.title === searchInput ? {
        ...each
      } : null)
    )
  }

  const handleAllNote = () => {
    setAllNote(
      note.filter(each => each.archive === false && each.pin === false && each.delete === false ? {
        ...each 
      } : null)
    )
  }

  useEffect(() => {
    handlePinNote();
    handleArchive();
    handleDeleteNote();
    handleAllNote();
  }, [note])
 
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Label 
          isOpen={isOpen} 
          onClose={onClose}
          modalInput={modalInput}
          setModalInput={setModalInput}
          modalContent={modalContent}
          setModalContent={setModalContent}
          handleLabel={handleLabel}
          labelhandler={labelhandler}
        />
        
        <Routes>
          <Route path="/home" element={<Note
            note={note}
            setNote={setNote} 
            side={side}
            setSide={setSide}
            gridView={gridView}
            setGridView={setGridView}
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            toggle={toggleReminder}
            pin={togglePin}
            archive={toggleArchive}
            toggleDelete={toggleDelete}
            pinNotes={pinNotes}
            onOpen={onOpen} 
            allNote = {allNote}
            labelInput={labelInput}
            setLabelInput={setLabelInput}
            labelhandler={labelhandler}
            filterNote={filterNote}
          />} />

          <Route path="/todos" element={<TodoPage
            todos={todos}
            setTodos={setTodos}
            side={side}
            setSide={setSide}
            gridView={gridView}
            setGridView={setGridView}
            toggleCompleted={toggleCompleted}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            onOpen={onOpen}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            filterNote={filterNote}
          />} />

          <Route path="/archive" element={<Archives
            note={note}
            setNote={setNote} 
            side={side}
            setSide={setSide}
            archiveNotes={archiveNotes}
            gridView={gridView}
            setGridView={setGridView}
            toggle={toggleReminder}
            pin={togglePin}
            archive={toggleArchive}
            toggleDelete={toggleDelete}
            onOpen={onOpen}
          />} />

          <Route path='/trash' element={<Deletes 
            note={note}
            setNote={setNote} 
            side={side}
            setSide={setSide}
            deleteNotes={deleteNotes}
            gridView={gridView}
            setGridView={setGridView}
            toggleDelete={toggleDelete}
            onOpen={onOpen}
          />} 
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/update" element={<Update />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;