import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Nav from "./components/utils/Nav";
import Sidebar from "./components/utils/Sidebar";
import Note from "./components/pages/Note";
import Archives from "./components/pages/Archives";
import Label from "./components/Label";
import TodoPage from "./components/pages/TodoPage";

function App() {
  const [side, setSide] = useState(true);
  const [gridView, setGridView] =  useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('Take Note...');
  const [pinNotes, setPinNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [modalInput, setModalInput] = useState('');
  const [modalContent, setModalContent] = useState(
    () => JSON.parse(localStorage.getItem('modalContent')) || []
  );
  const [todoInput, setTodoInput] = useState('');
  const [allNote, setAllNote] = useState([]);
  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    localStorage.setItem('modalContent', JSON.stringify(modalContent))
  }, [modalContent])

  const [note, setNote] = useState([
    {
      id: 1,
      title: 'Firebase',
      body: 'I started learning firebase three days ago',
      reminder: true,
      pin: true,
      archive: true
    },
    {
      id: 2,
      title: 'Chakra UI',
      body: 'It is really an amazing CSS framework',
      reminder: false,
      pin: false,
      archive: false
    },
    {
      id: 3,
      title: 'Javascript',
      body: 'It is one of the top programming language',
      reminder: false,
      pin: false,
      archive: false
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

  const handlePinNote = () => {
    setPinNotes(
      note.filter(each => each.pin === true && each.archive === false ? {
        ...each
      } : null)
    )
  }

  const handleArchive = () => {
    setArchiveNotes(
      note.filter(each => each.archive === true ? {
        ...each
      } : null)
    )
  }

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: 
        !todo.completed} : todo
      )
    )
  }

  const handleAllNote = () => {
    setAllNote(
      note.filter(each => each.archive === false && each.pin === false ? {
        ...each 
      } : null)
    )
  }

  useEffect(() => {
    handlePinNote();
    handleArchive();
    handleAllNote();
  }, [note])

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Nav 
          side={side} 
          setSide={setSide}
          gridView={gridView}
          setGridView={setGridView}
        />
        <Sidebar 
          side={side} 
          setSide={setSide} 
          onOpen={onOpen}  
        />

        <Label 
          isOpen={isOpen} 
          onClose={onClose}
          modalInput={modalInput}
          setModalInput={setModalInput}
          modalContent={modalContent}
          setModalContent={setModalContent} 
        />
        
        <Routes>
          <Route path="/" element={<Note
            note={note}
            setNote={setNote} 
            side={side}
            gridView={gridView}
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
            toggle={toggleReminder}
            pin={togglePin}
            archive={toggleArchive}
            pinNotes={pinNotes}
            onOpen={onOpen} 
            allNote = {allNote}
          />} />

          <Route path="/todos" element={<TodoPage
            todos={todos}
            setTodos={setTodos}
            side={side}
            toggleCompleted={toggleCompleted}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
          />} />

          <Route path="/archive" element={<Archives
            note={note}
            setNote={setNote} 
            side={side}
            archiveNotes={archiveNotes}
            gridView={gridView}
            toggle={toggleReminder}
            pin={togglePin}
            archive={toggleArchive}
            onOpen={onOpen}
          />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;