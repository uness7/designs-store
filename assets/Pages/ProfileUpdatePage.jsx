import {useEffect, useState} from 'react';

const ProfileUpdatePage = () => {

    const [data, setData] = useState({});
    const {firstName, lastName, addressLineOne, addressLineTwo, city, country, email, phoneNumber, orders, designs} = data;

    useEffect(()=>{
        const fetchRole = () => {
            try {
                 fetch('/api/dashboard')
                 .then((res) => res.json())
                 .then(data => {                    
                     setData(data.user);                 
                 });
            } catch (error) {
                 console.log(error);
            }
         }      
         fetchRole();    
    }, []);

    return (<div>
        <div>
            <h1>hello thers</h1>
        </div>
    </div>);
}

export default ProfileUpdatePage;