import { Box, Text } from "@chakra-ui/react";
import PinNote from "./PinNote";

const PinNotes = ({
  note,
  setNote, 
  pinNotes,
  buttonStyle,
  textStyle,
  iconStyle,
  listStyle,
  stackStyle,
  gridView,
  toggle,
  pin,
  archive,
  onOpen,
  toggleDelete,
  labelhandler,
  deleteLabel,
  deleteReminder 
}) => {
  return pinNotes.length > 0 ? (
    <Box mb={'50px'}>
      <Text opacity={0.8}>PINNED</Text>

      <Box 
        display={gridView && 'grid'}
        gridTemplateColumns={'repeat(2, 1fr)'}
        gap={'10px'}
      >
        {pinNotes.map(pinNote => <PinNote key={pinNote.id} 
          pinNote={pinNote}
          note={note}
          setNote={setNote}
          buttonStyle={buttonStyle}
          textStyle={textStyle}
          iconStyle={iconStyle}
          listStyle={listStyle} 
          stackStyle={stackStyle}
          toggle={toggle}
          pin={pin}
          archive={archive}
          onOpen={onOpen}
          toggleDelete={toggleDelete}
          labelhandler={labelhandler} 
          deleteLabel={deleteLabel}
          deleteReminder={deleteReminder}
        />)}
      </Box>
    </Box>
  ) : ''
}

export default PinNotes