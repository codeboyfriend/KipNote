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
    FaEllipsisV, 
    FaArchive 
} from 'react-icons/fa';

const Item = ({ 
    each,
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
                }}>{each.title}</Text>

                <Tooltip label={each.pin ? 'Unpin Note' : 'Pin Note'}>
                    <IconButton
                        onClick={() => {
                            pin(each.id)
                        }} 
                        icon={<FaThumbtack />}
                        sx={buttonStyle}
                        borderRadius={'100%'} 
                    />
                </Tooltip>
            </Flex>

            <Box sx={textStyle}>{each.body}</Box>
            {
                each.label !== '' ? (
                    <Flex sx={{
                        maxW: '60px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid',
                        borderRadius: '8px',
                        m: '0 10px',
                        p: '0 5px'
                    }}>
                        <Box 
                            fontSize={'.7rem'}
                            fontWeight={'500'}
                        >{each.label}</Box>
                        <Text onClick={() => each.pin = ''}   sx={{
                            fontSize: '.7rem',
                            fontWeight: '500',
                            cursor: 'pointer'
                        }}>x</Text>
                    </Flex> 
                ) : null
            }
        </Box>

        <HStack spacing={[2, null, null, null, 5]}>
            <Tooltip label='Remind me'>
                <IconButton onClick={() => toggle(each.id)} sx={iconStyle} icon={<BellIcon />} />
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
                        onClick={() => toggleDelete(each.id)} 
                        sx={listStyle} 
                        cursor={'pointer'}>Delete note
                    </PopoverBody>
                    <PopoverBody 
                        sx={listStyle} 
                        cursor={'pointer'}>
                        <Text onClick={onOpen}>Add Label</Text>
                    </PopoverBody>
                    <PopoverBody sx={listStyle} cursor={'pointer'}>Add Drawing</PopoverBody>
                    <PopoverBody sx={listStyle} cursor={'pointer'}>Show Checkboxes</PopoverBody>
                </PopoverContent>
            </Popover>
            <Tooltip label={each.archive ? 'Unarchive' : 'Archive'}>
                <IconButton onClick={() => archive(each.id)} sx={iconStyle} icon={<FaArchive />} />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default Item