import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import SocialLogin from '../Login/SocialLogin';
import axios from 'axios';

const Register = () => {
    const { createUserFunc, updateUserProfile } = use(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegistration = (data) => {
        console.log(data.name)


        console.log(data.photo[0])
        const profileImg = data.photo[0];

        createUserFunc(data.email, data.password)
            .then(res => {
                // store the Image

                const formData = new FormData()
                formData.append('image', profileImg)
                const api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_api_key}`

                axios.post(api_url, formData)
                    .then(res => {
                        const displayProfile = {
                            displayName: data.name,
                            display_url: res.data.data.display_url
                        }
                        updateUserProfile(displayProfile)
                            .then(() => console.log('Update Done'))
                            .catch(err => console.log(err))
                        // console.log(display)
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.error(err))

    };

    return (
        <div className="card bg-base-100 h-full w-full shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <fieldset className="fieldset">
                        {/* Name Field */}
                        <label className="label">Name</label>
                        <input
                            type="name"
                            className={`input ${errors.name ? 'input-error' : ''}`}
                            placeholder="Your Name"
                            {...register("name", {
                                required: "Name is required"
                            })}
                        />

                        {errors.email && (
                            <span className="label-text-alt text-error mt-1">{errors.email.message}</span>
                        )}
                        {/* Photo Field */}
                        <label className="label">Photo</label>
                        <input
                            type="file"
                            className={`file-input ${errors.name ? 'input-error' : ''}`}
                            placeholder="Choose File"
                            {...register("photo", {
                                required: "Photo is required"
                            })}
                        />

                        {errors.email && (
                            <span className="label-text-alt text-error mt-1">Photo Is Required</span>
                        )}

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
                        <p className='text-center mt-5'>or</p>
                        <SocialLogin />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;