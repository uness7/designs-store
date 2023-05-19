import {useEffect, useState} from "react";

const HeroSection = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const res = await fetch('/api/data');
            const data = await res.json();
            setData(res);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="w-screen h-96 bg-cyan-900 text-center">
            <h2>i'm hero section</h2>
            <p>{data.map((element)=>{
                element?.name
            })}</p>
        </section>
    );
}

export default HeroSection;