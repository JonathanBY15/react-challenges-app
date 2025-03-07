/**
 * PreviewModal component displays a full-screen modal with a larger image of the preview.
 * It also handles closing the modal with the "Escape" key or clicking outside the modal.
 * 
 * @param {string} imageUrl - The URL of the image to display in the modal.
 * @param {Function} onClose - A function to be called when the modal is closed.
 */

import React, { useEffect, useState } from "react";
import "./PreviewModal.css";
import { IoCloseSharp } from "react-icons/io5";

interface PreviewModalProps {
  imageUrl: string;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ imageUrl, onClose }) => {
  const [closing, setClosing] = useState(false);

  // Close the modal when the "Escape" key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        triggerClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Triggers the fade-out animation before closing
  const triggerClose = () => {
    setClosing(true);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  return (
    <div className={`modal-overlay ${closing ? "fade-out" : ""}`} onClick={(e) => e.target === e.currentTarget && triggerClose()}>
      <div className={`modal-content ${closing ? "fade-out" : ""}`}>
        <img src={imageUrl} alt="Full Preview" className="full-preview" />
        <button className="close-btn" onClick={triggerClose}>
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
};

export default PreviewModal;
