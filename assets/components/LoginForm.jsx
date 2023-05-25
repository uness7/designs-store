
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../Context/UserContext'
import ErrorLoginPage from "./ErrorLoginPage";

const LoginForm = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const [csrfToken, setCsrfToken] = useState('');
    const [url, setUrl] = useState('');
    const [isSubmited, setIsSubmitted] = useState(false);
    

    // eslint-disable-next-line no-unused-vars
    const [_, setUserContext] = useContext(UserContext);

    useEffect(()=>{
        fetch('/api/login')
            .then(res => res.json())
            .then(data => {
                setCsrfToken(data.csrfToken.value);                
            });
    }, []);

    
    useEffect(()=>{
        if(isSubmited) {
            const fetchRole = () => {
               try {
                    fetch('/api/dashboard')
                    .then((res) => res.json())
                    .then(data => {
                        // console.log(data.user.roles[0])
                        setUserContext(data.user.roles[0]);                        
                    });
               } catch (error) {
                    console.log(error);
               }
            }      
            fetchRole();      
        }
        
    }, [isSubmited]);
    
    

    const save = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('_csrf_token', csrfToken);

        const response = await fetch('/api/login', {
            method: 'POST',
            body: formData,
            credentials: 'include',
        });
        const data = await response.json();
        setUrl(data.url);
        setError(data.error?.messageKey);      
        setIsSubmitted(true);
    }

    useEffect(()=> {
        if(url !== '') {
            navigate(url);
        }
    }, [url]);


    return (
        <div className="h-full flex flex-col justify-center items-center my-24">
            <form
                className="px-6 py-4 text-lg shadow-md rounded border-2 border-slate-300  w-2/4 h-full m-auto"
                onSubmit={save}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email" 
                        placeholder="Email"
                        value={email}
                        id="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    </label>
                </div>
                <input type="hidden" name="_csrf_token" value="authenticate" />
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password                    
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Password"
                            value={password}
                            id="password"     
                            onChange={(e)=>{setPassword(e.target.value)}}                      
                        />
                    </label>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-cyan-900 px-4 py-2 text-white">Signin</button>
                </div>
            </form>
            <ErrorLoginPage error={error} />           
        </div>
    );
}

export default LoginForm;