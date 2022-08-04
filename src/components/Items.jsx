import { 
    Box, 
    Text, 
    IconButton, 
    Flex 
} from "@chakra-ui/react";
import { FaRegLightbulb } from 'react-icons/fa';
import Item from "./Item";

const Items = ({ 
    note,
    setNote,
    buttonStyle,
    textStyle,
    iconStyle,
    listStyle,
    stackStyle,
    gridView,
    toggle,
    pin,
    archive,
    onOpen,
    allNote
}) => {
    const noStyle = {
        fontSize: ['7rem', null, '8rem', null,  '10rem'],
        bg: 'transparent',
        _hover: {
            bg: 'transparent',
            cursor: 'auto'
        }   
    }


  return allNote.length > 0 ? (
    <Box>
        <Text opacity={0.8}>OTHERS</Text>
        
        <Box 
            display={gridView && 'grid'}
            gridTemplateColumns={'repeat(2, 1fr)'}
            gap={'10px'}
        >
            {allNote.map((each) => (<Item key={each.id} 
                each={each}
                note={note}
                setNote={setNote} 
                buttonStyle={buttonStyle}
                textStyle={textStyle}
                iconStyle={iconStyle}
                listStyle={listStyle} 
                stackStyle={stackStyle}
                toggle={toggle}
                pin={pin}
                archive={archive}
                onOpen={onOpen} 
            />))}
        </Box>
    </Box>
  ) : (
    <Flex spacing={5} sx={{
        h: '300px',
        textAlign: 'center',
        flexDir: 'column',
        justifyContent: 'center',
        alignItem: 'center',
        opacity: 0.5,
        gap: '20px'
    }}>
        <IconButton sx={noStyle} icon={<FaRegLightbulb />} />
        <Text sx={{
            mt: '50px',
            fontSize: ['1rem', null, null, '1.2rem', '1.5rem']
        }}>Note you add appear here</Text>
    </Flex>
  )
}

export default Items