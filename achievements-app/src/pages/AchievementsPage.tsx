import React from 'react';
import Badge from '../components/Badge';
import newbieImage from '../assets/newbie.png';
import proImage from '../assets/pro.png';
import legendImage from '../assets/legend.png';

const AchievementsPage: React.FC = () => {
  const badges = [
    {
      title: 'Newbie',
      image: newbieImage,
      description: 'Welcome aboard! You’ve taken your first step.',
    },
    {
      title: 'Pro',
      image: proImage,
      description: 'Awesome! You’ve achieved Pro status.',
    },
    {
      title: 'Legend',
      image: legendImage,
      description: 'Incredible! You’re a true Legend.',
    },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Achievements</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {badges.map((badge) => (
          <Badge key={badge.title} {...badge} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
