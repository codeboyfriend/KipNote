import { 
    Box, 
    Stack, 
    Input,
    Tooltip,
    IconButton,
    Flex,
    useToast
} from "@chakra-ui/react/";
import { CheckIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const NoteInput = ({
    buttonStyle,
    stackStyle,
    title,
    setTitle,
    body,
    setBody,
    note,
    setNote 
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
          title: '',
          description: 'Enter all necessary entries',
          status: 'warning',
          duration: '2000',
          position: 'bottom-left'
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
        </Box>
    </Stack>
  )
}

export default NoteInput