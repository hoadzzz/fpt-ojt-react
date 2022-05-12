import { Box } from '@chakra-ui/react'
import InputVStack from '../../molecules/InputVStack/InputVStack'
import Story from '../../molecules/Story/Story'
import UserAvatar from '../../molecules/UserAvatar/UserAvatar'

function Sidebar() {
    return (
        <Box
            as="aside"
            flex={1}
            mr={{ base: 0, md: 5 }}
            mb={{ base: 5, md: 0 }}
            bg="white"
            rounded="md"
            borderWidth={1}
            borderColor="brand.light"
            style={{ transform: 'translateY(-100px)' }}
        >
            <UserAvatar />
            <Story />
            <InputVStack />
        </Box>
    )
}

export default Sidebar
