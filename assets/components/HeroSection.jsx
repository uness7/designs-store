import image from '../Images/img-1.jpg';
const HeroSection = () => {
    return (
        <div className="text-center mt-6 h-96 mx-5 flex flex-col items-center justify-center border-2 border-slate-300 rounded-md">
            {/*<img src={image} alt="hero-section" />*/}
            <div className="mb-2 w-1/2">
                <h1 className="font-black text-6xl mb-7">One card fits all</h1>
                <p className="text-xl mb-4 font-medium">You give. They get just what they want. The instant gift card that unlocks whatever they love.</p>
            </div>
            <button className="px-4 py-2 bg-cyan-900 text-white" type="submit" >Get yours now</button>
        </div>
    );
}

export default HeroSection;