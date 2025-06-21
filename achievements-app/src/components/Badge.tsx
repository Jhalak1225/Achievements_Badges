import React from 'react';

type BadgeProps = {
  title: string;
  image: string;
  description: string;
};

const Badge: React.FC<BadgeProps> = ({ title, image, description }) => {
  return (
    <div className="badge-card">
      <img src={image} alt={title} className="badge-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Badge;
