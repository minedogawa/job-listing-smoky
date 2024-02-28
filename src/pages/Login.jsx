import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem("isLoggedIn")) {
            console.log("disini");
            return navigate("/jobs");
        }
    }, []);

    function handleOnSubmit(event) {
        event.preventDefault();

        axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "post",
            headers: { "content-type": "application/json" },
            data: {
                username: event.target.username.value,
                password: event.target.password.value,
            },
        })
            .then(() => {
                window.localStorage.setItem("isLoggedIn", true);
                window.location.replace("/jobs");
            })
            .catch((error) => console.log(error));
    }

    //manual login
    // import React, { useState } from "react";

    // export default function Login() {
    //     const [username, setUsername] = useState("");
    //     const [password, setPassword] = useState("");
    //     const [submit, setSubmit] = useState(null);

    //     function handleOnSubmit(event) {
    //         event.preventDefault();
    //         if (username === "admin" && password === "admin") {
    //             setSubmit(true);
    //             window.localStorage.setItem("isLoggedIn", true);
    //             window.location.replace("/jobs");
    //         } else {
    //             setSubmit(false);
    //         }
    //     }

    return (
        <>
            <div className="min-h-screen bg-cyan-light relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f1e32] z-0"></div>
                <main className="flex flex-col items-center px-6 relative z-10 min-h-screen justify-center">
                    {/* <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"> */}
                        {/* <form onSubmit={handleOnSubmit}>
                            <div className="py-8">
                                <center>
                                    <span className="text-2xl font-semibold">
                                        Log In
                                    </span>
                                </center>
                            </div>
                            <div>
                                <label
                                    className="block font-medium text-sm text-gray-700"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                                />
                            </div>

                            <div className="mt-4">
                                <label
                                    className="block font-medium text-sm text-gray-700"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        autoComplete="current-password"
                                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                                    />

                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        <button
                                            type="button"
                                            id="togglePassword"
                                            className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                                style={{
                                                    fill: "rgba(0, 0, 0, 1)",
                                                    transform: "",
                                                    msFilter: "",
                                                }}
                                            >
                                                <path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex items-center justify-end mt-4">
                                <button
                                    onClick={handleOnSubmit}
                                    className="ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form> */}
                        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                            <form onSubmit={handleOnSubmit}>
                                <div className="py-8">
                                    <center>
                                        <span className="text-2xl font-semibold">
                                            Log In
                                        </span>
                                    </center>
                                </div>

                                <div>
                                    <label
                                        className="block font-medium text-sm text-gray-700"
                                        value="Username"
                                    />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                                    />
                                </div>

                                <div className="mt-4">
                                    <label
                                        className="block font-medium text-sm text-gray-700"
                                        value="Password"
                                    />
                                    <div className="relative">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            autoComplete="current-password"
                                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                                        />

                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                            <button
                                                type="button"
                                                id="togglePassword"
                                                className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    viewBox="0 0 24 24"
                                                    style={{
                                                        fill: "rgba(0, 0, 0, 1)",
                                                        transform: "",
                                                        msFilter: "",
                                                    }}
                                                >
                                                    <path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <button className="ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    {/* </div> */}
                </main>
                <img
                    src="https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg"
                    alt="Developer working on code"
                    className="absolute inset-0 h-full w-full object-cover opacity-25"
                />
            </div>
            <header className="flex justify-center items-center bg-no-repeat bg-cover max-h-[20vh]">
                <img
                    className="max-h-[20vh]"
                    src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png"
                    alt="logo"
                />
            </header>
        </>
    );
}
