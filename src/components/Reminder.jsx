import { useState } from "react";
import { 
    Box,
    Stack, 
    Text,
    Tooltip,
    Popover,
    PopoverTrigger,
    PopoverHeader,
    PopoverContent,
    PopoverBody,
    IconButton,
    HStack,
    Flex, 
    Input,
    PopoverFooter,
    useColorModeValue
} from "@chakra-ui/react/";
import { BellIcon, PlusSquareIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {  
    FaEllipsisV, 
    FaArchive
} from 'react-icons/fa';

const Reminder = ({
    reminderNote,
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
    const bg = useColorModeValue('#fff', '#1a202c');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

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
          bg: 'tomato'
        }
    }

    const stackStyle = {
        border: '1px solid',
        borderRadius: '5px',
        boxShadow: '1px 1px 2px #000',
        padding: '10px',
        overflow: 'hidden'
    }

    const popStyle ={
        justifyContent: 'space-between',
        cursor: 'pointer'
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
                }}>{reminderNote.title}</Text>
                <Tooltip label='remove note'>
                    <IconButton
                        sx={iconStyle} 
                        icon={<SmallCloseIcon />}
                        onClick={() => toggle(reminderNote.id)}
                    />
                </Tooltip>
            </Flex>

            <Box sx={textStyle}>{reminderNote.body}</Box>

            <Flex>
                {
                    reminderNote.label !== '' ? (
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
                            >{reminderNote.label}</Box>
                            <Tooltip hasArrow label='remove label'>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }} onClick={() => deleteLabel(reminderNote.id)}>x</Text>
                            </Tooltip>
                        </Flex> 
                    ) : null
                }

                {
                    reminderNote.reminderText !== '' ? (
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
                            >{reminderNote.reminderText}</Box>
                            <Tooltip label='delete reminder' hasArrow>
                                <Text   sx={{
                                    fontSize: '.7rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }} onClick={() => deleteReminder(reminderNote.id)}>x</Text>
                            </Tooltip>
                        </Flex>
                    ) : null
                }
            </Flex> 
        </Box>

        <HStack spacing={[2, null, null, null, 5]}>
            <Popover hasArrow>
                <PopoverTrigger>
                    <IconButton sx={iconStyle} icon={<BellIcon />} />
                </PopoverTrigger>
                <PopoverContent zIndex={5000} bg={bg} sx={{
                    w: '200px',
                    listStyleType: 'none',
                    border: 'none',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                }}>
                    <PopoverHeader>
                        Pick Date and Time
                    </PopoverHeader>
                    <PopoverBody 
                        sx={listStyle} 
                        cursor={'pointer'}
                    >
                        <Input
                            sx={{
                                fontSize: '.8rem'
                            }} 
                            type={'date'}
                            variant={'flushed'}
                            value={date}
                            onChange={(e) => setDate(e.target.value)} 
                        />
                    </PopoverBody>
                    <PopoverBody
                        sx={listStyle} 
                    >
                        <Popover>
                            <PopoverTrigger>
                                <Input
                                    sx={{
                                        fontSize: '.8rem',
                                        cursor: 'pointer'
                                    }}
                                    value={time} 
                                    type={'text'}
                                    variant={'flushed'}
                                    placeholder={'Add a time'} 
                                />
                            </PopoverTrigger>
                            <PopoverContent bg={bg} sx={{
                                w: '200px',
                                fontSize: '1rem',
                                border: 'none',
                                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                                overflow: 'hidden'
                            }}>
                                <PopoverBody sx={listStyle} onClick={() => setTime('8:00 AM')}>
                                    <Flex sx={popStyle}>
                                        <Text>Morning</Text>
                                        <Text>8:00 AM</Text>
                                    </Flex>
                                </PopoverBody>
                                <PopoverBody sx={listStyle} onClick={() => setTime('1:00 PM')}>
                                    <Flex sx={popStyle}>
                                        <Text>Afternoon</Text>
                                        <Text>1:00 PM</Text>
                                    </Flex>
                                </PopoverBody>
                                <PopoverBody sx={listStyle} onClick={() => setTime('6:00 PM')}>
                                    <Flex sx={popStyle}>
                                        <Text>Evening</Text>
                                        <Text>6:00 PM</Text>
                                    </Flex>
                                </PopoverBody>
                                <PopoverBody sx={listStyle} onClick={() => setTime('8:00 PM')}>
                                    <Flex sx={popStyle}> 
                                        <Text>Night</Text>
                                        <Text>8:00 PM</Text>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </PopoverBody>
                    <PopoverFooter>
                        <button onClick={() => setReminder(`${date} ${time}`)}>Save</button>
                        <button onClick={() => reminderhandler(reminderNote.id)}>Add</button>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger>
                    <IconButton sx={iconStyle} icon={<FaEllipsisV />} />
                </PopoverTrigger>
                <PopoverContent zIndex={3000} sx={{
                    w: '200px',
                    bg: '#1A202C',
                    color: 'white',
                    listStyleType: 'none',
                    overflow: 'hidden'
                }}>
                    <PopoverBody 
                        onClick={() => toggleDelete(reminderNote.id)} 
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
                <IconButton onClick={() => labelhandler(reminderNote.id)} sx={iconStyle} icon={<PlusSquareIcon />} />
            </Tooltip>
            <Tooltip label='Unarchive'>
                <IconButton onClick={() => archive(reminderNote.id)} sx={iconStyle} icon={<FaArchive />} />
            </Tooltip>
        </HStack>
    </Stack>
  )
}

export default Reminder