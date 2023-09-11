import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box } from '@chakra-ui/react';
import Sidebar from '../miscellaneous/Sidebar';
import MyChat from '../Components/MyChat';
import ChatBox from '../Components/ChatBox';

const ChatView = () => {
  const {user} = ChatState();
  try {
    return (
      <div style={{width : "100%"}}>
        {user && <Sidebar/>}
        <Box
        d="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        >
          {user && <MyChat/>}
          {user && <ChatBox/>}
        </Box>
      </div>
    )
  } catch (error) {
    console.log(error)
  }
}

export default ChatView
