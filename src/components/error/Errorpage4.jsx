import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
const Errorpage4 = () => {
  return (
    <Box>
       <VStack>

        <p style={{fontSize: '180px', textAlign: 'center', fontFamily: 'Poppins'}}>500</p>
      <p style={{fontSize: '50px', textAlign: 'center', fontFamily: 'serif'}}>Internal sever error</p><br></br>
      <p style={{fontSize: '30px', textAlign: 'center', fontFamily: 'serif'}}>
        Please refresh the page
        </p><br></br><br></br>
        <Button style={{fontSize:'20px', padding: '15px', height: '60px',
         width:'250px', color:'white',backgroundColor: 'blueviolet',borderRadius: '10px'}}>
            Return to home</Button>
    
       </VStack>
    </Box>
  )
}

export default Errorpage4