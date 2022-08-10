import { 
  Box,
  Text,
  IconButton, 
  Flex, 
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import Reminder from "../Reminder";
import Nav from "../utils/Nav";
import Sidebar from "../utils/Sidebar";

const Reminders = ({
  side, 
  setSide,
  reminderNotes, 
  gridView,
  setGridView,
  toggle,
  archive,
  onOpen,
  toggleDelete,
  labelhandler,
  setReminder,
  reminderhandler,
  deleteReminder,
  deleteLabel
}) => {
  const noStyle = {
    fontSize: ['7rem', null, '8rem', null,  '10rem'],
    bg: 'transparent',
    _hover: {
      bg: 'transparent',
      cursor: 'auto'
    }   
  }
  
  return (
    <Box>
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

      {
        reminderNotes.length > 0 ? (
          <Box sx={{
              w: ['70%', null, null, '55%', '50%'],
              mt: '120px',
              transition: 'margin .2s',
          }} ml={side ? ['90px', null, null, null, '180px'] : ['90px', null, null, '220px', '350px']}>
            <Box 
              display={gridView && 'grid'}
              gridTemplateColumns={'repeat(2, 1fr)'}
              gap={'10px'}
              >
                {reminderNotes.map(reminderNote => <Reminder 
                  key={reminderNote.id} 
                  reminderNote={reminderNote}
                  toggle={toggle}
                  archive={archive}
                  onOpen={onOpen}
                  toggleDelete={toggleDelete}
                  labelhandler={labelhandler}
                  setReminder={setReminder}
                  reminderhandler={reminderhandler}
                  deleteReminder={deleteReminder}
                  deleteLabel={deleteLabel} 
                />)}
              </Box>
          </Box>
        ) : (
          <Flex spacing={5} sx={{
              h: '100vh',
              textAlign: 'center',
              flexDir: 'column',
              justifyContent: 'center',
              alignItem: 'center',
              opacity: 0.5,
              gap: '20px',
              transition: 'margin .2s'
          }} ml={['100px', null, null, null, '10px']}>
              <IconButton sx={noStyle} icon={<BellIcon />} />
              <Text sx={{
                  mt: '50px',
                  fontSize: ['1rem', null, null, '1.2rem', '1.5rem']
              }}>Notes with upcoming reminders appear here</Text>
          </Flex>
        )
      }
    </Box>
  )
}

export default Reminders