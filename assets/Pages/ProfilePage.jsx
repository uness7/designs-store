import {useEffect, useState} from 'react';

const ProfileUpdatePage = () => {

    const [data, setData] = useState({});
    const {firstName, lastName, addressLineOne, addressLineTwo, city, country, email, phoneNumber, orders, designs} = data;

    useEffect(()=>{
        const fetchRole = () => {
            try {
                fetch('/api/dashboard/user-profile')
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

    return (
        <div className="flex flex-col justify-center items-center text-xl">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{addressLineOne}</p>
            {/*<p>{*/}
            {/*    addressLineTwo ?*/}
            {/*        (*/}
            {/*            <div>*/}
            {/*                <p>{addressLineTwo}</p>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*        :*/}
            {/*        (*/}
            {/*            <div>*/}
            {/*                <p>No 2nd address line was found</p>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*}</p>*/}
            <p>{city}</p>
            <p>{country}</p>
            <p>{phoneNumber}</p>
        </div>
    );
}

export default ProfileUpdatePage;