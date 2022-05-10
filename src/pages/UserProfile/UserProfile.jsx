import { Container } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Cover from '../../components/templates/Cover/Cover'
import Helmet from '../../components/templates/Helmet/Helmet'
import ProfileDetail from '../../components/templates/ProfileDetail/ProfileDetail'
import Sidebar from '../../components/templates/Sidebar/Sidebar'
import { theme } from '../../utils/theme'

const UserProfile = () => {
    return (
        <ChakraProvider theme={theme}>
            <Helmet title='Tài Khoản'>
                <Cover />
                <Container display={{ base: 'block', md: 'flex' }} maxW="100%" fontSize='16px'>
                    <Sidebar />
                    <ProfileDetail />
                </Container>
            </Helmet>
        </ChakraProvider>
    )
}

export default UserProfile