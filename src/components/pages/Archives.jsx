import { 
  Box,
  Text,
  IconButton, 
  Flex 
} from "@chakra-ui/react";
import { FaArchive } from 'react-icons/fa'
import Archive from "../Archive";
import Nav from "../utils/Nav";
import Sidebar from "../utils/Sidebar";

const Archives = ({ 
  side, 
  setSide,
  archiveNotes, 
  gridView,
  setGridView,
  toggle,
  pin,
  archive,
  note,
  setNote,
  onOpen 
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
        archiveNotes.length > 0 ? (
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
                {archiveNotes.map(archiveNote => <Archive 
                  key={archiveNote.id} 
                  archiveNote={archiveNote}
                  toggle={toggle}
                  pin={pin}
                  archive={archive}
                  note={note}
                  setNote={setNote} 
                  onOpen={onOpen} 
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
          }} ml={side ? ['90px', null, null, null, '180px'] : ['90px', null, null, '220px', '350px']}>
              <IconButton sx={noStyle} icon={<FaArchive />} />
              <Text sx={{
                  mt: '50px',
                  fontSize: ['1rem', null, null, '1.2rem', '1.5rem']
              }}>Your archived notes appear here</Text>
          </Flex>
        )
      }
    </Box>
  )
}

export default Archives