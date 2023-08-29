import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }
    const postDetails = (pics)=>{

    }
    const handleSubmit = ()=>{

    }

    return (
        <VStack>
            <FormControl id='frist-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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
            <FormControl id='confirmpassword' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={`${show ? "text" : "password"}`}
                        placeholder='Enter Your Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement >
                        <Button h={"1.75rem"} size={"xs"} mr={2} onClick={()=>handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pics' isRequired>
                <FormLabel>Upload Your Picture</FormLabel>
                <Input
                    type='file'
                    accept='image/*'
                    placeholder='Upload Your Picture'
                    onChange={(e) =>postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
            colorScheme='green'
            width={"100%"}
            style={{marginTop:15}}
            onClick={()=>handleSubmit()}
            >   
               Sign Up 
            </Button>
        </VStack>
    )
}

export default SignUp