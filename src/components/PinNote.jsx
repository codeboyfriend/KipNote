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
import { 
    BellIcon,
    PlusSquareIcon
} from "@chakra-ui/icons";
import { 
    FaThumbtack, 
    FaEllipsisV, 
    FaArchive 
} from 'react-icons/fa';

const PinNote = ({ 
    pinNote,
    buttonStyle,
    textStyle,
    iconStyle,
    listStyle,
    stackStyle,
    toggle,
    pin,
    archive,
    onOpen,
    toggleDelete,
    labelhandler,
    deleteLabel,
    deleteReminder 
}) => {
    const toast = useToast();
    const bg = useColorModeValue('#fff', '#1a202c');

    const handleToast = () => {
        pinNote.reminder === false ? toast({
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
          description: 'Note archived',
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
                }}>{pinNote.title}</Text>

                <Tooltip label='Unpin Note'>
                    <IconButton
                        onClick={() => {
                            pin(pinNote.id)
                        }} 
                        icon={<FaThumbtack />}
                        sx={buttonStyle}
                        borderRadius={'100%'} 
                    />
                </Tooltip>
            </Flex>

            <Box sx={textStyle}>{pinNote.body}</Box>

            <Flex sx={{
                flexDir: ['column', null, null, 'row'],
                gap: '5px'
            }}>
                {
                    pinNote.label !== '' ? (
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
                            >{pinNote.label}</Box>
                            <Tooltip hasArrow label='remove label'>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }} onClick={() => {
                                    labelToast()
                                    deleteLabel(pinNote.id)
                                }}>x</Text>
                            </Tooltip>
                        </Flex> 
                    ) : null
                }

                {
                    pinNote.reminderText !== '' ? (
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
                            >{pinNote.reminderText}</Box>
                            <Tooltip label='delete reminder' hasArrow>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                }} onClick={() => {
                                    reminderToast()
                                    deleteReminder(pinNote.id)
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
                    toggle(pinNote.id)
                }} sx={iconStyle} icon={<BellIcon />} />
            </Tooltip>
            <Popover>
                <PopoverTrigger>
                    <IconButton sx={iconStyle} icon={<FaEllipsisV />} />
                </PopoverTrigger>
                <PopoverContent sx={{
                    w: '200px',
                    bg: bg,
                    overflow: 'hidden',
                    border: 'none',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)'
                }}>
                    <PopoverBody 
                        onClick={() =>{
                            trashToast()
                            toggleDelete(pinNote.id)
                        }} 
                        sx={listStyle} cursor={'pointer'}>Delete note
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
                        labelhandler(pinNote.id)
                    }} 
                    sx={iconStyle} 
                    icon={<PlusSquareIcon />} 
                />
            </Tooltip>
            <Tooltip label={pinNote.archive ? 'Unarchive' : 'Archive'}>
                <IconButton onClick={() => {
                    archiveToast()
                    archive(pinNote.id)
                }} sx={iconStyle} icon={<FaArchive />} />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default PinNote