import React from "react";

interface PageProps {
  children: React.ReactNode;
  styling?: string;
}

const Page: React.FC<PageProps> = ({ children, styling = "" }) => {
  return <div className={`px-4 md:px-16 lg:px-60 ${styling}`}>{children}</div>;
};

export default Page;
