import React, { useState } from 'react';
import { tabData } from '../../Data/TechnologyDetails';  // Assuming tabData is exported from this file
import './TechnologyDetails.scss';  // Import custom styling (I'll provide the styles too)

export default function TechnologyDetails() {
  const [activeTab, setActiveTab] = useState(0);  // To track the active tab

  // Handle tab click
  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);  // Set the active tab based on the clicked tab
  };

  return (
    <div className="technology-details-container">
      <div className="tabs-container">
        <div className="tabs">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.tabName}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <div className="technology-list">
            {tabData[activeTab].tabContent.map((item, index) => (
              <div key={index} className="technology-card">
                <img src={item.imageUrl} alt={`tech-${index}`} className="technology-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
