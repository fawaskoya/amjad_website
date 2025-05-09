import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  size = 'medium',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const titleSizeClasses = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl',
  };

  return (
    <div className={`mb-10 ${alignmentClasses[alignment]} max-w-3xl`}>
      <h2 className={`${titleSizeClasses[size]} font-heading font-bold text-white relative mb-4`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {title}
        </span>
        <span className="block h-1 w-16 bg-gradient-to-r from-primary to-secondary mt-3 rounded-full mx-auto"/>
      </h2>
      {subtitle && (
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;