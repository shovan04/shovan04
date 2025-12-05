export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FileUploder",
    description: "A lightweight, secure, and self-hosted file uploader built with Express, TypeScript, and Multer. Inspired by AWS S3’s pre-signed URL concept but without external cloud dependencies.",
    tags: ["Express", "TypeScript", "Multer", "File Upload", "DDD", "Backend"],
    icon: "https://cdn-icons-png.flaticon.com/512/4009/4009963.png", // Cloud upload icon
    link: "https://github.com/shovan04/FileUploder",
  },
  {
    id: 2,
    title: "SwasthyaKhoj",
    description: "Mobile application to help users find healthcare services and access medical information. Integrates various APIs and uses Firebase for backend.",
    tags: ["Flutter", "Dart", "Healthcare", "Firebase"],
    icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png", // Healthcare/Medical icon
    link: "https://github.com/shovan04/SwasthyaKhoj",
  },
  {
    id: 3,
    title: "NovaCrypt",
    description: "Lightweight cryptographic library implemented in C++ for straightforward encryption and decryption of text and files.",
    tags: ["C++", "Cryptography", "Security", "Encryption"],
    icon: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png", // Lock/Security icon
    link: "https://github.com/shovan04/NovaCrypt",
  },
  {
    id: 4,
    title: "ExpressTs",
    description: "A C++ program that sets up a basic structure for a Typescript Express application, automating the boilerplate setup.",
    tags: ["C++", "TypeScript", "Express", "Automation"],
    icon: "https://cdn-icons-png.flaticon.com/512/919/919832.png", // TypeScript icon
    link: "https://github.com/shovan04/ExpressTs",
  },
];
