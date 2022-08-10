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
import { BellIcon, PlusSquareIcon } from "@chakra-ui/icons";
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
    toggleDelete,
    labelhandler,
    deleteLabel,
    deleteReminder
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

            <Flex>
                {
                    each.label !== '' ? (
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
                            >{each.label}</Box>
                            <Tooltip hasArrow label='remove label'>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }} onClick={() => deleteLabel(each.id)}>x</Text>
                            </Tooltip>
                        </Flex> 
                    ) : null
                }

                {
                    each.reminderText !== '' ? (
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
                            >{each.reminderText}</Box>
                            <Tooltip label='delete reminder' hasArrow>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                }} onClick={() => deleteReminder(each.id)}>x</Text>
                            </Tooltip>
                        </Flex>
                    ) : null
                }
            </Flex> 
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
                    overflow: 'hidden',
                    zIndex: '1000'
                }}>
                    <PopoverBody 
                        onClick={() => toggleDelete(each.id)} 
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
                <IconButton onClick={() => labelhandler(each.id)} sx={iconStyle} icon={<PlusSquareIcon />} />
            </Tooltip>
            <Tooltip label={each.archive ? 'Unarchive' : 'Archive'}>
                <IconButton onClick={() => archive(each.id)} sx={iconStyle} icon={<FaArchive />} />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default Item