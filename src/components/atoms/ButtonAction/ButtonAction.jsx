import { Box, Button } from '@chakra-ui/react'

function ButtonAction(handleClick) {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button onClick={() => handleClick}>Cập nhật</Button>
    </Box>
  )
}

export default ButtonAction
