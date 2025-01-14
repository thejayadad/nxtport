// components/Logo.tsx
import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  name: string;
  shape: 'circle' | 'square' | 'rectangle' | 'triangle';
  iconText: string;
}

const Logo: React.FC<LogoProps> = ({ name, shape, iconText }) => {
  return (
    <div className={styles.logoWrapper}>
      {/* Icon */}
      <div
        className={`${styles.icon} ${
          shape === 'circle'
            ? styles.rounded
            : shape === 'square'
            ? ''
            : shape === 'rectangle'
            ? styles.rectangle
            : shape === 'triangle'
            ? styles.triangle
            : ''
        }`}
      >
        {shape !== 'triangle' && (
          <span className={styles.iconText}>{iconText}</span>
        )}
      </div>
      {/* Website Name */}
      <h1 className={styles.websiteName}>{name}</h1>
    </div>
  );
};

export default Logo;
