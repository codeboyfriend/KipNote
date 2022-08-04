import { Box } from "@chakra-ui/react";
import NoteInput from "../NoteInput";
import Items from "../Items";
import PinNotes from "../PinNotes";

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
    allNote 
}) => {

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
        padding: '10px',
        overflow: 'hidden'
    }

  return (
    <Box sx={{
        w: ['70%', null, null, '55%', '50%'],
        mt: '120px',
        transition: 'margin .2s',
    }} ml={side ? ['90px', null, null, null, '180px'] : ['90px', null, null, '220px', '350px']}>
        <NoteInput
            note={note} 
            side={side}
            setNote={setNote}
            buttonStyle={buttonStyle}
            iconStyle={iconStyle}
            listStyle={listStyle} 
            stackStyle={stackStyle}
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
            onOpen={onOpen}
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
            onOpen={onOpen} 
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
            onOpen={onOpen} 
        />
    </Box>
  )
}

export default Note