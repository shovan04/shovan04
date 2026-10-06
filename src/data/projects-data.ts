export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  link: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FileUploader",
    description: "A secure, self-hosted uploader inspired by AWS S3 pre-signed URLs, with HMAC-SHA256 signatures, encrypted filenames, expiry checks, Multer, and DTO validation.",
    tags: ["Express", "TypeScript", "Multer", "File Upload", "DDD", "Backend"],
    icon: "/icons/projects/FileUploderLogo.png",
    link: "https://github.com/shovan04/FileUploder",
  },
  {
    id: 2,
    title: "SwasthyaKhoj",
    description: "A smart health companion for rural areas that helps users discover medical stores and hospitals, check doctor availability, and book visits.",
    tags: ["Flutter", "Dart", "Healthcare", "Firebase"],
    icon: "/icons/projects/SwasthyaKhojLogo.png",
    link: "https://github.com/shovan04/SwasthyaKhoj",
  },
  {
    id: 3,
    title: "NovaCrypt",
    description: "A C++11 command-line cryptographic library I created for encrypting and decrypting text and file contents with configurable key and salt parameters.",
    tags: ["C++", "Cryptography", "Security", "Encryption"],
    icon: "/icons/projects/NovaCryptLogo.png",
    link: "https://github.com/shovan04/NovaCrypt",
    highlight: "Created by Shovan",
  },
  {
    id: 4,
    title: "ExpressTs",
    description: "A C++17 CLI that bootstraps a TypeScript Express project with a ready-to-grow directory structure and configuration files.",
    tags: ["C++", "TypeScript", "Express", "Automation"],
    icon: "/icons/projects/ExpressTsLogo.png",
    link: "https://github.com/shovan04/ExpressTs",
  },
];
