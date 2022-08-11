import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import Todo from "./Todo";
import { FaRegListAlt } from 'react-icons/fa';

const Todos = ({ todos, setTodos, side, toggleCompleted }) => {
    const noStyle = {
        fontSize: ['6rem', null, '7rem', null,  '9rem'],
        bg: 'transparent',
        _hover: {
            bg: 'transparent',
            cursor: 'auto'
        }   
    }

  return todos.length > 0 ? (
    <Box>
        <Flex sx={{
            flexDir: 'column',
            gap: '5px',
            mt: '20px'
        }}>
            {todos.map(todo => <Todo 
                key={todo.id} 
                todo={todo} 
                todos={todos}
                setTodos={setTodos}
                toggleCompleted={toggleCompleted}
            />) }
        </Flex>
    </Box>
  ) : (
    <Flex spacing={5} sx={{
        h: '150px',
        textAlign: 'center',
        flexDir: 'column',
        justifyContent: 'center',
        alignItem: 'center',
        opacity: 0.5,
        gap: '55px',
        mt: '60px'
    }}>
        <IconButton sx={noStyle} icon={<FaRegListAlt />} />
        <Text sx={{
            fontSize: ['1rem', null, null, '1.2rem', '1.5rem']
        }}>Todo you add appear here</Text>
    </Flex>
  )
}

export default Todos