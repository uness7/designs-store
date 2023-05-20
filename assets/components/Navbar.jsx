


const Navbar = () => {
    return (
        <div className="p-4 text-xl flex flex-row justify-between border-b-2 border-black">
            <h2 className="ml-4 text-2xl">Designs For Y</h2>
            <div className="flex flex-row justify-between px-4">
                <a className="mr-4 cursor-pointer">Home</a>
                <a className="mr-4 cursor-pointer">Sign In</a>
            </div>
        </div>
    );
}

export default Navbar;