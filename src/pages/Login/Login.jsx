import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);

        
    };

    return (
        <div className="card bg-base-100 h-full w-full shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        {/* Email Field */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className={`input ${errors.email ? 'input-error' : ''}`}
                            placeholder="Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && (
                            <span className="label-text-alt text-error mt-1">{errors.email.message}</span>
                        )}

                        {/* Password Field */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className={`input ${errors.password ? 'input-error' : ''}`}
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            })}
                        />
                        {errors.password && (
                            <span className="label-text-alt text-error mt-1">{errors.password.message}</span>
                        )}

                        <div>
                            <a className="link link-hover text-sm">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;