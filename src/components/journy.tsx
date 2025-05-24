import certifications from "../widget/journey-data";

const ProfessionalJourney = () => {
  return (
    <section className="py-2 text-white">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center">Professional Journey</h2>
        <div className="flex justify-center mt-4">
          <a href="/Shovan-resume-.pdf" className="bg-green-500 border-accent border-2 hover:bg-transparent hover:border-2 transition-all duration-300 hover:border-accent text-white px-6 py-2 rounded-lg flex items-center gap-2">
            Download Resume <span>&#x2B07;</span>
          </a>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {/* Education */}
          <div>
            <h3 className="text-4xl font-semibold">Education</h3>
            <div className="mt-4 border-l-4 border-green-500 pl-4">
              <div className="mb-6">
                <p className="text-green-400">2024 - Present</p>
                <p className="font-bold text-lg">Bachelor of Technology</p>
                <p className="text-gray-400">
                  Regent Education and Research Foundation
                </p>
                <p className="text-sm">Computer Science and Engineering</p>
              </div>
              <div>
                <p className="text-green-400">2021 - 2023</p>
                <p className="font-bold text-lg">Higher Secondary</p>
                <p className="text-gray-400">
                  West Bengal Council of Higher Secondary Education
                </p>
                <p className="text-sm">Science with Computer Science</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-4xl font-semibold">Certifications</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-secondary flex flex-col p-4 rounded-lg shadow-lg"
                >
                  <div className="gap-2">
                    <span>
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
                          fillRule="nonzero"
                          fill="rgb(74, 222, 128)"
                          fillOpacity="0.1"
                        />
                        <defs>
                          <clipPath id="clipPath3186466214">
                            <path
                              transform="matrix(1 0 0 1 12 12)"
                              d="M0 0L24 0L24 24L0 24L0 0Z"
                              fillRule="nonzero"
                            />
                          </clipPath>
                        </defs>
                        <g clipPath="url(#clipPath3186466214)">
                          <defs>
                            <clipPath id="clipPath1279409005">
                              <path
                                transform="matrix(1 0 0 1 12 12)"
                                d="M0 0L24 0L24 24L0 24L0 0Z"
                                fillRule="nonzero"
                              />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#clipPath1279409005)">
                            <path
                              transform="matrix(1 0 0 1 15.0734 15.0734)"
                              d="M4.68231 0.626759Q5.06284 0.596346 5.41555 0.450263Q5.76837 0.30413 6.05904 0.0564519Q7.29803 -1 8.92661 -1Q10.5552 -1 11.7944 0.056676Q12.0849 0.304131 12.4377 0.450262Q12.7905 0.596395 13.1712 0.626779Q14.7943 0.755908 15.9458 1.90743Q17.0973 3.05894 17.2265 4.6823Q17.2568 5.06273 17.403 5.41555Q17.5491 5.76836 17.7968 6.05904Q18.8532 7.29803 18.8532 8.92661Q18.8532 10.5552 17.7965 11.7944Q17.5491 12.0849 17.403 12.4377Q17.2568 12.7905 17.2264 13.1712Q17.0973 14.7943 15.9458 15.9458Q14.7943 17.0973 13.1709 17.2265Q12.7905 17.2568 12.4377 17.403Q12.0849 17.5491 11.7942 17.7968Q10.5552 18.8532 8.92661 18.8532Q7.29803 18.8532 6.05878 17.7965Q5.76837 17.5491 5.41555 17.403Q5.06273 17.2568 4.68204 17.2264Q3.05894 17.0973 1.90743 15.9458Q0.755909 14.7943 0.626759 13.1709Q0.596396 12.7905 0.450264 12.4377Q0.304131 12.0849 0.0564523 11.7942Q-1 10.5552 -1 8.92661Q-1 7.29802 0.0566773 6.05878Q0.304132 5.76836 0.450264 5.41554Q0.596396 5.06272 0.62678 4.68205Q0.755909 3.05894 1.90743 1.90742Q3.05885 0.755999 4.68205 0.626779L4.68231 0.626759ZM4.84092 2.62046Q3.95211 2.69117 3.32164 3.32164Q2.69117 3.9521 2.62044 4.84117Q2.56495 5.53645 2.29804 6.18086Q2.03114 6.82527 1.57854 7.35644Q1 8.03494 1 8.92661Q1 9.81828 1.57877 10.497Q2.03114 11.0279 2.29804 11.6724Q2.56495 12.3168 2.62046 13.0123Q2.69117 13.9011 3.32164 14.5316Q3.95211 15.162 4.84118 15.2328Q5.53646 15.2883 6.18086 15.5552Q6.82527 15.8221 7.35644 16.2747Q8.03494 16.8532 8.92661 16.8532Q9.81828 16.8532 10.497 16.2745Q11.0279 15.8221 11.6724 15.5552Q12.3168 15.2883 13.0123 15.2328Q13.9011 15.162 14.5316 14.5316Q15.1621 13.9011 15.2328 13.012Q15.2883 12.3168 15.5552 11.6724Q15.8221 11.0279 16.2747 10.4968Q16.8532 9.81828 16.8532 8.92661Q16.8532 8.03494 16.2745 7.35618Q15.8221 6.82527 15.5552 6.18086Q15.2883 5.53646 15.2328 4.84092Q15.1621 3.95211 14.5316 3.32164Q13.9011 2.69117 13.012 2.62044Q12.3168 2.56494 11.6724 2.29804Q11.0279 2.03114 10.4968 1.57854Q9.81828 1 8.92661 1Q8.03494 1 7.35618 1.57877Q6.82528 2.03114 6.18087 2.29804Q5.53646 2.56494 4.84117 2.62044L4.84092 2.62046ZM11.2195 6.2195C11.61 5.82898 12.2432 5.82898 12.6337 6.2195C13.0242 6.61002 13.0242 7.24319 12.6337 7.63372L8.63372 11.6337Q8.56407 11.7034 8.48218 11.7581Q8.40029 11.8128 8.30929 11.8505Q8.2183 11.8882 8.1217 11.9074Q8.0251 11.9266 7.92661 11.9266Q7.82812 11.9266 7.73152 11.9074Q7.63492 11.8882 7.54393 11.8505Q7.45293 11.8128 7.37104 11.7581Q7.28915 11.7034 7.21951 11.6337L5.21951 9.63372C4.82898 9.24319 4.82898 8.61002 5.21951 8.2195C5.61003 7.82898 6.2432 7.82898 6.63372 8.2195L7.92661 9.5124L11.2195 6.2195Z"
                              fillRule="evenodd"
                              fill="rgb(74, 222, 128)"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="font-bold text-xl mt-3 ">{cert.title}</p>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{cert.provider}</p>
                  <div className="border-y-[1px] border-gray-500 mb-3"></div>
                  <p className="text-sm text-gray-400">Issued {cert.year}</p>
                  <p className="text-green-400 text-sm">Cert-{cert.certId}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
