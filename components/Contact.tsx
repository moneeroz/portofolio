"use client";

import { sendEmail } from "@/utils/actions";
import Link from "next/link";
import { ChangeEvent, useState, useTransition } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  let [isPending, startTransition] = useTransition();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [inputs, setInputs] = useState(initialState);

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">First Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Last Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows={10}
                  name="message"
                  value={inputs.message}
                  onChange={handleChangeMessage}
                  required
                ></textarea>
              </div>
              <button
                onClick={() =>
                  startTransition(() => {
                    if (
                      !inputs.firstName ||
                      !inputs.lastName ||
                      !inputs.email ||
                      !inputs.message
                    ) {
                      return;
                    }

                    sendEmail(inputs);
                    setInputs(initialState);
                  })
                }
                disabled={isPending}
                type="submit"
                className="w-full p-4 text-gray-700 mt-4"
              >
                {isPending ? "Sending message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
