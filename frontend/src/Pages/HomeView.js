import React from 'react'
import { Container, Box, Text, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react"
import SignUp from '../Components/Authentication/SignUp'
// import Login from '../Components/Authentication/Login'
import LoggIn from '../Components/Authentication/LoggIn'


const HomeView = () => {
  return (
    <Container maxH={"xl"} centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m="20px 0 15px 0"
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"2xl"} fontFamily={"Work Sans"} color={"black"}>
          Chat App
        </Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab width={"50%"}>Log In</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoggIn/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomeView
