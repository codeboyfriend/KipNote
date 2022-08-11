import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    Box,
    Text,
    Flex,
    IconButton,
    Heading,
    Tooltip,
    Input,
    InputRightAddon, 
    InputGroup,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Textarea,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon 
} from "@chakra-ui/react";
import { 
    MoonIcon,
    SunIcon,
    CheckIcon
  } from "@chakra-ui/icons";
import { FaRegUser, FaUserCheck } from 'react-icons/fa';
import { TbChecklist } from 'react-icons/tb';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { app } from "../../firebaseConfig";
import { getAuth, signOut } from 'firebase/auth';

const Help = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const {colorMode, toggleColorMode} = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const bg = useColorModeValue('#fff', '#1a202c');

    const modalStyle = {
        mt: '100px',
        w: '300px'
      }

    const iconStyle = {
        bgColor: 'transparent',
        fontSize: ['.9rem', null, null, '1.2rem'],
        borderRadius: '100%'
    }

    const listStyle = {
        p: '5px 10px',
    
        _hover: {
          bg: 'RGBA(255, 255, 255, 0.24)'
        }
    }

    const signOutUser = () => {
        signOut(auth).then(() => {
          navigate('/')
        })
    }

  return (
    <Box>
        <Flex 
            bg={bg}
            sx={{
                w: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: ['20px 10px', null, null, '20px'],
                pos: 'fixed',
                top: 0,
                zIndex: '1500',
                boxShadow: '0px 1px 2px #000'
            }}>
            <Link to='/home'>
                <Heading  sx={{
                    fontSize: ['.9rem', null, '1rem', '1.5rem'],
                    fontWeight: '500'
                    }}><IconButton sx={{
                        fontSize: ['1.5rem', null, null, '2.5rem'],
                        bg: 'transparent',
                        cursor: 'auto',
                        color: '#c5341b',
                        _hover: {
                            bg: 'transparent'
                        }
                    }} icon={<TbChecklist />}/>KipNote Help
                </Heading>
            </Link>

            <Popover>
                <PopoverTrigger>
                    <IconButton
                    sx={iconStyle}  
                    icon={<FaRegUser />} 
                    />
                </PopoverTrigger>
                <PopoverContent bg={bg} sx={{
                    textAlign: 'center',
                    w: '250px',
                    border: 'none',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)'
                }}>
                    <PopoverBody fontSize={'3rem'}>
                    <IconButton 
                        icon={<FaUserCheck />}
                        sx={{
                        fontSize: '5rem',
                        bg: 'transparent',
                        m: '10px 0',
                        _hover: {
                            bg: 'transparent',
                        }
                        }} 
                    />
                    </PopoverBody>
                    <PopoverBody>My Account</PopoverBody>
                    <PopoverBody><Link to={'/update'}><Text sx={{
                    p: '5px',
                    border: '1px solid',
                    borderRadius: '5px'
                    }}>Manage your account</Text></Link></PopoverBody>
                    <PopoverBody cursor={'pointer'}>
                        <Text onClick={signOutUser} sx={{
                            p: '5px',
                            border: '1px solid',
                            borderRadius: '5px'
                            }}>Sign Out
                        </Text>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>

        <Flex sx={{
            h: '60vh',
            w: ['300px', null, null, '400px'],
            m: '0 auto',
            flexDir: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <IconButton
                 sx={{
                    fontSize: ['1.5rem', null, null, '2rem'],
                    bg: 'transparent',
                    cursor: 'auto',
                    padding: 'none',
                    _hover: {
                        bg: 'transparent'
                    }
                 }}
                icon={<TbChecklist />} 
            />
            <Text sx={{
                color: '#c5341b',
                fontSize: ['1rem', null, '1rem', '1.5rem'],
                mb: '.5rem'
            }}>How can we help you?</Text>
            <InputGroup mt={'10px'} >
                <Input 
                    type={'text'} 
                    placeholder='Describe your issue'
                    p={'10px 5px'}
                />
                <InputRightAddon 
                    children={<CheckIcon />} 
                    cursor={'pointer'} 
                />
            </InputGroup>
        </Flex>

        <Box>
            <Accordion allowToggle sx={{
                width: '80%',
                m: '0 auto'
            }}>
                <AccordionItem>
                    <h2>
                        <AccordionButton
                           _expanded={{
                            color: '#ffbb29'
                        }}
                        >
                            <Box flex={1} textAlign={'left'}>
                                Get started with KipNote
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={'50px'}>
                        <ul>
                            <li>Create a note</li>
                            <li>Make a list of todos</li>
                            <li>Label or pin notes</li>
                            <li>Archive notes</li>
                            <li>Set up reminders for the notes</li>
                            <li>Mark completed todos</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton
                            _expanded={{
                                color: '#ffbb29'
                            }}
                        >
                            <Box flex={1} textAlign={'left'}>
                                Create and edit notes and todos
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={'50px'}>
                        <ul>
                            <li>On your computer, go to kipNote.netlify.app</li>
                            <li>At the top, Click <b>Take a note</b></li>
                            <li>Enter your note and click <b>Save</b></li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton
                            _expanded={{
                                color: '#ffbb29'
                            }}
                        >
                            <Box flex={1} textAlign={'left'}>
                                Pin notes
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={'50px'}>
                        <ul>
                            <li>On your computer, go to kipNote.netlify.app</li>
                            <li>Tap the note that you want to pin</li>
                            <li>Tap Pin note</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton
                            _expanded={{
                                color: '#ffbb29'
                            }}
                        >
                            <Box flex={1} textAlign={'left'}>
                                Add to Archive
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={'50px'}>
                        <ul>
                            <li>On your computer, go to kipNote.netlify.app</li>
                            <li>Tap the note that you want to pin</li>
                            <li>Tap Archive</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton
                            _expanded={{
                                color: '#ffbb29'
                            }}
                        >
                            <Box flex={1} textAlign={'left'}>
                                Set reminders
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={'50px'}>
                        <ul>
                            <li>On your computer, go to kipNote.netlify.app</li>
                            <li>Click on a note</li>
                            <li>At the bottom left, click Remind me</li>
                            <li>At the top left of kipNote, click Menu <b>Reminders</b></li>
                            <li>You can set reminders to go off at a certain time or date</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>

        <Flex sx={{
            w: '80%',
            m: '30px auto',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '20px'
        }}>
            <Tooltip 
                hasArrow 
                label={colorMode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'} 
                borderRadius={'5px'}
            >

                <IconButton 
                    onClick={toggleColorMode}
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    sx={{
                        fontSize: '1.5rem',
                        bg: 'transparent',
                        cursor: 'pointer',
                        borderRadius: '100%'
                    }} 
                />
            </Tooltip>

            <Popover>
                <PopoverTrigger>
                    <Text sx={{
                        fontSize: ['.7rem', null, '1rem', '1rem'],
                        border: '1px solid',
                        cursor: 'pointer',
                        padding: '5px',
                        pr: '10px',
                        borderRadius: '5px'
                    }}>
                        <IconButton 
                            icon={<BsFillChatLeftDotsFill />} 
                            sx={{
                                bg: 'transparent',
                                _hover: {
                                    bg: 'transparent'
                                }
                            }} 
                        />
                        Send feedback about our Help Center
                    </Text>
                </PopoverTrigger>
                <PopoverContent sx={{
                    w: '250px',
                    border: 'none',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)'
                }}>
                    <PopoverBody cursor={'auto'}>Send Feedback on...</PopoverBody>
                    <PopoverBody
                        onClick={onOpen}
                        sx={listStyle} 
                        cursor={'pointer'}>This help content & information
                    </PopoverBody>
                    <PopoverBody 
                        onClick={onOpen}
                        sx={listStyle} 
                        cursor={'pointer'}>General Help Center Experience
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>

        <Modal
            initialFocusRef={initialRef} 
            isOpen={isOpen} 
            onClose={onClose}
            motionPreset='slideInBottom'
        >
            <ModalContent sx={modalStyle}>
                <ModalHeader sx={{
                    bg: '#c5341b',
                    color: '#fff'
                }}>Send Feedback</ModalHeader>
                <ModalBody>
                    <form action="POST" data-netlify='true'>
                        <Textarea 
                            sx={{
                                border: 'none',
                                p: '5px',
                                height: '150px',
                                outline: 'none'
                            }}
                            variant={'unstyled'}
                            resize={'none'}
                            placeholder="Have Feedback? We'd love to hear it, but please don't share sensitive information. Have questions? Try help or support." 
                        />

                        <Box>
                            <Text 
                                sx={{
                                    fontSize: '.9rem',
                                    m: '10px 0'
                                }}
                            >Some account and system information may be send to KipNote. We will use it to fix problems and inprove our services. We may email you for information or update.</Text>
                        </Box>

                        <button style={{
                            backgroundColor: '#c5341b',
                            color: '#fff',
                            padding: '5px 10px',
                            fontWeight: '500'
                        }} type="submit">Send</button>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default Help