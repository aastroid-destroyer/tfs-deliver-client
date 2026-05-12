import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const Login = () => {
    const { loginInUser } = use(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = (data) => {
        loginInUser(data.email, data.password)
            .then(res => console.log(res))
            .catch(err => console.log(err))


    };

    return (
        <div className="card bg-base-100 shadow-2xl h-full border border-base-200">
            <div className="card-body flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Login</h2>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    <fieldset className="fieldset p-0">
                        {/* Email Field */}
                        <label className="label font-semibold">Email</label>
                        <input
                            type="email"
                            className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email?.type === 'required' && (
                            <p className='text-xs text-red-600 mt-1'>Email is required</p>
                        )}

                        {/* Password Field */}
                        <label className="label font-semibold mt-2">Password</label>
                        <input
                            type="password"
                            className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
                            placeholder="Password"
                            {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password?.type === 'minLength' && (
                            <p className='text-xs text-red-600 mt-1'>Minimum 6 characters required</p>
                        )}

                        <div className="mt-2">
                            <a className="link link-hover text-sm opacity-70">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn bg-[#CAEB66] hover:bg-[#b8d855] w-full mt-6 text-black border-none">
                            Login
                        </button>
                    </fieldset>

                    <p className="text-center mt-4">
                        New to TFS Deliver?
                        <Link to={'/register'} className='text-primary font-bold hover:underline ml-1'>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;