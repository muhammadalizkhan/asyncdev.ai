import React, { useState } from 'react';
import { toolTabdata } from '@/app/Data/TechnologyDetails';
import './TechnologyDetails.scss';

const TechnologyDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab starts as the first one

  const handleTabChange = (index: number) => {
    setActiveTab(index); // Change active tab when clicked
  };

  // Get current tab data based on activeTab index
  const currentTab = toolTabdata[activeTab];
  const { tabName, tabContent } = currentTab;

  return (
    <section className="container">
      <div className="intro-text">
        <h1>Tools and Technologies</h1>
        <p>
          We leverage our deep industry expertise and strategic approach to create innovative solutions
          that effectively address your business challenges – delivering true value and not just ticking
          off tasks.
        </p>
      </div>

      {/* Tab buttons for switching tabs */}
      <div className="tabs">
        {toolTabdata.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            {tab.tabName}
          </button>
        ))}
      </div>

      {/* Tab content based on activeTab */}
      <div className="tab-content">
        <h2>{tabName}</h2>
        <div className="technology-list">
          {tabContent.map((item, index) => (
            <div key={index} className="technology-card">
              <img
                src={item.imageUrl}
                alt={`Technology ${index}`}
                className="technology-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyDetails;
