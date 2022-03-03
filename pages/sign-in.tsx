import { Link } from "@chakra-ui/react";
import { firebaseConfig } from "config/firebase";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

const SignIn = () => {
  const signIn = (event) => {
    const email = event.target[0].value;
    const password = event.target[1].value;
    if (email && password) {
      initializeApp(firebaseConfig);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("SIGNIN SCCESSS !");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
    event.preventDefault();
  }
  return (
    <div>
      <Link href='/'>Back to Home</Link>
      <form onSubmit={e => signIn(e)}>
        <div className="container-signup">
          <h1>Sign in</h1>
          <p>Please fill in this form to sign-in.</p>
          <hr/>

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required/>

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
          <button type="submit" className="registerbtn">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;