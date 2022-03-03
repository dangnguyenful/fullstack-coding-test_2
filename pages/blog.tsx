import React, { useEffect, useState } from "react";
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
    Link,
} from '@chakra-ui/react'
const Blog = () => {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function getBlogs(db) {
        const blogCol = collection(db, 'blogs');
        const blogSnapshot = await getDocs(blogCol);
        const blogList = blogSnapshot.docs.map(doc => doc.data());
        return blogList;
    }

    const popUp = (item) => {
        setTitle(item.title);
        setDescription(item.description);
        onOpen();
    } 

    const renderItems = list.map((item) => {
        return (
            <ul className="blog-area">
                <li className="blog-item" onClick={() => popUp(item)}>
                    <img src={item.image}/>
                    <label>{item.title}</label>
                </li>
            </ul>
        );
    });

    useEffect(() => {
        getBlogs(db).then(res => {
            if (res) {
                setList(res)
            }
        }).catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Link href='/'>Back to Home</Link>
            {renderItems}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        {description}
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