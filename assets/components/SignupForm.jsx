import {zodResolver} from "@hookform/resolvers/zod";
import {z} from 'zod';
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";


    const SignupForm = () => {

        const countries = [
            'Morocco',
            'France',
            'USA'
        ];

        const cities = [
            'Casablanca',
            'Paris',
            'NYC'
        ];

        const signupSchema = z.object({
            firstName: z.string().nonempty().min(3),
            lastName: z.string().nonempty().min(3),
            addressLineOne: z.string().nonempty().min(10),
            addressLineTwo: z.string().optional(),
            city: z.string().toUpperCase().nonempty(),
            country: z.string().toUpperCase().nonempty(),
            phone: z.string().nonempty().min(10),
            email: z.string().email().nonempty(),
            password: z.string().min(8)
        });

    async function save(data) {
        const {firstName, lastName, addressLineOne, addressLineTwo, city, country, phone, email, password} = data;
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('city', city);
        formData.append('country', country);
        formData.append('phone', phone);
        formData.append('addressLineOne', addressLineOne);
        formData.append('addressLineTwo', addressLineTwo);
        formData.append('password', password);

        const res = await fetch('/signup', {
            method: 'POST',
            body: formData
        });

        if (res.ok)
            console.log('ok');
    }


    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(signupSchema)});

    return (
        <div className="h-full flex justify-center items-center mt-6">
            <form
                className="px-6 py-4 text-lg shadow-md rounded border-2 border-slate-300  w-2/3 h-full m-auto"
                onSubmit={handleSubmit(save)}
            >
                <div className="grid grid-cols-2 gap-x-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fName">First Name</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="fName"
                            placeholder="firstName"
                            {...register('firstName')}
                        />
                        <div className="text-sm text-red-700">{errors.firstName?.message}</div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lName">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lName"
                            type="text" placeholder="lastName"
                            {...register('lastName')}
                        />
                    </div>
                    <div className="text-sm text-red-700">{errors.lastName?.message}</div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addOne">Address Line</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="addOne"
                        type="text" placeholder="Address Line"
                        {...register('addressLineOne')}
                    />
                    <div className="text-sm text-red-700">{errors.addressLineOne?.message}</div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addTwo">Address Line (optional)</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="addTwo"
                        type="text" placeholder="Address Line"
                        {...register('addressLineTwo')}
                    />
                    <div className="text-sm text-red-700">{errors.addressLineTwo?.message}</div>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cityId">City</label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cityId"
                            {...register('city')}
                        >
                            {
                                cities.map((item)=> (
                                    <option
                                        key={item}
                                    >{item}</option>
                                ))
                            }
                        </select>

                        <div className="text-sm text-red-700">{errors.city?.message}</div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="countryId">Country</label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="countryId"
                            {...register('country')}
                        >
                            {
                                countries.map((item)=> (
                                    <option
                                        key={item}
                                    >{item}</option>
                                ))
                            }
                        </select>
                        <div className="text-sm text-red-700">{errors.country?.message}</div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneId">Phone</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phoneId"
                        type="text" placeholder="phone"
                        {...register('phone')}
                    />
                    <div className="text-sm text-red-700">{errors.phone?.message}</div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailId">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="emailId"
                        type="text" placeholder="email"
                        {...register('email')}
                    />
                    <div className="text-sm text-red-700">{errors.email?.message}</div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordId">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="passwordId"
                        type="text" placeholder="password"
                        {...register('password')}
                    />
                    <div className="text-sm text-red-700">{errors.password?.message}</div>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-cyan-900 px-4 py-2 text-white">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;