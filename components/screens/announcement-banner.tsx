import React from "react";
import { ArrowRight } from "lucide-react";

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="w-full bg-black text-white text-sm flex items-center justify-center px-4 py-2">
      <span className="bg-gray-700 text-xs px-2 py-1 rounded-md mr-3">New</span>
      <p className="flex items-center space-x-1">
        <span>Unlimited Access to all of my Framer templates</span>
        <span className="mx-1">·</span>
        <a
          href="#"
          className="underline inline-flex items-center hover:opacity-80 transition-opacity"
        >
          Get bundle <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </p>
    </div>
  );
};

export default AnnouncementBanner;
