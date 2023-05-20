import {useEffect, useState} from "react";

const HeroSection = () => {

    const [data, setData] = useState(null);
    // const [first, setFirst] = useState(null);
    // const [second, setSecond] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch('/api/data'); // Assuming the Symfony endpoint is '/api/data'
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="text-center h-96 flex flex-col justify-center">
            <h2>Data Example</h2>
            {data && (
                <ul>
                    <li>Name: {data.name}</li>
                    <li>Age: {data.age}</li>
                    <li>Email: {data.email}</li>
                </ul>
            )}
        </div>
    );
}

export default HeroSection;