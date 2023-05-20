

const SignupForm = () => {
    return (
        <div className="h-screen">
            <form className="border-2 border-black w-1/3 h-96 m-auto">
                <label htmlFor="name">First Name
                    <input name="name" type="text" />
                </label>

                <label>
                    <input type="text" />
                </label>
                <label>
                    <input type="email" />
                </label>
                <label>
                    <input type="password" />
                </label>
                <label>
                    <input type="password" />
                </label>

            </form>
        </div>
    );
}

export default SignupForm;