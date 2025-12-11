export interface CertificatePayload {
  title: string;
  provider: string;
  year: string;
  certId: string;
}

const certifications: CertificatePayload[] = [
    {
      title: "Web Development",
      provider: "freeCodeCamp",
      year: "2023",
      certId: "Cert-123-456",
    },
    {
      title: "Python Programming",
      provider: "Coursera",
      year: "2022",
      certId: "Cert-789-012",
    },
    {
      title: "React Development",
      provider: "Udemy",
      year: "2023",
      certId: "Cert-345-678",
    },
    {
      title: "Flutter Development",
      provider: "Google",
      year: "2023",
      certId: "Cert-901-234",
    },
  ];

  export default certifications;