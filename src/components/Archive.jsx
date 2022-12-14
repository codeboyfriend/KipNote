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
    Flex,
    useToast,
    useColorModeValue 
} from "@chakra-ui/react/";
import { BellIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {  
    FaEllipsisV, 
    FaArchive,
} from 'react-icons/fa';

const Archive = ({ 
    archiveNote,
    toggle,
    archive,
    onOpen,
    toggleDelete,
    deleteLabel,
    deleteReminder,
    labelhandler 
}) => { 
    const toast = useToast();
    const bg = useColorModeValue('#fff', '#1a202c');

    const handleToast = () => {
        archiveNote.reminder === false ? toast({
          title: '',
          description: 'Added to reminders',
          status: 'success',
          duration: '2000',
          position: 'bottom-left'
        }) : toast({
            title: '',
            description: 'Removed from reminders',
            status: 'success',
            duration: '2000',
            position: 'bottom-left'
          })  
    }

    const labelToast = () => {
        toast({
          title: '',
          description: 'Label removed',
          status: 'success',
          duration: '2000',
          position: 'bottom-left'
        }) 
    }

    const reminderToast = () => {
        toast({
          title: '',
          description: 'Reminder deleted',
          status: 'success',
          duration: '2000',
          position: 'bottom-left'
        }) 
    }

    const archiveToast = () => {
        toast({
          title: '',
          description: 'Note unarchived',
          status: 'success',
          duration: '2000',
          position: 'bottom-left'
        }) 
    }

    const trashToast = () => {
        toast({
          title: '',
          description: 'Note trashed',
          status: 'success',
          duration: '2000',
          position: 'bottom-left'
        }) 
    }

    const addLabel = () => {
        toast({
          title: '',
          description: 'Label added',
          status: 'success',
          duration: '2000',
          position: 'bottom-left'
        }) 
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
          bg: 'orange'
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

            <Flex sx={{
                flexDir: ['column', null, null, 'row'],
                gap: '5px'
            }}>
                {
                    archiveNote.label !== '' ? (
                        <Flex sx={{
                            minW: '60px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            bg: '#f0f0f0',
                            color: '#000',
                            borderRadius: '10px',
                            m: '0 10px',
                            p: '4px 7px'
                        }}>
                            <Box 
                                fontSize={'.7rem'}
                                fontWeight={'500'}
                                marginRight={'5px'}
                            >{archiveNote.label}</Box>
                            <Tooltip hasArrow label='remove label'>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }} onClick={() => {
                                    labelToast()
                                    deleteLabel(archiveNote.id)
                                }}>x</Text>
                            </Tooltip>
                        </Flex> 
                    ) : null
                }

                {
                    archiveNote.reminderText !== '' ? (
                        <Flex sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            bg: '#f0f0f0',
                            color: '#000',
                            borderRadius: '10px',
                            m: '0 10px',
                            p: '4px 7px'
                        }}>
                            <Box 
                                fontSize={'.7rem'}
                                fontWeight={'500'}
                                marginRight={'5px'}
                            >{archiveNote.reminderText}</Box>
                            <Tooltip label='delete reminder' hasArrow>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                }} onClick={() => {
                                    reminderToast()
                                    deleteReminder(archiveNote.id)
                                }}>x</Text>
                            </Tooltip>
                        </Flex>
                    ) : null
                }
            </Flex>
        </Box>

        <HStack spacing={[2, null, null, null, 5]}>
            <Tooltip label='Remind me'>
                <IconButton onClick={() => {
                    handleToast()
                    toggle(archiveNote.id)
                }} sx={iconStyle} icon={<BellIcon />} />
            </Tooltip>
            <Popover>
                <PopoverTrigger>
                    <IconButton sx={iconStyle} icon={<FaEllipsisV />} />
                </PopoverTrigger>
                <PopoverContent zIndex={3000} bg={bg} sx={{
                    w: '200px',
                    overflow: 'hidden',
                    border: 'none',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)'
                }}>
                    <PopoverBody 
                        onClick={() => {
                            trashToast()
                            toggleDelete(archiveNote.id)
                        }} 
                        sx={listStyle} 
                        cursor={'pointer'}>Delete note
                    </PopoverBody>
                    <PopoverBody 
                        sx={listStyle} 
                        cursor={'pointer'}>
                            <Text onClick={onOpen}>Select Label</Text>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Tooltip label={'Add Selected label'}>
                <IconButton 
                onClick={() => {
                    addLabel()
                    labelhandler(archiveNote.id)
                }} 
                sx={iconStyle} 
                icon={<PlusSquareIcon />} 
            />
            </Tooltip>
            <Tooltip label='Unarchive'>
                <IconButton onClick={() => {
                    archiveToast()
                    archive(archiveNote.id)
                }} sx={iconStyle} icon={<FaArchive />} />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default Archive