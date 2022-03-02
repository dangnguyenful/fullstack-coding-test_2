import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "config/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useTheme
} from '@chakra-ui/react'
const Blog = () => {
    const [list, setList] = useState([]);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function getBlogs(db) {
        const blogCol = collection(db, 'blogs');
        const blogSnapshot = await getDocs(blogCol);
        const blogList = blogSnapshot.docs.map(doc => doc.data());
        return blogList;
    }

    let listItem = list.map(item => {
        return (
            <li onClick={onOpen}>{item.title}</li>
        )
    });

    const allBlogs = getBlogs(db).then(res => {
        if (res) {
            setList(res)
        }
    }).catch(error => console.log(error));

    return (
        <div>
            <ul>
                {listItem}
            </ul>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc 
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Blog;