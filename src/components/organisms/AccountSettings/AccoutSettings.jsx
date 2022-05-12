import { Box, Button, FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../../firebase/config';
import { locationSelector, userSelector } from '../../../redux/selectors';
import { login } from '../../../redux/user/userSlice';


function AccountSettings() {
    const user = useSelector(userSelector);
    const location = useSelector(locationSelector);
    const [phoneNumber, setPhoneNumber] = useState(user != null && user.phoneNumber != null ? user.phoneNumber : '');
    const [email, setEmail] = useState(user != null ? user.email : '');
    const [firstName, setFirstName] = useState(user != null ? user.firstName : '');
    const [lastName, setLastName] = useState(user != null ? user.lastName : '');
    const [city, setCity] = useState(user != null ? user.city : '');
    const dispatch = useDispatch();


    async function handleClick() {
        const querySnapshot = await getDocs(collection(db, "users"));
        let documentsID;
        querySnapshot.forEach((doc) => {
            if (doc.data().uid == user.uid) {
                documentsID = doc.id;
                return;
            }
        });
        if (user != null) {
            const data = {
                uid: user.uid,
                email: email,
                displayName: lastName + ' ' + firstName,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                photoURL: user.photoURL,
                city: city
            };
            setDoc(doc(collection(db, 'users'), documentsID), data);
            dispatch(login(data))
        }
    }

    return (
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={6}>
            <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input focusBorderColor="brand.blue" type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input focusBorderColor="brand.blue" type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </FormControl>
            <FormControl id="phoneNumber">
                <FormLabel>Số điện thoại</FormLabel>
                <Input
                    focusBorderColor="brand.blue"
                    type="tel"
                    placeholder='Enter phone number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </FormControl>
            <FormControl id="emailAddress">
                <FormLabel>Email</FormLabel>
                <Input
                    focusBorderColor="brand.blue"
                    type="email"
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="city">
                <FormLabel>Thành phố</FormLabel>
                <Select focusBorderColor="brand.blue" placeholder="Chọn thành phố" value={city} onChange={(e) => setCity(e.target.value)}>
                    {location.cityOptions.map((item) => (
                        <option key={item.Id} value={item.Name}>
                            {item.Name}
                        </option>
                    ))}
                </Select>
            </FormControl>
            <br />
            <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
                <Button onClick={handleClick}>Cập nhật</Button>
            </Box>
        </Grid>
    )
}

export default AccountSettings
