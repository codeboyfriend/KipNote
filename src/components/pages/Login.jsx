import { 
    Box,
    Heading,
    FormControl,
    Input,
    FormLabel,
    Text,
    Flex,
    IconButton,
    InputRightAddon, 
    InputGroup
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { TbChecklist } from 'react-icons/tb';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const myApp = app;
    const auth = getAuth();
    const [view, setView] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const label = {
        fontSize: '1.2rem'
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((response) => {
          navigate('/home')
        })
        .catch((err) => {
            setError('An error occur')
            console.log(myApp)
        })

        setLoginEmail('');
        setLoginPassword('');
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
                  color: '#c5341b',
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
            }}>Login</Heading>

            {error !== '' ? 
                <Text sx={{
                    textAlign: 'center',
                    bg: 'blue.200',
                    p: '10px 0',
                    borderRadius: '5px',
                    m: '5px 0'
                }}>{error}</Text> : ''
            }
    
            <form action="" onSubmit={handleSubmit}>
              <FormControl mb={'1rem'}>
                <FormLabel sx={label}>Email</FormLabel>
                <Input 
                    p={'10px'} 
                    type={'text'} 
                    placeholder={'Enter Email'}
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)} 
                />
              </FormControl>
    
              <FormControl mb={'1rem'}>
                <FormLabel sx={label}>Password</FormLabel>
                <InputGroup>
                    <Input 
                        p={'10px'} 
                        type={view ? 'text' : 'password'} 
                        placeholder={'Enter Password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}  
                    />
                    <InputRightAddon
                      cursor={'pointer'} 
                      onClick={() => setView(!view)} 
                      children={view ? <ViewOffIcon /> : <ViewIcon /> } 
                    />
                </InputGroup>
              </FormControl>
    
              <button style={{
                backgroundColor: 'tomato',
                color: '#fff',
                width: '100%',
                padding: '10px 0',
                borderRadius: '5px',
                marginTop: '10px',
                fontWeight: '500'
              }} type="submit">Login</button>
            </form>

            <Link to={'/forgot'}><Text sx={{
                textAlign: 'center',
                mt: '10px',
                color: 'blue.200'
            }}>Forgot Password?</Text></Link>
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

export default Login