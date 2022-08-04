import { Box, Heading, Text } from "@chakra-ui/react";

const TodoHeader = () => {
  return (
    <Box>
        <Heading sx={{
            fontSize: '2rem',
            textAlign: 'center',
            opacity: '0.8',
            mb: '5px'
        }}>Todo List</Heading>
        <Text sx={{
          fontSize: '1.2rem',
          textAlign: 'center',
          mb: '40px'
        }}>keep track of your daily to-do activities</Text>
    </Box>
  )
}

export default TodoHeader