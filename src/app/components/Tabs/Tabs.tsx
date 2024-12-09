import React, { useState } from 'react';
import { tabData } from '../../Data/TabsData';  // Importing tab data
import './Tabs.scss';  // Styles for Tabs component

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // Default to the first tab

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div className="tab-buttons">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h2>{tabData[activeTab].tabName}</h2>
          <ul className="technologies-list">
            {tabData[activeTab].technologies.map((tech, index) => (
              <li key={index} className="technology-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
