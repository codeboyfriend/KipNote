import { 
    Text, 
    Flex, 
    IconButton, 
    useColorModeValue, 
    useToast 
} from "@chakra-ui/react";
import { 
    CheckIcon, 
    DeleteIcon 
} from "@chakra-ui/icons";

const Todo = ({ 
    todo, 
    todos, 
    setTodos, 
    toggleCompleted 
}) => { 
    const bg = useColorModeValue('#1a202c', '#ffffffeb');
    const color = useColorModeValue('#fff', '#1a202c');
    const toast = useToast();

    const iconStyle = {
        bg: 'transparent',
        cursor: 'pointer'
    }

    const handleDelete = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const isCompleted = {
        textDecor: 'line-through',
        opacity: '0.5'
    }

    const completedToast = () => {
        todo.completed ? toast({
          title: '',
          description: 'Todo uncompleted',
          status: 'success',
          duration: '2000',
          position: 'bottom-left'
        }) : toast({
            title: '',
            description: 'Todo completed',
            status: 'success',
            duration: '2000',
            position: 'bottom-left'
        })  
    }

    const deleteToast = () => {
        toast({
            title: '',
            description: 'Todo deleted',
            status: 'success',
            duration: '2000',
            position: 'bottom-left'
        })
    }


  return (
    <Flex 
        bg={bg}
        color={color} 
        padding={'5px 10px'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={todo.completed ? isCompleted : ''}
    >
        <Text fontSize={['.8rem', null, null, null,  '1rem']}>{todo.text}</Text>
        
        <Flex spacing={'5px'}>
            <IconButton 
                onClick={() => {
                    completedToast()
                    toggleCompleted(todo.id)
                }} 
                sx={iconStyle} 
                icon={<CheckIcon />} 
            />
            <IconButton 
                onClick={() => {
                    deleteToast()
                    handleDelete()
                }} 
                sx={iconStyle}
                icon={<DeleteIcon />} 
            />
        </Flex>
    </Flex>
  )
}

export default Todo