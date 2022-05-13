import {
    Badge,
    Box,
    Button,
    HStack,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db, storage } from '../../../firebase/config';
import { getDocID, pushToast } from '../../../firebase/service';
import { userSelector } from '../../../redux/selectors';
import { login } from '../../../redux/user/userSlice';

const cover = require("../../../assets/images/cover.png").default

export default function Cover() {
    const user = useSelector(userSelector);
    const [coverImage, setCoverImage] = useState(user == null ? cover : user.coverURL);
    const inputRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const openChooseFile = () => {
        inputRef.current.click();
    }
    const toast = useToast();
    async function handleChangeCover(event) {
        const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
        const selected = event.target.files[0]

        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            try {
                let reader = new FileReader();
                reader.onloadend = () => setCoverImage(reader.result);

                const storageRef = ref(storage, 'images/' + selected.name);

                /** @type {any} */
                const metadata = {
                    contentType: 'image/jpeg',
                };
                await uploadBytes(storageRef, selected, metadata);

                const documentsID = await getDocID(user);
                getDownloadURL(ref(storage, 'images/' + selected.name)).then((url) => {
                    const userRef = doc(db, "users", documentsID);
                    updateDoc(userRef, {
                        coverURL: url
                    });
                    dispatch(login(
                        {
                            ...user,
                            coverURL: url
                        }
                    ))
                    pushToast(
                        toast,
                        'Thành công',
                        "Ảnh bìa của bạn đã được lưu",
                        'success',
                    )
                });

                return reader.readAsDataURL(selected);
            } catch (err) {
                pushToast(
                    toast,
                    'Thất bại',
                    "Opp! đã có lỗi xảy ra :(",
                    'error',
                )
            }
        }

        onOpen()
    }

    return (
        <Box h={80} >
            <Image
                w="full"
                h="full"
                objectFit="cover"
                src={coverImage}
                alt="Cover"
            />
            <Button
                onClick={openChooseFile}
                position="absolute"
                top={4}
                right={20}
                variant="ghost"
            >
                <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    />
                </svg>
                <Text ml={2}>Thay hình nền</Text>
                <input ref={inputRef} type="file" onChange={handleChangeCover} hidden />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Something went wrong</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>File not supported!</Text>
                        <HStack mt={1}>
                            <Text color="brand.cadet" fontSize="sm">
                                Supported types:
                            </Text>
                            <Badge colorScheme="green">PNG</Badge>
                            <Badge colorScheme="green">JPG</Badge>
                            <Badge colorScheme="green">JPEG</Badge>
                        </HStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
