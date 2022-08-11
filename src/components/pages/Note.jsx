import { Box } from "@chakra-ui/react";
import NoteInput from "../NoteInput";
import Items from "../Items";
import PinNotes from "../PinNotes";
import Nav from "../utils/Nav";
import Sidebar from "../utils/Sidebar";
import Search from "../utils/Search";
import { app } from "../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Note = ({
    note,
    setNote, 
    side,
    gridView,
    title,
    setTitle,
    body,
    setBody,
    toggle,
    pin,
    archive,
    pinNotes,
    onOpen,
    allNote,
    setSide,
    setGridView,
    labelInput,
    setLabelInput,
    toggleDelete,
    labelhandler,
    searchInput,
    setSearchInput,
    filterNote,
    filterSearch,
    showModal,
    setShowModal,
    reminder,
    setReminder,
    deleteLabel,
    deleteReminder,
    setFilterSearch 
}) => {
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
            } else {
              console.log('an error occur')
            }
        });
    }, [])

    const buttonStyle = {
        bg: 'transparent',
        border: 'none'
    }
    
    const textStyle ={
        minH: '30px',
        padding: '10px',
        outline: 'none',
        fontSize: '.9rem'
    }
    
    const iconStyle ={
        bg: 'transparent',
        border: 'none',
        padding: 0,
        borderRadius: '100%'
    }
    
    const listStyle = {
        p: '5px 10px',
    
        _hover: {
          bg: 'RGBA(255, 255, 255, 0.24)'
        }
    }

    const stackStyle = {
        border: '1px solid',
        borderRadius: '5px',
        boxShadow: '1px 1px 2px #000',
        padding: '10px'
    }

  return (
    <Box>
        <Nav 
            side={side} 
            setSide={setSide}
            gridView={gridView}
            setGridView={setGridView}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            filterNote={filterNote}
            showModal={showModal}
            setShowModal={setShowModal}
            setFilterSearch={setFilterSearch}
        />

        <Sidebar 
          side={side} 
          setSide={setSide} 
          onOpen={onOpen}  
        />

        <Box sx={{
            w: ['70%', null, null, '55%', '50%'],
            mt: '120px',
            transition: 'margin .2s'
        }} ml={side ? ['90px', null, null, null, '180px'] : ['90px', null, null, '220px', '350px']}>
            <NoteInput
                note={note} 
                setNote={setNote}
                buttonStyle={buttonStyle}
                stackStyle={stackStyle}
                title={title}
                body={body}
                setTitle={setTitle}
                setBody={setBody}
            />

            <PinNotes
                note={note}
                setNote={setNote}
                pinNotes={pinNotes}
                side={side}
                buttonStyle={buttonStyle}
                textStyle={textStyle}
                iconStyle={iconStyle}
                listStyle={listStyle} 
                stackStyle={stackStyle}
                gridView={gridView} 
                toggle={toggle}
                pin={pin}
                archive={archive}
                toggleDelete={toggleDelete}
                onOpen={onOpen}
                labelInput={labelInput}
                setLabelInput={setLabelInput}
                labelhandler={labelhandler}
                reminder={reminder}
                setReminder={setReminder}
                deleteLabel={deleteLabel}
                deleteReminder={deleteReminder} 
            />

            <Search
                filterSearch={filterSearch}
                buttonStyle={buttonStyle}
                textStyle={textStyle}
                stackStyle={stackStyle}
                toggle={toggle}
                pin={pin}
                archive={archive}
                toggleDelete={toggleDelete}
                iconStyle={iconStyle}
                listStyle={listStyle}
                onOpen={onOpen}
                showModal={showModal}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                filterNote={filterNote}
                setFilterSearch={setFilterSearch}
            />

            <Items 
                allNote={allNote}
                setNote={setNote}
                side={side}
                buttonStyle={buttonStyle}
                textStyle={textStyle}
                iconStyle={iconStyle}
                listStyle={listStyle} 
                stackStyle={stackStyle}
                gridView={gridView} 
                toggle={toggle}
                pin={pin}
                archive={archive}
                toggleDelete={toggleDelete}
                onOpen={onOpen} 
                labelhandler={labelhandler}
                reminder={reminder}
                setReminder={setReminder}
                deleteLabel={deleteLabel}
                deleteReminder={deleteReminder}
            />
        </Box>
    </Box>
  )
}

export default Note