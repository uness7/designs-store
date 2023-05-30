import { useEffect, useState } from "react";

const DesignsList = () => {
    const [cartItems, setCartItems] = useState([]);

    const designs = [
        { id: 1, title: "one", url: "#", price: 200 },
        { id: 2, title: "two", url: "#", price: 200 },
        { id: 3, title: "three", url: "#", price: 200 },
        { id: 4, title: "four", url: "#", price: 200 },
        { id: 5, title: "five", url: "#", price: 200 },
        { id: 6, title: "six", url: "#", price: 200 },
        { id: 7, title: "seven", url: "#", price: 200 },
        { id: 8, title: "eight", url: "#", price: 200 },
        { id: 9, title: "nine", url: "#", price: 200 },
    ];

    // Storing cart items into localStorage
    useEffect(() => {
        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-6 py-6 px-4 h-full text-center grid grid-cols-3 gap-x-4 gap-y-2 mx-10">
            {/*grid and flex use gap-1*/}
            {designs.map((item) => (
                <div
                    key={item.id}
                    className="w-2/3 h-64 mb-6 text-center rounded-md border-2 border-cyan-900 place-self-center flex flex-col justify-between"
                >
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                    </div>
                    <button
                        onClick={() => {
                            setCartItems((prevItems) => [...prevItems, item]);
                        }}
                        className="px-4 py-2 text-white bg-blue-900 rounded-b-sm hover:bg-blue-600"
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default DesignsList;
