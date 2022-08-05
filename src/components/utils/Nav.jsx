import { Link } from 'react-router-dom';
import { 
  Flex, 
  IconButton, 
  Heading, 
  Input, 
  InputLeftAddon, 
  InputGroup,
  Tooltip, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { 
  HamburgerIcon, 
  Search2Icon, 
  SettingsIcon,
  SmallCloseIcon
} from "@chakra-ui/icons";
import { FaTh, FaBars } from 'react-icons/fa';
import { TbChecklist } from 'react-icons/tb'

const Nav = ({ 
  side, 
  setSide,
  gridView,
  setGridView 
}) => {
  const {ColorMode, toggleColorMode} = useColorMode()
  
  const iconStyle = {
    bgColor: 'transparent',
    fontSize: ['1rem', null, null, '1.2rem'],
    borderRadius: '100%'
  }

  const listStyle = {
    p: '5px 10px',

    _hover: {
      bg: 'RGBA(255, 255, 255, 0.24)'
    }
  }

  const bg = useColorModeValue('#fff', '#1a202c');

  return (
    <Flex bg={bg} sx={{
      w: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: '20px',
      gap: '40px',
      pos: 'fixed',
      top: 0,
      zIndex: '1500',
      boxShadow: '0px 1px 2px #000', 
    }}>
      <Flex sx={{
        alignItems: 'center',
        gap: '10px'
      }}>
        <Tooltip hasArrow label='Main Menu' borderRadius={'5px'}>
          <IconButton
            onClick={()=> setSide(!side)} 
            sx={iconStyle} 
            icon={side ? <HamburgerIcon /> : <SmallCloseIcon />
          } 
          />
        </Tooltip>
        
        <Link to='/'>
          <Heading  sx={{
            fontSize: ['1rem', null, null, '1.5rem'],
            fontWeight: '500'
            }}><IconButton sx={{
              fontSize: ['2rem', null, null, '2.5rem'],
              bg: 'transparent',
              cursor: 'auto',
              _hover: {
                bg: 'transparent'
              }
            }} icon={<TbChecklist />}/>KipNote
          </Heading>
        </Link>
      </Flex>

      <Flex display= {['none', null, null, null, 'flex']}>
        <InputGroup sx={{
          w: ['300px', null, null, null, '350px', '500px']
        }}>
          <Tooltip hasArrow label='Search' borderRadius={'5px'}>
            <InputLeftAddon children={<Search2Icon />} cursor={'pointer'} />
          </Tooltip>
          <Input type={'text'} variant={'filled'} outline={'none'} />
        </InputGroup>
      </Flex>

      <Flex sx={{
        alignItems: 'center',
        gap: '5px'
      }}>
        <Tooltip 
          hasArrow 
          label='Search' 
          borderRadius={'5px'}
        >
          <IconButton 
            sx={iconStyle} 
            icon={<Search2Icon />}
            display={['flex', null, null, null, 'none']} 
          />
        </Tooltip>
        <Tooltip hasArrow label={gridView ? 'List View' : 'Grid View'} borderRadius={'5px'}>
          <IconButton 
            sx={iconStyle} 
            icon={gridView ? <FaBars /> : <FaTh />}
            display= {['none', null, null, null, 'flex']}
            onClick={() => setGridView(!gridView)} 
          />
        </Tooltip>
        <Popover>
          <PopoverTrigger>
            <IconButton 
              sx={iconStyle} 
              icon={<SettingsIcon />} 
            />
          </PopoverTrigger>
          <PopoverContent sx={{
            w: '200px',
            bg: '#1A202C',
            color: 'white',
            listStyleType: 'none',
            overflow: 'hidden',
          }}>
            <PopoverBody sx={listStyle}><Text cursor={'pointer'}>Settings</Text></PopoverBody>
            <PopoverBody 
                sx={listStyle} 
                onClick={toggleColorMode}
              >
              <Text cursor={'pointer'}>
                {ColorMode === 'dark' ? 'Disable dark theme' : 'Toggle dark theme' }
              </Text>
            </PopoverBody>
            <PopoverBody sx={listStyle}><Text cursor={'pointer'}>Send Feedback</Text></PopoverBody>
            <PopoverBody sx={listStyle}><Text cursor={'pointer'}>Help</Text></PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  )
}

export default Nav