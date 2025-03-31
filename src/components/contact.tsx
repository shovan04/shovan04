const ContactPage = () => {
  return (
    <section className="mx-auto p-4 py-8 text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Let's Connect</h1>
        <p className="text-accent">
          Get in touch for opportunities or collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-4 bg-secondary rounded-lg h-fit p-5">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <div className="space-y-2 flex items-center justify-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                transform="matrix(1 0 0 1 0 0)"
                d="M24 0C10.7452 0 0 10.7452 0 24L0 24.036C0 37.2908 10.7092 48 23.964 48L24 48C37.2548 48 48 37.2908 48 24.036L48 24C48 10.7452 37.2908 0 24.036 0L24 0Z"
                fill-rule="nonzero"
                fill="rgb(74, 222, 128)"
                fill-opacity="0.1"
              />
              <defs>
                <clipPath id="clipPath4355587249">
                  <path
                    transform="matrix(1 0 0 1 12 12)"
                    d="M0 0L24 0L24 24L0 24L0 0Z"
                    fill-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clipPath4355587249)">
                <defs>
                  <clipPath id="clipPath6225878745">
                    <path
                      transform="matrix(1 0 0 1 12 12)"
                      d="M0 0L24 0L24 24L0 24L0 0Z"
                      fill-rule="nonzero"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clipPath6225878745)">
                  <path
                    transform="matrix(1 0 0 1 15 17)"
                    d="M2 15Q0.757357 15 -0.121319 14.1213Q-1 13.2426 -1 12L-1 3.01352C-1.00014 3.0039 -1.00014 2.99427 -1 2.98463L-1 2Q-1 0.75736 -0.121321 -0.12132Q0.757359 -1 2 -1L16 -1Q17.2426 -1 18.1213 -0.121322Q19 0.757359 19 2L19 2.98461C19.0001 2.99426 19.0001 3.00391 19 3.01355L19 12Q19 13.2426 18.1213 14.1213Q17.2426 15 16 15L2 15ZM17 2.46482L17 2Q17 1.58579 16.7071 1.29289Q16.4142 1 16 1L2 1Q1.58579 1 1.29289 1.29289Q1 1.58579 1 2L1 2.46482L8.4447 7.42795Q8.69703 7.5963 9 7.5963Q9.30297 7.5963 9.555 7.42815L17 2.46482ZM1 4.86852L7.3353 9.09205Q8.09108 9.5963 9 9.5963Q9.90892 9.5963 10.665 9.09185L17 4.86852L17 12Q17 12.4142 16.7071 12.7071Q16.4142 13 16 13L2 13Q1.58579 13 1.29289 12.7071Q1 12.4142 1 12L1 4.86852Z"
                    fill-rule="evenodd"
                    fill="rgb(74, 222, 128)"
                  />
                </g>
              </g>
            </svg>
            <p className="text-lg">
              <span className="text-md text-gray-400">Email</span>
              <br />
              shovanm50@gmail.com
            </p>
          </div>
          <div className="space-y-2 flex items-center justify-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                transform="matrix(1 0 0 1 0 0)"
                d="M24 0C10.7452 0 0 10.7452 0 24L0 24.036C0 37.2908 10.7092 48 23.964 48L24 48C37.2548 48 48 37.2908 48 24.036L48 24C48 10.7452 37.2908 0 24.036 0L24 0Z"
                fill-rule="nonzero"
                fill="rgb(74, 222, 128)"
                fill-opacity="0.1"
              />
              <defs>
                <clipPath id="clipPath6623906965">
                  <path
                    transform="matrix(1 0 0 1 12 12)"
                    d="M0 0L24 0L24 24L0 24L0 0Z"
                    fill-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clipPath6623906965)">
                <defs>
                  <clipPath id="clipPath9982003031">
                    <path
                      transform="matrix(1 0 0 1 12 12)"
                      d="M0 0L24 0L24 24L0 24L0 0Z"
                      fill-rule="nonzero"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clipPath9982003031)">
                  <path
                    transform="matrix(1 0 0 1 16 15.0003)"
                    d="M14.3641 14.3638L10.1211 18.6068Q9.24319 19.4856 8.0005 19.4856Q6.75781 19.4856 5.87954 18.6065L1.63598 14.3639Q-1.00006 11.7277 -1 7.99984Q-0.999936 4.27197 1.63609 1.63598Q4.27213 -1 8 -1Q11.7279 -0.999999 14.3639 1.63599Q16.9999 4.27197 17 7.99985Q17.0001 11.7277 14.3641 14.3638L14.3641 14.3638ZM12.9499 12.9496Q15 10.8993 15 7.99988Q14.9999 5.10042 12.9497 3.05021Q10.8995 1 8 1Q5.10054 1 3.0503 3.05021Q1.00005 5.10042 1 7.99988Q0.99995 10.8993 3.05002 12.9495L7.29446 17.193Q7.58683 17.4856 8.0005 17.4856Q8.41417 17.4856 8.70689 17.1926L12.9499 12.9496L12.9499 12.9496Z"
                    fill-rule="nonzero"
                    fill="rgb(74, 222, 128)"
                  />
                  <path
                    transform="matrix(1 0 0 1 21 20)"
                    d="M7 3Q7 4.65685 5.82843 5.82843Q4.65685 7 3 7Q1.34314 7 0.171572 5.82842Q-1 4.65685 -1 3Q-1 1.34314 0.171573 0.171573Q1.34314 -1 3 -1Q4.65685 -1 5.82843 0.171572Q7 1.34314 7 3L7 3ZM5 3Q5 2.17157 4.41421 1.58579Q3.82843 1 3 1Q2.17157 1 1.58579 1.58579Q1 2.17157 1 3Q1 3.82843 1.58579 4.41421Q2.17157 5 3 5Q3.82843 5 4.41421 4.41421Q5 3.82843 5 3L5 3Z"
                    fill-rule="nonzero"
                    fill="rgb(74, 222, 128)"
                  />
                </g>
              </g>
            </svg>

            <p>
              <span className="text-md text-gray-400">Location</span>
              <br />
              Ranaghat, West Bengal, India, 741202
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 text-md">
          {/* Name & Email in Same Line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-600 rounded-md bg-secondary focus:outline-none"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-600 rounded-md bg-secondary focus:outline-none"
              required
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="w-full p-2 border border-gray-600 rounded-md bg-secondary focus:outline-none"
            required
          />

          {/* Message */}
          <textarea
            id="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-2 border border-gray-600 rounded-md bg-secondary focus:outline-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-transparent border-accent border transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
