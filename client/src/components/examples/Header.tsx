import { useState } from 'react';
import Header from '../Header';

export default function HeaderExample() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="dark">
      <Header isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
      <div className="h-20"></div>
    </div>
  );
}