import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/selectors';


function AccountSettings() {
    const user = useSelector(userSelector);
    let userName, lastName, firstName;
    if (user != null) {
        userName = user.name;
        lastName = userName.substring(0, userName.indexOf(' '));
        firstName = userName.substring(userName.indexOf(' '), userName.length);
    }

    return (
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={6}>
            <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input focusBorderColor="brand.blue" type="text" placeholder="Enter first name" value={firstName} />
            </FormControl>
            <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input focusBorderColor="brand.blue" type="text" placeholder="Enter last name" value={lastName} />
            </FormControl>
            <FormControl id="phoneNumber">
                <FormLabel>Số điện thoại</FormLabel>
                <Input
                    focusBorderColor="brand.blue"
                    type="tel"
                    placeholder='Enter phone number'
                    value={user != null && user.phone != null ? user.phone : ''}
                />
            </FormControl>
            <FormControl id="emailAddress">
                <FormLabel>Email</FormLabel>
                <Input
                    focusBorderColor="brand.blue"
                    type="email"
                    placeholder='Enter email'
                    value={user!=null?user.email:''}
                />
            </FormControl>
            <FormControl id="city">
                <FormLabel>Thành phố</FormLabel>
                <Select focusBorderColor="brand.blue" placeholder="Select city">
                    <option value="california">California</option>
                    <option value="washington">Washington</option>
                    <option value="toronto">Toronto</option>
                    <option value="newyork" selected>
                        New York
                    </option>
                    <option value="london">London</option>
                    <option value="netherland">Netherland</option>
                    <option value="poland">Poland</option>
                </Select>
            </FormControl>
            <FormControl id="country">
                <FormLabel>Quốc gia</FormLabel>
                <Select focusBorderColor="brand.blue" placeholder="Select country">
                    <option value="america" selected>
                        America
                    </option>
                    <option value="england">England</option>
                    <option value="poland">Poland</option>
                </Select>
            </FormControl>
        </Grid>
    )
}

export default AccountSettings
