"use client";

import useForm from "@/lib/hooks/UseForm";
import axios from "axios";

const SignUpForm = () => {
  const initialValue = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useForm(initialValue);

  const onSubmit = async () => {
    await axios.post(
      `http://localhost:3000/api/auth/signup`,
      formValues,
    ).then(async (res) => {
      console.log(JSON.stringify(res));
    });

    // console.log({ response });

    console.log("Account created!");
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5 flex">
        <div className="mr-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            minLength={2}
            maxLength={16}
            onChange={setFormValues}
            className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            minLength={2}
            maxLength={16}
            onChange={setFormValues}
            className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          name="email"
          maxLength={300}
          onChange={setFormValues}
          className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="johndoe@example.com"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          name="password"
          minLength={8}
          maxLength={16}
          onChange={setFormValues}
          className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirm password
        </label>
        <input
          type="password"
          name="passwordConfirmed"
          minLength={8}
          maxLength={16}
          className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-600 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            required
          />
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        onSubmit={onSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
