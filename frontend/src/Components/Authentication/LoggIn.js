import {React ,useState , useEffect} from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack , useToast } from '@chakra-ui/react'
import axios from "axios"
import { useHistory , useNavigate  } from "react-router-dom"



const LoggIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [lodings, setLodings] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleClick = () => {
        setShow(!show)
    }
    const handleSubmit = async()=>{
        setLodings(true);
        if (!email || !password ) {
            toast({
                title: 'Please Fill all the Feilds.',
                description: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLodings(false);
            return;
        }
        try {
            const config = {
                header: {
                    "Content-type": "application/json",
                }
            };
            const { data } = await axios.post("/api/user/login", {  email, password, }, config);
            toast({
                title: 'Login Successful.',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            })
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLodings(false)
            // history.push("/chats");
            navigate("/chats")

        } catch (error) {
            toast({
                title: 'Error Occured',
                description: error.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLodings(false)
        }
    }

    return (
        <VStack>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={`${show ? "text" : "password"}`}
                        placeholder='Enter Your Password'
                        value={password}
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
            isLoading={lodings}
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
