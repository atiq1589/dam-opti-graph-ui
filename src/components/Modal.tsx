import React from "react";
import ResponsiveImage from "./ResponsiveImage";

interface Rendition {
  Height: number;
  Width: number;
  Name: string;
  Url: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  renditions: Rendition[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  renditions,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center z-50">
      <div className="relative p-5 border w-full h-full max-w-4xl shadow-lg rounded-md bg-white flex flex-col z-60">
        <button
          className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex-grow flex items-center justify-center">
          <ResponsiveImage
            images={renditions}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="text-center mt-4 overflow-hidden overflow-ellipsis whitespace-normal break-words">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
