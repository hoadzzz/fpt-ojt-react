import { Container } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import Cover from '../../components/templates/Cover/Cover'
import Helmet from '../../components/templates/Helmet/Helmet'
import ProfileDetail from '../../components/templates/ProfileDetail/ProfileDetail'
import Sidebar from '../../components/templates/Sidebar/Sidebar'
import { auth } from '../../firebase/config'
import { theme } from '../../utils/theme'

const UserProfile = () => {
    const [user] = useAuthState(auth);
    const history = useHistory();
    if (user == null)
        history.push('/login');
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

export default UserProfile;
