'use client';
import { useEffect, useState } from 'react';

interface IProps {
  texts: Array<string>
}


export default function TypingEffect({ texts }: IProps) {
  const [idx, setIdx] = useState(0);
  const [currText, setCurrText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed
    let updatedtext
    if (isDeleting) {
      typingSpeed = 50
      updatedtext = currText.slice(0, -1)
    } else {
      typingSpeed = 120
      updatedtext = texts[idx].slice(0, currText.length + 1)
    }

    const timeout = setTimeout(() => {
      setCurrText(updatedtext)
      if (!isDeleting && updatedtext === texts[idx]) {
        const timeoutMs = (idx === texts.length - 1) ? 8000 : 2000;
        setTimeout(() => setIsDeleting(true), timeoutMs); // pause before delete
      } else if (isDeleting && updatedtext === '') {
        const newIdx = (idx + 1) % texts.length;
        setIdx(newIdx)
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currText, isDeleting, idx]);

  return (
    <div>
      {currText}
      <span className="animate-blink">|</span>
    </div>
  );
}

