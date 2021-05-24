import axios from "axios"
import React, { useState } from "react"

export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {

  const [ user, setUser ] = useState(null)

  const handleRegister = async (user, history) => {
    try {
      let res = await axios.post("/api/auth", user)
      console.log('in handleRegister', res.data.data)
      setUser({ user: res.data.data })
      history.push("/home")
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (user, history) => {
    try {
      let res = await axios.post("/api/auth/sign_in", user)
      console.log('in handleLogin', res.data.data)
      setUser({ user: res.data.data })
      history.push("/home")
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async (history) => {
    try {
      await axios.delete("/api/auth/sign_out");
      setUser({ user: null });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return(
    <AuthContext.Provider
      value={{
        ...user,
        authenticated: user !== null,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        setUser: (user) => setUser(user),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthProvider