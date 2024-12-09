import React, { useState } from 'react';
import { tabData } from '../../Data/TabsData';
import Image from 'next/image';
import './Tabs.scss';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="tabs-container">
      <div className="vertical-tabs">
        <div className="tab-buttons">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span>{tab.tabName}</span>
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h2>{tabData[activeTab].tabName}</h2>
          <div className="technologies-list">
            {tabData[activeTab].technologies.map((tech, index) => (
              <div key={index} className="technology-card">
                <div className="technology-image-wrapper">
                  <Image
                    src={tech.imageUrl}
                    alt={tech.name}
                    width={100}
                    height={100}
                  />
                </div>
                <span className="technology-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
