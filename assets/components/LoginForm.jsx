import {useForm} from "react-hook-form";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // save method is responsible for sending data to our backend api
    const save = data => console.log(data);

    // note: delete id htmlFor needs name attribute not the id


    return (
        <div className="h-full flex justify-center items-center my-24">
            <form
                className="px-6 py-4 text-lg shadow-md rounded border-2 border-slate-300  w-2/4 h-full m-auto"
                onSubmit={handleSubmit(save)}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="text" placeholder="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="password"
                        {...register('password')}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-cyan-900 px-4 py-2 text-white">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;