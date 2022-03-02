import Head from "next/head";
import styles from "styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Container, Input, Link } from '@chakra-ui/react'
import React, { useRef } from "react";


const Home = () => {
  const ref = React.createRef();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof ref.current === 'function') ref.current(e.target.value)
  };
  return (
    <Container className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText ref={ref}/>
        <Input onChange={onChange}/>
      </main>
    </Container>
  );
};

export default Home;
