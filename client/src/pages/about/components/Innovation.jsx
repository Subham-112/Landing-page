import React from 'react';
import './Innovation.css';
import { MapPin, Smartphone, Zap } from 'lucide-react';

const Innovation = () => {
  const innovations = [
    {
      id: 1,
      icon: <MapPin size={35} color="rgb(207, 255, 0)" />,
      title: 'Geofencing Technology',
      description: 'Precise location-based services that trigger notifications and discoveries when you\'re near participating food spots.',
      color: 'geofencing'
    },
    {
      id: 2,
      icon: <Smartphone size={35} color="rgb(106, 142, 255)" />,
      title: 'Mobile-First Design',
      description: 'Optimized for mobile devices with intuitive navigation and lightning-fast performance for on-the-go discovery.',
      color: 'mobile'
    },
    {
      id: 3,
      icon: <Zap size={35} color="rgb(207, 255, 0)" />,
      title: 'Real-Time Sync',
      description: 'Instant updates across all platforms ensuring you always have the latest information about food spots and promotions.',
      color: 'realtime'
    }
  ];

  return (
    <div className="innovation">
      <div className="innovation-container">
        <h1 className="innovation-title">
          Powered by <span className="highlight">Innovation</span>
        </h1>
        <p className="innovation-subtitle">
          Advanced geofencing technology meets intuitive design to create seamless food discovery experiences
        </p>

        <div className="innovation-grid">
          {innovations.map((item) => (
            <div key={item.id} className={`innovation-card ${item.color}`}>
              <div className="innovation-icon">{item.icon}</div>
              <h3 className="innovation-card-title">{item.title}</h3>
              <p className="innovation-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Innovation;
