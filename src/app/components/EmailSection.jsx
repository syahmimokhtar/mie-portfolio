"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import ToastPopup from "./ToastPopup";

const formdata = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState(formdata);
  const [loading, setLoading] = useState(false); // New state for loading indicator
  const [showToast, setShowToast] = useState(true);
  const [active, isActive] = useState(false);
  const [toastcolorActive, settoastColorActive] = useState(false);
  const [successText, setSuccessText] = useState(false);

  const buttonClasses = active
    ? "from-green-300 via-blue-500 to-purple-700 bg-gradient-to-br "
    : `from-blue-300 via-blue-500 to-blue-700 bg-gradient-to-br `;
  const color = toastcolorActive ? `bg-green-500` : `bg-red-500`;
  const text = successText ? "Email sent successfully!" : "Failed to send email. Please try using a different email provider, such as Gmail or Outlook.";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    isActive(true);
    setLoading(true); // Set loading to true when form issubmitted
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      var endpoint = "/api/home";
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const response = await fetch(endpoint, options);

      if (response.ok) {
        const data = await response.json();

        if (data.error) {
          setEmailSubmitted(true);
          setShowToast(true);
          setLoading(false);
          isActive(false);
          setSuccessText(false);
          settoastColorActive(false);
        } else {
          console.log("Message sent.");
          setEmailSubmitted(true);
          setFormData({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
          setSuccessText(true);
          setShowToast(true);
          setLoading(false);
          isActive(false);
          settoastColorActive(true);
        }
      } else {
        const errorData = await response.json();
        console.error("Request failed:", errorData);
      }
    } catch (error) {
      setShowToast(true);
      setEmailSubmitted(false);
      console.log("error sending email", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/syahmimokhtar">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/muhammad-syahmi-118458189/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="your name..."
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi...."
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 h-40 "
              placeholder="Let's talk about / leave me a message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center ${buttonClasses}
            text-white font-medium py-2.5  px-5 rounded-lg w-full `}
          >
            {loading ? (
              <>
                <span>Submitting </span>
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-100"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.582 0-6.747-1.548-8.972-4.009l1.972-2.7z"
                  ></path>
                </svg>
              </>
            ) : (
              `Submit`
            )}
          </button>
          {emailSubmitted && (
            <>
              <ToastPopup
                text={text}
                showToast={showToast}
                handleClose={handleCloseToast}
                toastcolor={color}
              />
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
