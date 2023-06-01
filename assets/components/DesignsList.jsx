import { useEffect, useState } from "react";

const DesignsList = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState();

    useEffect(()=>{
        const fetchProducts = () => {
            fetch('/api/products')
                .then(res => res.json())
                .then((data)=>{
                    setProducts(data.products);
                });
        };
        fetchProducts();
    }, [])

    // Storing cart items into localStorage
    useEffect(() => {
        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-6 py-6 px-4 h-full text-center grid grid-cols-3 gap-x-4 gap-y-2 mx-10">
            {/*grid and flex use gap-1*/}
            {
                products ? (
                    products.map((item) => (
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
                                className="px-4 py-2 text-white bg-cyan-900 rounded-b-sm hover:bg-blue-600"
                            >
                                Add to cart
                            </button>
                        </div>
                    ))
                )
                : (
                    <>
                        <p>There are no products for the moment</p>
                    </>
                )
            }
        </div>
    );
};

export default DesignsList;
