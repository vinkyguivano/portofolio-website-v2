'use client';
import { useEffect } from 'react';

interface ErrorToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function ErrorToast({ message, visible, onClose }: ErrorToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center max-w-sm p-4 text-white bg-red-600 rounded-lg shadow-lg transition-opacity duration-300 z-50 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <svg
        className="w-5 h-5 mr-2 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="text-sm">{message}</span>
    </div>
  );
}
