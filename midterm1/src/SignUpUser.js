import React from 'react';

import { useForm } from 'react-hook-form';

 

const SignUpUser = () => {

  const { register,

    handleSubmit,

    formState: { errors }

} = useForm();

 

 

  const onSubmit = (data) => {

    if (data.password !== data.confirmPassword) {

      alert('Passwords do not match!');

    } else {

      alert(JSON.stringify(data));

      console.log(data);

    }

  };

 

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div>

        <label>First Name:</label>

        <input

         type="text"

        {...register("firstName", { required: true })} />

        {errors.firstName && <span>required**</span>}

      </div>

      <div>

        <label>Last Name:</label>

        <input

         type="text"

        {...register("lastName", { required: true })} />

        {errors.lastName && <span>required**</span>}

      </div>

      <div>

        <label>Username:</label>

        <input

         type="text"

        {...register("userName", { required: true })} />

        {errors.userName && <span>required**</span>}

      </div>

      <div>

        <label>Email:</label>

        <input

        type="email"

        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

        {errors.email && <span>Invalid email!!!!</span>}

      </div>

      <div>

        <label>Password:</label>

        <input

        type="password" {...register("password", { required: true })} />

        {errors.password && <span>required**</span>}

      </div>

      <div>

        <label>Confirm Password:</label>

        <input

        type="password" {...register("confirmPassword", { required: true })} />

        {errors.confirmPassword && <span>required**</span>}

      </div>

      <button type="submit">Submit</button>

    </form>

  );

};

 

export default SignUpUser;