import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  // const auth = getAuth();
  return (
    <div>
      <div className="container-signup">
        <h1>Sign up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" />

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" />
        <button type="submit" className="registerbtn">Register</button>
      </div>
      
      <div className="container signin">
        <p>Already have an account? <a href="/sign-in">Sign in</a>.</p>
      </div>
    </div>
  );
};

export default SignUp;