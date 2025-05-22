'use client';
import { useEffect, useState } from 'react';

interface IProps {
  children: string
}


export default function TypingEffect({ children: fullText }: IProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed
    let updatedtext
    if (isDeleting) {
      typingSpeed = 70
      updatedtext = text.slice(0, -1)
    } else {
      typingSpeed = 140
      updatedtext = fullText.slice(0, text.length + 1)
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && updatedtext === fullText) {
        setTimeout(() => setIsDeleting(true), 5000); // pause before delete
      } else if (isDeleting && updatedtext === '') {
        setIsDeleting(false);
      }
      setText(updatedtext)
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <div>
      {text}
      <span className="animate-blink">|</span>
    </div>
  );
}

