import TodoHeader from "../TodoHeader";
import Todos from "../Todos";
import AddTodo from "../AddTodo";
import Nav from "../utils/Nav";
import Sidebar from "../utils/Sidebar";
import { Box } from "@chakra-ui/react";

const TodoPage = ({
    todos,
    setTodos,
    side,
    setSide,
    gridView,
    setGridView,
    onOpen,
    toggleCompleted,
    todoInput,
    setTodoInput
}) => {
  return (
    <Box>
        <Nav 
          side={side} 
          setSide={setSide}
          gridView={gridView}
          setGridView={setGridView}
        />
        <Sidebar 
          side={side} 
          setSide={setSide} 
          onOpen={onOpen}  
        />
        <Box  sx={{
            w: ['70%', null, null, '55%', '50%'],
            mt: '120px',
            transition: 'margin .2s'
        }} ml={side ? ['90px', null, null, null, '160px'] : ['90px', null, null, '200px', '330px']}>
            <TodoHeader />

            <Todos 
                todos={todos}
                setTodos={setTodos}
                side={side}
                toggleCompleted={toggleCompleted} 
            />

            <AddTodo 
                todos={todos}
                setTodos={setTodos}
                todoInput={todoInput}
                setTodoInput={setTodoInput}
            />
        </Box>
    </Box>
  )
}

export default TodoPage