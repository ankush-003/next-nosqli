"use client";
import { useState } from "react";
import {Alert, AlertColor} from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Zoom from '@mui/material/Zoom';
interface LoginFormProps {
  safe: boolean;
}
export default function LoginForm({ safe }: LoginFormProps) {
  const [logged, setLogged] = useState(false);
  const [severity: AlertColor, setSeverity] = useState("info");
  const [message, setMessage] = useState("");
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const url = safe ? "/apiSafe" : "/apiUnsafe";
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    // const data = JSON.parse(json.result);
    // console.table(json);
    // alert(json.result)
    setLogged(true);
    if(!json.result[0]) {
      setSeverity("error")
      setMessage("Login Failed")
    } else {
      setSeverity("success")
      setMessage(`Welcome ${json.result[0]['username']}`)
    }
    // setMessage(json.result);
  }
  return (
    <>
    <div className="p-2 mt-3 text-center">
    <Zoom style={{ transitionDelay: logged ? '500ms' : '0ms' }} in={logged} mountOnEnter unmountOnExit>
          {
            <Alert severity={severity}>
            <AlertTitle>{message}</AlertTitle>
            </Alert>
          }
        </Zoom>
      </div>
    <div className="flex justify-center items-center mt-8 pt-8 ">
      <form
        className=" shadow-md  rounded px-12 py-12 mb-6 mt-6 backdrop-blur-2xl"
        // action={safe ? "/apiSafe" : "/apiUnsafe"}
        // method="POST"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="username"
            name="username"
            id="floating_username"
            className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_username"
            className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {/*Submit Button*/}
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
  );
}
