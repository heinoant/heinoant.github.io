'use client';

import { useEffect, useState } from 'react';

interface DarkmodeButtonProps {
  className?: string;
}

const DarkmodeButton: React.FC<DarkmodeButtonProps> = ({ className }) => {
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    const localDarkmode = localStorage.getItem('darkmode');
    if (localDarkmode !== null) {
      const isDarkmode = localDarkmode === 'true';
      setDarkmode(isDarkmode);
      document.documentElement.setAttribute(
        'data-theme',
        isDarkmode ? 'dark' : 'light'
      );
    }
  }, []);

  const toggleDarkmode = () => {
    const newDarkmode = !darkmode;
    setDarkmode(newDarkmode);
    localStorage.setItem('darkmode', newDarkmode.toString());
    document.documentElement.setAttribute(
      'data-theme',
      newDarkmode ? 'dark' : 'light'
    );
  };

  return (
    <button className={`${className}`} onClick={toggleDarkmode}>
      ◑
    </button>
  );
};

export default DarkmodeButton;
