import React from 'react'

const Signup = () => {
  return (
    <div>

        <div class="container">
            <h1>Sign Up</h1>
            <form action="addEmpDetails" >
                <label for="userName">Username:</label>
                <input type="text" id="userName" name="userName" required /><br />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required /><br />

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required /><br />

                <label for="mobileNumber">Mobile Number:</label>
                <input type="number" id="mobileNumber" name="mobileNumber" />
                
                <input type="submit" value="Sign Up" />

                <p>Already have an account? <a href="Login.jsp">SignIn here</a></p>
            </form>
        </div>
    </div>
  )
}

export default Signup