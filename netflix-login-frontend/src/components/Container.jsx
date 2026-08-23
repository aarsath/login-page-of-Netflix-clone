import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL || "https://login-page-of-netflix-clone.onrender.com"

function Container() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    function handleLogin(event) {
        event.preventDefault()

        if (email === "" || password === "") {
            setMessage("Please enter both email and password.")
            return
        }

        setMessage("")

        axios.post(`${apiUrl}/login`, {
            Email: email,
            Password: password,
        })
            .then(function (response) {
                if (response.data.success === true) {
                    navigate("/dashboard")
                } else {
                    setMessage("Wrong email or password.")
                }
            })
            .catch(function (error) {
                setMessage(error.response?.data?.message || "Unable to reach the login server. Please try again.")
            })

    }
    
    return(
        <div
            className="w-full max-w-md rounded-lg bg-black/75 p-8 shadow-2xl"
            style={{ boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85)' }}
        >
            <h1 className="mb-8 text-4xl font-bold text-center text-white">Sign In</h1>
            {message !== "" && (
                <p className="mb-6 text-center text-lg font-semibold text-red-400">
                    {message}
                </p>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="Email"
                    className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-4 text-white outline-none placeholder:text-gray-400 focus:border-white"
                />
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-4 text-white outline-none placeholder:text-gray-400 focus:border-white"
                />
                <button type="submit"
                className="w-full rounded bg-red-600 py-4 text-xl font-bold text-white transition hover:bg-red-700">
                    Sign In
                </button>
            </form>
            
            
        </div>
    )

}
export default Container
