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
    const toast = useToast();

    const handleAddNote = () => {
        title !== '' && setNote([
            ...note,
            {
                title: title, 
                body: body, 
                reminder: false, 
                pin: false, 
                archive: false,
                delete: false, 
                id: Math.floor(Math.random() * 1000),
                label: '',
                reminderText: '' 
            }
        ]);

        setTitle('');
        setBody('');
    }
    
    const handleSubmit = () => {
        title === '' ? toast({
          title: '',
          description: 'Enter all necessary entries',
          status: 'warning',
          duration: '2000',
          position: 'bottom-left'
        }) : toast({
            title: '',
            description: 'Note added',
            status: 'success',
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

            <textarea placeholder="Take Note..."
                value={body}
                onChange={(e) => setBody((e.target.value))}  
                style={{
                    height: 'fit-content',
                    width: '100%',
                    minH: '30px',
                    padding: '10px',
                    outline: 'none',
                    fontSize: '.9rem'
                }}>
            </textarea>
        </Box>
    </Stack>
  )
}

export default NoteInput