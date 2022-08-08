import { 
    Box,
    Stack, 
    Text,
    Tooltip,
    IconButton,
    HStack,
    Flex 
} from "@chakra-ui/react/";
import { MdRestoreFromTrash } from 'react-icons/md';
import { TbTrashX } from 'react-icons/tb';

const Delete = ({ 
    deleteNote,
    toggleDelete,
    note,
    setNote
}) => {    
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

    const stackStyle = {
        border: '1px solid',
        borderRadius: '5px',
        boxShadow: '1px 1px 2px #000',
        padding: '10px',
        overflow: 'hidden'
    }

    const handleDeleteNote = (id) => {
        setNote(note.filter(deleteNote => deleteNote.id !== id))
        console.log('delete', id)
    }

  return (
    <Stack 
        sx={stackStyle}
        m={'10px 0'}
    >
        <Box>
            <Flex sx={{
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text sx={{
                    pl: '10px'
                }}>{deleteNote.title}</Text>
            </Flex>

            <Box sx={textStyle}>{deleteNote.body}</Box>
        </Box>

        <HStack spacing={[2, null, null, null, 5]}>
            <Tooltip label='Delete Permanently'>
                <IconButton 
                    onClick={() => handleDeleteNote(deleteNote.id)}
                    sx={iconStyle} 
                    icon={<TbTrashX />} 
                />
            </Tooltip>
            <Tooltip label='Restore'>
                <IconButton 
                    onClick={() => toggleDelete(deleteNote.id)} 
                    sx={iconStyle} 
                    icon={<MdRestoreFromTrash />} 
                />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default Delete