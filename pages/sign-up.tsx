import { Link } from "@chakra-ui/react";
import { firebaseConfig } from "config/firebase";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const signUp = (event) => {
    const email = event.target[0].value;
    const password = event.target[1].value;
    if (email && password) {
      initializeApp(firebaseConfig);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('authID', user.uid);
        localStorage.setItem('email', user.email);
        alert("SIGNUP SCCESSS ! Please use" + user.email + "to sign in !");
        window.location.href = "/sign-in";
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
      <form onSubmit={e => signUp(e)}>
        <div className="container-signup">
          <h1>Sign up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required/>

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
          <button type="submit" className="registerbtn">Register</button>
        </div>
      </form>
      
      <div className="container signin">
        <p>Already have an account? <a href="/sign-in">Sign in</a>.</p>
      </div>
    </div>
  );
};

export default SignUp;