import {React ,useState , useEffect} from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'



const LoggIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }
    const handleSubmit = ()=>{

    }

    return (
        <VStack>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={`${show ? "text" : "password"}`}
                        placeholder='Enter Your Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button h={"1.75rem"} size={"xs"} mr={2} onClick={()=>handleClick()}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
            colorScheme='green'
            width={"100%"}
            style={{marginTop:15}}
            onClick={()=>handleSubmit()}
            >   
               Log In 
            </Button>
            <Button
            variant={"solid"}
            colorScheme='red'
            width={"100%"}
            style={{marginTop:15}}
            onClick={()=>
            {setEmail("admin@gmail.com");
            setPassword("admin@123");}
            }
            >   
              Get Guest User Credentials 
            </Button>
        </VStack>
    )
}

export default LoggIn
