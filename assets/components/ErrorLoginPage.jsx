

const ErrorLoginPage = ({error}) => {
    if(error!==null) {
        return (
            <div className="mt-8 py-2 text-xl  text-center text-red-800 w-1/3 bg-red-400 h-10">
                <h2>{error}</h2>
            </div>
        );
    }
}

export default ErrorLoginPage;
