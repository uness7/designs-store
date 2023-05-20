const DesignsList = () => {

    const designs = [
        {id: 1, title: 'title', url: '#', price: "200 USD"},
        {id: 2, title: 'title', url: '#', price: "200 USD"},
        {id: 3, title: 'title', url: '#', price: "200 USD"},
        {id: 4, title: 'title', url: '#', price: "200 USD"},
        {id: 5, title: 'title', url: '#', price: "200 USD"},
        {id: 6, title: 'title', url: '#', price: "200 USD"},
        {id: 7, title: 'title', url: '#', price: "200 USD"},
        {id: 8, title: 'title', url: '#', price: "200 USD"},
        {id: 9, title: 'title', url: '#', price: "200 USD"},
    ];

    return (

        <div className="h-96 mt-6 py-6 px-4 h-full text-center grid grid-cols-3 gap-x-4 gap-y-2 mx-10">
            {/*grid and flex use gap-1*/}
            {
                designs.map((item)=>(
                    <div
                        key={item.id}
                        className="w-2/3 h-64 mb-6 text-center rounded-md border-2 border-cyan-900 place-self-center flex flex-col justify-between"
                    >

                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                        </div>
                        <button className="px-4 py-2 bg-cyan-900 rounded-b-se">Add to cart</button>
                    </div>
                ))
            }
        </div>
    );
}

export default DesignsList;