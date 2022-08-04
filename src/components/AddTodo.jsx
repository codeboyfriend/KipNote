import { Flex, Input, IconButton } from "@chakra-ui/react";
import { FaPlusSquare } from "react-icons/fa";

const AddTodo = ({
    todos,
    setTodos,
    todoInput,
    setTodoInput
}) => {
    const iconStyle ={
        bg: 'tomato',
        padding: 'none',
        borderRadius: 'none'
    }

    const handleAddTodo = (e) => {
        todoInput !== '' && setTodos([
            ...todos,
            {text: todoInput, completed: false , id: Math.floor(Math.random() * 1000)}
          
          ]);
          
        setTodoInput('')
    }

  return (
    <Flex 
        sx={{
            m: '30px 0'
        }}
    >
        <Input 
            variant={'filled'} 
            sx={{
                borderRadius: 'none',
                padding: '10px'
            }} 
            type={'text'} 
            placeholder={'Enter todo...'}
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
        />
        <IconButton 
            sx={iconStyle} 
            icon={<FaPlusSquare />} 
            onClick={handleAddTodo}
        />
    </Flex>
  )
}

export default AddTodo