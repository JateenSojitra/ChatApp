import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, {useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [show, setShow] = useState(false)
    const [lodings, setLodings] = useState(false);
    const [pic, setPic] = useState(false);
    const toast = useToast()

    const navigate = useNavigate()

    const handleClick = () => {
        setShow(!show)
    }
    const postDetails = (pics) => {
        setLodings(true);
        if (pics === undefined) {
            toast({
                title: 'Please Select Image !!1.',
                description: "warning",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            console.log('data :>> ', data);
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "dhpmyptge");
            console.log('data :>> ', data);
            fetch("https://api.cloudinary.com/v1_1/dhpmyptge/image/upload", {
                method: "post",
                body: data,
            }).then((res) => res.json())
                .then((data) => {
                    console.log('data :>> ', data);
                    // debugger
                    setPic(data.url.toString());
                    setLodings(false);
                })
                .catch((err) => {
                    // debugger
                    console.log(err);
                    setLodings(false);
                });
        }
        else {
            toast({
                title: 'Please Select Image !!1.',
                description: "warning",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLodings(false);
            return;
        }

    }
    const handleSubmit = async () => {
        setLodings(true);
        if (!name || !email || !password || !confirmPassword) {
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
        if (password !== confirmPassword) {
            toast({
                title: 'Password Do Not Match',
                description: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }
        try {
            const config = {
                header: {
                    "Content-type": "application/json",
                }
            };
            const { data } = await axios.post("/api/user", { name, email, password, pic }, config);
            toast({
                title: 'Registraion Successful.',
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
                        <Button h={"1.75rem"} size={"xs"} mr={2} onClick={() => handleClick()}>
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
                        <Button h={"1.75rem"} size={"xs"} mr={2} onClick={() => handleClick}>
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
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
                colorScheme='green'
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={() => handleSubmit()}
                isLoading={lodings}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default SignUp