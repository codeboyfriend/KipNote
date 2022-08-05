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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const auth = getAuth();
  const [view, setView] = useState(false);
  const [viewCon, setViewCon] = useState(false);
  const navigate = useNavigate();

  const label = {
    fontSize: '1.2rem'
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCon, setPasswordCon] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password !== passwordCon){
      setErrorMsg('Passwords do not match')
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      navigate('/home')
    })
    .catch((err) => {
      setErrorMsg('Failed to create an account')
    })

    setEmail('');
    setPassword('');
    setPasswordCon('');
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
        }}>Sign Up</Heading>

        {errorMsg !== '' ? 
          <Text sx={{
              textAlign: 'center',
              bg: 'blue.200',
              p: '10px 0',
              borderRadius: '5px',
              m: '5px 0'
          }}>{errorMsg}</Text> : ''
        }

        <form action="" onSubmit={handleSubmit}>
          <FormControl mb={'1rem'}>
            <FormLabel sx={label}>Email</FormLabel>
            <Input 
              p={'10px'} 
              type={'text'} 
              placeholder={'Enter Email'} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mb={'1rem'}>
            <FormLabel sx={label}>Password</FormLabel>
            <InputGroup>
              <Input 
                p={'10px'} 
                type={view ? 'text' : 'password'} 
                placeholder={'Enter Password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightAddon onClick={() => setView(!view)} children={view ? <ViewOffIcon /> : <ViewIcon /> } />
            </InputGroup>
          </FormControl>

          <FormControl mb={'1rem'}>
            <FormLabel sx={label}>Password</FormLabel>
            <InputGroup>
              <Input 
                p={'10px'} 
                type={viewCon ? 'text' : 'password'} 
                placeholder={'Password Confirmation'} 
                value={passwordCon}
                onChange={(e) => setPasswordCon(e.target.value)}
              />
              <InputRightAddon onClick={() => setViewCon(!viewCon)} children={viewCon ? <ViewOffIcon /> : <ViewIcon /> } />
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
          }} type="submit">Sign Up</button>
        </form>
      </Box>

      <Flex sx={{
                w: '100%',
                justifyContent: 'center',
                mt: '15px'
                }}>
                <Text>Already have an account?</Text>

                <Link to={'/'}><Text sx={{
                    color: 'blue.200',
                    ml: '5px'
                }}>Login</Text></Link>
            </Flex>
    </Box>
  )
}

export default Signup