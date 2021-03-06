import React, { useState } from "react"
import userData from "../data/data.js"
import { Field, Form } from "react-final-form"
import { FORM_ERROR } from "final-form"

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col md:my-20 my-10 mb-4">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8 p-4 md:p-0 mb-4 md:mb-0">
              <a
                href={userData.socialLinks.github}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-gray-50"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href={userData.socialLinks.twitter}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

const ErrorDisplay = ({ message }) => (
  <p className="font-light text-red-500 mx-4">{message}</p>
)

const required = value => (value ? undefined : "Please fill in detail")

const ContactForm = () => {
  const [isSubmittedForm, setIsSubmittedForm] = useState(false)

  const onSubmit = values => {
    let request = new Request("https://app.99inbound.com/api/e/zJ0g2v8G")

    return fetch(request, {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          return {
            [FORM_ERROR]: "Something went wrong please try again...",
          }
        }
        setIsSubmittedForm(true)
      })
      .catch(err => {
        setIsSubmittedForm(false)
        return {
          [FORM_ERROR]: "Something went wrong please try again...",
        }
      })
  }
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitting, form, values, submitError }) => (
        <>
          {isSubmittedForm && (
            <p className="text-sm h-min text-green-500 border-green-500 bg-green-200 mx-0 md:mx-4 px-2 my-2 py-2 rounded-md">
              Thanks for contacting me. I'll get back to you shortly.
            </p>
          )}
          {!isSubmittedForm && (
            <form
              onSubmit={handleSubmit}
              className="form rounded-lg bg-white p-4 flex flex-col"
            >
              {submitError && (
                <p className="text-sm text-red-500 border-red-500 bg-red-200 mx-0 md:mx-4 px-2 my-2 py-2 rounded-md">
                  {submitError}
                </p>
              )}
              <label
                htmlFor="name"
                className="text-sm text-gray-600 mx-0 md:mx-4"
              >
                {" "}
                Your Name
              </label>
              <Field name="name" type="text" validate={required}>
                {({ input, meta }) => (
                  <>
                    <input
                      {...input}
                      className={`font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-0 md:mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
                        meta.error && meta.touched && `border-red-500`
                      }`}
                    />
                    {meta.error && meta.touched && (
                      <ErrorDisplay message={meta.error} />
                    )}
                  </>
                )}
              </Field>

              <label
                htmlFor="email"
                className="text-sm text-gray-600 mx-0 md:mx-4 mt-4"
              >
                Email
              </label>
              <Field name="email" type="email" validate={required}>
                {({ input, meta }) => (
                  <>
                    <input
                      {...input}
                      className={`font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-0 md:mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
                        meta.error && meta.touched && `border-red-500`
                      }`}
                    />
                    {meta.error && meta.touched && (
                      <ErrorDisplay message={meta.error} />
                    )}
                  </>
                )}
              </Field>
              <label
                htmlFor="message"
                className="text-sm text-gray-600 mx-0 md:mx-4 mt-4"
              >
                Message
              </label>
              <Field name="message" type="text" validate={required}>
                {({ input, meta }) => (
                  <>
                    <textarea
                      rows="4"
                      {...input}
                      {...input}
                      className={`font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-0 md:mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
                        meta.error && meta.touched && `border-red-500`
                      }`}
                    ></textarea>
                    {meta.error && meta.touched && (
                      <ErrorDisplay message={meta.error} />
                    )}
                  </>
                )}
              </Field>
              <button
                type="submit"
                className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
                disabled={submitting}
              >
                {submitting ? "submitting..." : "Send Message"}
              </button>
            </form>
          )}
        </>
      )}
    </Form>
  )
}
