import { Text, Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

const Todo = ({ todo, todos, setTodos, toggleCompleted }) => { 
    const bg = useColorModeValue('#1a202c', '#ffffffeb');
    const color = useColorModeValue('#fff', '#1a202c');

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
                    toggleCompleted(todo.id)
                }} 
                sx={iconStyle} 
                icon={<CheckIcon />} 
            />
            <IconButton 
                onClick={handleDelete} 
                sx={iconStyle}
                icon={<DeleteIcon />} 
            />
        </Flex>
    </Flex>
  )
}

export default Todo