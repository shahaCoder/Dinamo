"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
   const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(form); // тут можешь отправить форму на сервер
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
         <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#154284]">
               Register
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Name
                  </label>
                  <input
                     type="text"
                     name="name"
                     value={form.name}
                     onChange={handleChange}
                     required
                     className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#154284] focus:border-[#154284]"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Email
                  </label>
                  <input
                     type="email"
                     name="email"
                     value={form.email}
                     onChange={handleChange}
                     required
                     className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#154284] focus:border-[#154284]"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <input
                     type="password"
                     name="password"
                     value={form.password}
                     onChange={handleChange}
                     required
                     className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#154284] focus:border-[#154284]"
                  />
               </div>

               <button
                  type="submit"
                  className="w-full bg-[#154284] text-white py-2 px-4 rounded-md hover:bg-[#103568] transition"
               >
                  Sign Up
               </button>
            </form>
         </div>
      </div>
   );
};

export default Page;
