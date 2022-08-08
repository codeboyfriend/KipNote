import { 
    Box, 
    Stack, 
    Input,
    Tooltip,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    IconButton,
    HStack,
    Flex,
    useToast,
    Text,
    Icon
} from "@chakra-ui/react/";
import { BellIcon, CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { 
    FaUserPlus, 
    FaEllipsisV, 
    FaArchive 
} from 'react-icons/fa';
import React, { useRef } from "react";

const NoteInput = ({
    buttonStyle,
    iconStyle,
    listStyle,
    stackStyle,
    title,
    setTitle,
    body,
    setBody,
    note,
    setNote,
    onOpen,
    labelInput,
    setLabelInput 
}) => {
    const boxElement = useRef();
    const toast = useToast();

    const textStyle ={
        minH: '30px',
        padding: '10px',
        outline: 'none',
        fontSize: '.9rem'
    }

    const handleAddNote = (e) => {
        title !== '' && setNote([
            ...note,
            {
                title: title, 
                body: body, 
                reminder: false, 
                pin: false, 
                archive: false,
                delete: false, 
                id: Math.floor(Math.random() * 1000) 
            }
        ]);

        setTitle('');
        setBody('');
    }
    
    const handleSubmit = () => {
        title === '' && toast({
          title: 'No Title',
          description: 'Enter all necessary entries',
          status: 'warning',
          duration: '2000',
          isClosable: true
        }) 
    }

  return (
    <Stack sx={stackStyle} mb={'50px'}>
        <Box>
            <Flex>
                <Input 
                    type={'text'} 
                    placeholder={'Title'}
                    variant={'unstyled'}
                    pl={'10px'}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <Tooltip label='Save'>
                    <IconButton 
                        onClick={() => {
                            handleSubmit()
                            handleAddNote()
                        }}
                        icon={<CheckIcon />}
                        sx={buttonStyle}
                        borderRadius={'100%'}
                        
                    />
                </Tooltip>
            </Flex>
            
            <Box 
                sx={textStyle} 
                ref={boxElement} 
                label={"Testing"}
                onKeyUp={(e) => setBody(boxElement.current?.innerText)} 
                contentEditable>Take Note...
            </Box>

            {/* <textarea height={'fit-content'}></textarea> */}
            {/* <input type="text"  height={'fit-content'}/> */}

            <Flex sx={{
                p: '0 10px'
            }}>
                <Box>
                    {
                        labelInput !== "" ? 
                        <Flex sx={{
                            border: '1px solid',
                            borderRadius: '15px',
                            p: '0 5px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text 
                                sx={{
                                    fontSize: '.7rem'
                                }}>{labelInput}
                            </Text>
                            <Box>
                                <Icon onClick={() => setLabelInput('')} sx={{
                                    cursor: 'pointer',
                                    ml: '5px'
                                }} children={<SmallCloseIcon />} />
                            </Box>
                        </Flex> : ""
                    }
                </Box>
            </Flex>
        </Box>

        <HStack spacing={[2, null, null, null, 5]}>
            <Tooltip label='Remind me'>
                <IconButton sx={iconStyle} icon={<BellIcon />} />
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
                        sx={listStyle} 
                        cursor={'pointer'}>
                            <Text onClick={onOpen}>Add Label</Text>
                    </PopoverBody>
                    <PopoverBody sx={listStyle} cursor={'pointer'}>Add Drawing</PopoverBody>
                    <PopoverBody sx={listStyle} cursor={'pointer'}>Show Checkboxes</PopoverBody>
                </PopoverContent>
            </Popover>
        </HStack>
    </Stack>
  )
}

export default NoteInput