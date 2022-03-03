import Head from "next/head";
import styles from "styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Container, Input, Link } from '@chakra-ui/react'
import React, { useRef } from "react";


const Home = () => {
  const ref = React.createRef();
  const authID = localStorage.getItem('authID');
  const emailUser = localStorage.getItem('email');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof ref.current === 'function') ref.current(e.target.value)
  };
  return (
    <Container className={styles.container}>
      {authID && emailUser ? <div>Hello, {emailUser}</div> : null}
      <br/>
      <br/>
      <br/>
      <div>
        <Link href='/sign-up'>Sign-up</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href='/blog'>Blog</Link>
      </div>
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
export async function getStaticProps(context) {
  return {
    props: {
      protected: true
    }
  };
}