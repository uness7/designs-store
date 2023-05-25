// import {useNavigate} from "react-router-dom";
// import {useEffect, useState} from "react";


// const LogoutPage = () => {

//     const navigate = useNavigate();
//     const [url, setUrl] = useState('');

//     useEffect(()=> {
//         fetch('/logout', {
//             method: 'POST',
//             credentials: 'include'
//         })
//         .then((res) => res.json())
//         .then( (data) => {
//             console.log(data.url);
//             setUrl(data.url);
//         })
//         .catch(error => console.log(error));
//     }, []);

//     useEffect(()=> {
//         if(url !== '') {
//             navigate(url);
//         }
//     }, [url]);

//     return (
//         <>
//             <div className="flex flex-col justify-center text-2xl border-2 border-black w-96 h-full m-auto">
//                 <h1>You are logging out....</h1>
//             </div>
//         </>
//     );

// }

// export default LogoutPage;


import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LogoutPage = () => {
  const navigate = useNavigate();
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    fetch('/logout', {
      method: 'POST',
      credentials: 'include',
    })
    .then((res) => {
    setRedirectUrl(res.headers.get('Location') || '/');
    })
    .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (redirectUrl) {
      navigate(redirectUrl);
    }
  }, [redirectUrl, navigate]);

  return (
    <div className="top-1/2, left-1/2, -translate-x-1/2, -translate-y-1/2 text-2xl border-2 border-black w-96 h-full m-auto">
      <h1>You are logging out....</h1>
    </div>
  );
};

export default LogoutPage;
