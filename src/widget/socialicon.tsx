import React, { ReactNode } from "react";

interface SocialIconProps {
  children: ReactNode;
  title: string;
  className?: string;
  socialUrl?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  children,
  title,
  className = "",
  socialUrl = "",
}) => {
  const handelSocialUrl = (e: React.MouseEvent) => {
    e.preventDefault();

    socialUrl !== "" ? window.open(socialUrl, "_blank") : null; // Social URL is not available.;
  };
  return (
    <div
      className={`border rounded-full cursor-pointer text-accent border-accent hover:bg-accent hover:shadow-xl transition-all duration-500 ease-in-out hover:text-white ml-2 ${className}`}
      title={title}
      onClick={handelSocialUrl}
    >
      <div className="flex items-center justify-center m-2">{children}</div>
    </div>
  );
};

export default SocialIcon;
