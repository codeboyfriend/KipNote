import { 
    Box,
    Text,
    IconButton, 
    Flex, 
  } from "@chakra-ui/react";
  import { FaArchive } from 'react-icons/fa'
  import Delete from "../Delete";
  import Nav from "../utils/Nav";
  import Sidebar from "../utils/Sidebar";
  
  const Deletes = ({ 
    side, 
    setSide,
    deleteNotes, 
    gridView,
    setGridView,
    note,
    setNote,
    onOpen,
    toggleDelete
  }) => {
    const noStyle = {
      fontSize: ['7rem', null, '8rem', null,  '10rem'],
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
        cursor: 'auto'
      }   
    }

    const emptyTrash = () => {
      setNote(
        note.filter(each => each.delete === false ? {
          ...each 
        } : null)
      )
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

        <Flex sx={{
                mt: '120px',
                transition: 'margin .2s',
                textAlign: 'center',
                justifyContent: 'center',
                alignItem: 'center'
            }} ml={['80px', null, null, null, 0]}>
          <Text fontSize={['.9rem', null, null, '1rem']}>
            Notes in Trash are deleted after 7 days. 
            <span 
              onClick={() => emptyTrash()} 
              style={{
                color: 'tomato',
                cursor: 'pointer',
                marginLeft: '10px'
              }}>Empty Trash
            </span>
          </Text>
        </Flex>
  
        {
          deleteNotes.length > 0 ? (
            <Box sx={{
                w: ['70%', null, null, '55%', '50%'],
                mt: '50px',
                transition: 'margin .2s',
            }} ml={side ? ['90px', null, null, null, '180px'] : ['90px', null, null, '220px', '350px']}>
              <Box 
                display={gridView && 'grid'}
                gridTemplateColumns={'repeat(2, 1fr)'}
                gap={'10px'}
                >
                  {deleteNotes.map(deleteNote => <Delete 
                    key={deleteNote.id} 
                    deleteNote={deleteNote}
                    note={note}
                    setNote={setNote} 
                    toggleDelete={toggleDelete} 
                  />)}
                </Box>
            </Box>
          ) : (
            <Flex spacing={5} sx={{
                textAlign: 'center',
                flexDir: 'column',
                justifyContent: 'center',
                alignItem: 'center',
                opacity: 0.5,
                gap: '20px',
                mt: '100px',
                transition: 'margin .2s'
            }} ml={side ? ['90px', null, null, null, '180px'] : ['90px', null, null, '220px', '350px']}>
                <IconButton sx={noStyle} icon={<FaArchive />} />
                <Text sx={{
                    mt: '50px',
                    fontSize: ['1rem', null, null, '1.2rem', '1.5rem']
                }}>Your deleted notes appear here</Text>
            </Flex>
          )
        }
      </Box>
    )
  }
  
  export default Deletes