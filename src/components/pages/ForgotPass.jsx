import { 
    Box,
    Heading,
    FormControl,
    Input,
    FormLabel,
    Text,
    Flex,
    IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TbChecklist } from 'react-icons/tb';
import { useState } from "react";
import { app } from "../../firebaseConfig";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPass = () => {
    const auth = getAuth();
    const [forgotPassword, setForgotPassword] = useState('');
    const[msg, setMsg] = useState('');
    const label = {
        fontSize: '1.2rem'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, forgotPassword)
        .then((response) => {
          setMsg('Check your inbox for further instruction')
        })
        .catch((err) => {
            setMsg('Wrong Entries')
        })

        setForgotPassword('');
    }
    
      return (
        <Box sx={{
          h: '100vh',
          w: ['300px', null, null, '350px', '540px'],
          m: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          flexDir: 'column'
        }}>
          <Box sx={{
            mb: '10px'
          }}>
            <Flex sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mb: '10px'
            }}>
              <Box>
                <IconButton sx={{
                  fontSize: '2.5rem',
                  bg: 'transparent',
                  cursor: 'auto',
                  _hover: {
                    bg: 'transparent'
                  }
                }} icon={<TbChecklist />} />
              </Box>
    
              <Heading sx={{
                fontSize: '1.2rem'
              }}>KipNote</Heading>
            </Flex>
          </Box>
    
          <Box sx={{
            border: '1px solid',
            borderRadius: '5px',
            p: '15px'
          }}>
            <Heading sx={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '1.8rem',
              mb: '20px'
            }}>Reset Password</Heading>

            {msg !== '' ? 
                <Text sx={{
                    textAlign: 'center',
                    bg: 'blue.200',
                    p: '10px 0',
                    borderRadius: '5px',
                    m: '5px 0'
                }}>{msg}</Text> : ''
            }
    
            <form action="" onSubmit={handleSubmit}>
              <FormControl mb={'1rem'}>
                <FormLabel sx={label}>Email</FormLabel>
                <Input 
                    p={'10px'} 
                    type={'text'} 
                    placeholder={'Enter Email'}
                    value={forgotPassword}
                    onChange={(e) => setForgotPassword(e.target.value)} 
                />
              </FormControl>
    
              <button style={{
                backgroundColor: 'tomato',
                color: '#fff',
                width: '100%',
                padding: '10px 0',
                borderRadius: '5px',
                marginTop: '10px',
                fontWeight: '500'
              }} type="submit">Reset Password</button>
            </form>

            <Link to={'/'}><Text sx={{
                textAlign: 'center',
                mt: '10px',
                color: 'blue.200'
            }}>Login</Text></Link>
          </Box>
    
            <Flex sx={{
                w: '100%',
                justifyContent: 'center',
                mt: '15px'
                }}>
                <Text>Need an account?</Text>

                <Link to={'/signup'}><Text sx={{
                    color: 'blue.200',
                    ml: '5px'
                }}>Sign Up</Text></Link>
            </Flex>
        </Box>
      )
}

export default ForgotPass