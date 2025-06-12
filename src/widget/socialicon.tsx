import React, { ReactNode, useState } from "react";

interface SocialIconProps {
  children: ReactNode;
  title: string;
  className?: string;
  socialUrl?: string;
  tooltip?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  children,
  title,
  className = "",
  socialUrl = "",
  tooltip,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSocialUrl = (e: React.MouseEvent) => {
    e.preventDefault();
    return socialUrl !== "" ? window.open(socialUrl, "_blank") : null;
  };

  return (
    <div
      className={`relative border rounded-full cursor-pointer text-accent border-accent hover:bg-accent hover:shadow-xl transition-all duration-500 ease-in-out hover:text-white ml-2 ${className}`}
      title={title}
      onClick={handleSocialUrl}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-center justify-center m-2">{children}</div>
      {showTooltip && socialUrl && (
        <div className="absolute top-full mt-2 w-max px-3 py-1 bg-black text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default SocialIcon;
