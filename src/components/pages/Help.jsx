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
    useDisclosure 
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
                <PopoverContent sx={{
                    textAlign: 'center',
                    w: '280px'
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
            h: '80vh',
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
                    placeholder='Drop your issue'
                    p={'10px 5px'}
                />
                <InputRightAddon 
                    children={<CheckIcon />} 
                    cursor={'pointer'} 
                />
            </InputGroup>
        </Flex>

        <Flex sx={{
            w: '80%',
            m: '0 auto',
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
                    bg: '#1A202C',
                    color: 'white'
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