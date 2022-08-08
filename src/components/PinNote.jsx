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
    FaThumbtack, 
    FaUserPlus, 
    FaEllipsisV, 
    FaArchive 
} from 'react-icons/fa';

const PinNote = ({ 
    pinNote,
    note,
    setNote,
    buttonStyle,
    textStyle,
    iconStyle,
    listStyle,
    stackStyle,
    toggle,
    pin,
    archive,
    onOpen,
    toggleDelete 
}) => {
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
        </Box>

        <HStack spacing={[2, null, null, null, 5]}>
            <Tooltip label='Remind me'>
                <IconButton onClick={() => toggle(pinNote.id)} sx={iconStyle} icon={<BellIcon />} />
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
                    <PopoverBody 
                        onClick={() => toggleDelete(pinNote.id)} 
                        sx={listStyle} cursor={'pointer'}>Delete note
                    </PopoverBody>
                    <PopoverBody 
                        sx={listStyle} 
                        cursor={'pointer'}>
                            <Text onClick={onOpen}>Add Label</Text>
                    </PopoverBody>
                    <PopoverBody 
                        sx={listStyle} 
                        cursor={'pointer'}>Add Drawing
                    </PopoverBody>
                    <PopoverBody 
                        sx={listStyle} 
                        cursor={'pointer'}>Show Checkboxes
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Tooltip label={pinNote.archive ? 'Unarchive' : 'Archive'}>
                <IconButton onClick={() => archive(pinNote.id)} sx={iconStyle} icon={<FaArchive />} />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default PinNote