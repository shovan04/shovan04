import { ContactData } from "../data/contact-data";

const ContactPage = () => {
  return (
    <section className="mx-auto p-4 text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Let's Connect</h1>
        <p className="text-accent text-md">
          Get in touch for opportunities or collaboration
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 "
        style={{ fontSize: "12px" }}
      >
        {/* Contact Information */}
        <div className="space-y-4 bg-secondary rounded-lg h-fit p-5">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <div className="space-y-2 flex items-center justify-start gap-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 p-2 bg-accent/20 rounded-full"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                  stroke="#4ADE80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <div className="text-lg" style={{ fontSize: "15px", cursor: "pointer" }} onClick={() => window.location.href=`mailto:${ContactData.email}`}>
              <span
                className="text-md text-gray-400"
                style={{ fontSize: "18px" }}
              >
                Email
              </span>
              <br />
              {ContactData.email}
            </div>
          </div>
          <div className="space-y-2 flex items-center justify-start gap-4">
            <svg
              viewBox="-4 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#4ADE80"
              className="bg-accent/20 p-2 rounded-full w-10 h-10"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs> </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Icon-Set"
                    transform="translate(-104.000000, -411.000000)"
                    fill="#4ADE80"
                  >
                    <path
                      d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                      id="location"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <div style={{ fontSize: "15px" }}>
              <span
                className="text-md text-gray-400"
                style={{ fontSize: "18px" }}
              >
                Location
              </span>
              <br />
              {ContactData.location}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 text-lg">
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
