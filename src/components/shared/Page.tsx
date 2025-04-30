import React from "react";

interface PageProps {
  children: React.ReactNode;
  styling?: string;
  dir?: string; // Added dir property
}

const Page: React.FC<PageProps> = ({ children, styling = "", dir = "ltr" }) => {
  return (
    <div className={`px-4 md:px-16 lg:px-60 ${styling}`} dir={dir}>
      {children}
    </div>
  );
};

export default Page;
