import { Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import CardServices from "../CardServices";
import CardContact from "../CardContact";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject:"",
    message: "",
  });
// utilisation d'un hook state qui représnete le succès du formulaire
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");
// ajout d'un event
  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    //  à la soumission du formulaire la page ne dois pas refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };
  return (
    <section className="container">
      <div className="mb-24">
        {formSuccess ? (
          <div>{formSuccessMessage}</div>
        ) : (
          <form className="max-w-4xl mx-auto" method="POST">
            <div className="flex mb-10 gap-5 md:gap-10">
              <div className="w-full text-white overflow-hidden border border-black">
                <Input
                  name="name"
                  id="name"
                  type="name"
                  className="overflow-hidden"
                  color="error"
                  size="xl"
                  width="100%"
                  underlined
                  clearable
                  contentRightStyling={false}
                  placeholder="Your Name"
                  aria-label="Your Name"
                  onChange={handleInput}
                  value={formData.name}
                />
              </div>
              <div className="w-full text-white overflow-hidden border border-black">
                <Input
                  name="email"
                  id="email"
                  type="email"
                  color="error"
                  size="xl"
                  width="100%"
                  underlined
                  clearable
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  onChange={handleInput}
                  value={formData.email}
                />
              </div>
            </div>
            <div className="mb-10">
              <div className="w-full text-white overflow-hidden border border-black">
                <Input
                  name="subject"
                  type="subject"
                  id="subject"
                  color="error"
                  size="xl"
                  width="100%"
                  underlined
                  clearable
                  placeholder="Subject"
                  aria-label="Subject"
                  onChange={handleInput}
                  value={formData.message}
                />
              </div>
            </div>
            <div className="w-full text-white overflow-hidden border border-black">
              <Textarea
                name="message"
                id="message"
                size="xl"
                width="100%"
                color="error"
                underlined
                placeholder="How can I help you?"
                aria-label="Message"
                onChange={handleInput}
                value={formData.message}
              />
            </div>
            <div className="text-center pt-10 text-2xl">
              <button
                className="shine-button bg-transparent hover:bg-[#ff5d56] text-[#ff5d56] transition-all duration-500 hover:text-white py-4 px-8 border border-[#ff5d56]"
                type="submit"
              >
                Contact Now
              </button>
            </div>
          </form>
        )}
        <CardContact/>
      </div>
    </section>
  );
}
