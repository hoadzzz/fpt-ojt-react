import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import AccountSettings from '../../organisms/AccountSettings/AccoutSettings';
import CompanySettings from '../../organisms/CompanySettings/CompanySettings';
import Notifications from '../../organisms/Notifications/Notifications';

const ProfileDetail = () => {
    const tabs = ['Thông tin tài tài khoản', 'Thông tin shop', 'Thông báo']

    return (
        <Box
            as="main"
            flex={3}
            d="flex"
            flexDir="column"
            justifyContent="space-between"
            pt={5}
            bg="white"
            rounded="md"
            borderWidth={1}
            borderColor="gray.200"
            style={{ transform: 'translateY(-100px)' }}
        >
            <Tabs>
                <TabList px={5}>
                    {tabs.map(tab => (
                        <Tab
                            key={tab}
                            mx={3}
                            px={0}
                            py={3}
                            fontWeight="semibold"
                            color="brand.cadet"
                            borderBottomWidth={1}
                            _active={{ bg: 'transparent' }}
                            _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
                        >
                            {tab}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels px={3} mt={5}>
                    <TabPanel color='#000'>
                        <AccountSettings />
                    </TabPanel>
                    <TabPanel color='#000'>
                        <CompanySettings />
                    </TabPanel>
                    <TabPanel color='#000'>
                        <Notifications />
                    </TabPanel>
                </TabPanels>
            </Tabs>

           
        </Box>
    )
}

export default ProfileDetail
