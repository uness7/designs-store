import { useEffect, useState } from "react";

const CartPanel = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const data = localStorage.getItem("cart-items");
        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    let total = 0;
    if (products) {
        products.forEach((item) => {
            total += item.price;
        });
    }

    const handleDelete = (itemId) => {
        setProducts((prevProducts) =>
            prevProducts.filter((item) => item.id !== itemId)
        );

        if (products) {
            const updatedItems = products.filter((item) => item.id !== itemId);
            localStorage.setItem("cart-items", JSON.stringify(updatedItems));
        }
    };

    return (
        <div className="h-full my-20 flex flex-col justify-center items-center">
            <table className="table-fixed w-1/2 text-center space-x-4">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products
                        ? products.map((item) => {
                              return (
                                  <tr key={item.id}>
                                      <td>{item.title}</td>
                                      <td>{item.price}</td>
                                      <td>
                                          <button
                                              onClick={() => {
                                                  handleDelete(item.id);
                                              }}
                                              className="px-12 rounded-lg py-2 text-white bg-red-500"
                                          >
                                              Delete
                                          </button>
                                      </td>
                                  </tr>
                              );
                          })
                        : null}
                </tbody>
            </table>
            <div className="mt-3 border-blue-400">
                <p className="text-xl">
                    Total: <span>{total}</span>
                </p>
                <button
                    onClick={() => {
                        console.log("checkout");
                    }}
                    className="px-12 py-1 mt-4 rounded-lg bg-blue-800 text-lg text-white"
                >
                    checkout
                </button>
            </div>
        </div>
    );
};

export default CartPanel;
