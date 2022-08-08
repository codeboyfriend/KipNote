import { Link } from 'react-router-dom'
import { Box, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react/";
import { FaRegLightbulb, FaPen, FaArchive, FaRegListAlt } from 'react-icons/fa';
import { BellIcon, DeleteIcon } from "@chakra-ui/icons";

const Sidebar = ({ side, onOpen }) => {
    const bg = useColorModeValue('#fff', '#1a202c');

    const iconStyle = {
        bgColor: 'transparent',
        fontSize: '1.5rem',
        borderRadius: '100%',
        _hover: {
            bg: 'transparent'
        }
    }

    const textStyle = {
        ml: '25px',
    }

    const flexStyle = {
        w: '100%',
        alignItems: 'center',
        mb: '20px',
        cursor: 'pointer',
        pl: '20px',
        _hover: {
            bg: '#8d6e2c'
        }
    }

  return (
    <Box bg={bg} sx={{
        pos: 'fixed',
        top: 20,
        left: 0,
        h: '100vh',
        padding: '20px 0',
        boxShadow: '1px 2px 5px #000',
        transition: 'width .2s',
        zIndex: '100'   
    }} 
        w= {side ? '80px' : ['200px', null, null, null, '200px']}
       
    >
       <Link to='/home'>
            <Flex sx={flexStyle}>
                <IconButton sx={iconStyle} icon={<FaRegLightbulb />} />
                <Text sx={textStyle} display={side ? 'none' : 'block'}>Notes</Text>
            </Flex>
       </Link>

       <Link to='/todos'>
            <Flex sx={flexStyle}>
                <IconButton sx={iconStyle} icon={<FaRegListAlt />} />
                <Text sx={textStyle} display={side ? 'none' : 'block'}>Todos</Text>
            </Flex>
       </Link>

        <Link to='/reminder'>
            <Flex sx={flexStyle}>
                <IconButton sx={iconStyle} icon={<BellIcon />} />
                <Text sx={textStyle} display={side ? 'none' : 'block'}>Reminders</Text>
            </Flex>
        </Link>

        <Link to='/archive'>
            <Flex sx={flexStyle}>
                <IconButton sx={iconStyle} icon={<FaArchive />} />
                <Text sx={textStyle} display={side ? 'none' : 'block'}>Archive</Text>
            </Flex>
        </Link>

       <Flex onClick={onOpen} sx={flexStyle}>
            <IconButton sx={iconStyle} icon={<FaPen />} />
            <Text sx={textStyle} display={side ? 'none' : 'block'}>Edit Labels</Text>
       </Flex>

       <Link to='/trash'>
            <Flex sx={flexStyle}>
                <IconButton sx={iconStyle} icon={<DeleteIcon />} />
                <Text sx={textStyle} display={side ? 'none' : 'block'}>Trash</Text>
            </Flex>
       </Link>
    </Box>
  )
}

export default Sidebar