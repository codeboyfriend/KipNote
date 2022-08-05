import { 
    Box,
    Stack, 
    Text,
    Tooltip,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    IconButton,
    HStack,
    Flex 
} from "@chakra-ui/react/";
import { BellIcon } from "@chakra-ui/icons";
import { 
    FaUserPlus, 
    FaEllipsisV, 
    FaArchive 
} from 'react-icons/fa';

const Archive = ({ 
    archiveNote,
    toggle,
    pin,
    archive,
    note,
    setNote,
    onOpen 
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

    const handleDeleteNote = () => {
        setNote(note.filter((el) => el.id !== archiveNote.id))
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
                }}>{archiveNote.title}</Text>
            </Flex>

            <Box sx={textStyle}>{archiveNote.body}</Box>
        </Box>

        <HStack spacing={[2, null, null, null, 5]}>
            <Tooltip label='Remind me'>
                <IconButton onClick={() => toggle(archiveNote.id)} sx={iconStyle} icon={<BellIcon />} />
            </Tooltip>
            <Tooltip label='Collaborator'>
                <IconButton sx={iconStyle} icon={<FaUserPlus />} />
            </Tooltip>
            <Popover>
                <PopoverTrigger>
                    <IconButton sx={iconStyle} icon={<FaEllipsisV />} />
                </PopoverTrigger>
                <PopoverContent sx={{
                    w: '200px',
                    bg: '#1A202C',
                    color: 'white',
                    listStyleType: 'none',
                    overflow: 'hidden'
                }}>
                    <PopoverBody onClick={handleDeleteNote} sx={listStyle} cursor={'pointer'}>Delete note</PopoverBody>
                    <PopoverBody sx={listStyle} cursor={'pointer'}><Text onClick={onOpen}>Add Label</Text></PopoverBody>
                    <PopoverBody sx={listStyle} cursor={'pointer'}>Add Drawing</PopoverBody>
                    <PopoverBody sx={listStyle} cursor={'pointer'}>Show Checkboxes</PopoverBody>
                </PopoverContent>
            </Popover>
            <Tooltip label='Unarchive'>
                <IconButton onClick={() => archive(archiveNote.id)} sx={iconStyle} icon={<FaArchive />} />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default Archive