"use client"; // if you're in Next.js app router

import React, { useState } from "react";
import {
    FaUserCircle,
    FaEnvelope,
    FaPhone,
    FaPen,
    FaCommentAlt,
} from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    // handle input change
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/contact/send`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="form-control items-center relative">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="input input-bordered w-full py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaUserCircle
                    size={20}
                    className="absolute top-[36%] right-0 mr-5 opacity-40"
                />
            </div>

            <div className="form-control relative">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaEnvelope
                    size={20}
                    className="absolute top-[36%] right-0 mr-5 opacity-40"
                />
            </div>

            <div className="form-control relative">
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaPhone
                    size={20}
                    className="absolute top-[36%] right-0 mr-5 opacity-40"
                />
            </div>

            <div className="form-control relative">
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaPen
                    size={20}
                    className="absolute top-[36%] right-0 mr-5 opacity-40"
                />
            </div>

            <div className="form-control relative">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered py-10 focus:bg-[#58547034] bg-transparent"
                    placeholder="Message"
                />
                <FaCommentAlt
                    size={20}
                    className="absolute top-[36%] right-0 mr-5 opacity-40"
                />
            </div>

            <div className="form-control mt-6">
                <button
                    
                    className="rounded-md border border-[#5C27FE] bg-[#171F38] px-12 py-3 text-[#5C27FE] duration-300 hover:border-[#808DAD] hover:text-[#808DAD]"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
