import React, { useState } from 'react';

const randStr = () => Math.random().toString(36).substr(2);

export const Tabs = () => {
  const [tabs, setTabs] = useState(['Wallpapers'] as string[]);
  return (
    <div className="tabs-container">
      <style jsx>{`
        .tabs-container {
          display: block;
          height: 2rem;
          white-space: nowrap;
          overflow: hidden;

          .tabs-items {
            width: 100%;
            display: inline-flex;
            align-items: center;
            .tabs-item {
              background-color: #e9e9e9;
              display: inline-block;
              padding: 0.5rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              cursor: default;

              &:hover {
                background-color: #e0e0e0;
              }
            }
            > span {
              padding: 0.5rem;
              cursor: pointer;
            }
          }
        }
      `}</style>
      <div className="tabs-items">
        {tabs.map((tab, idx) => (
          <div
            onClick={() =>
              setTabs([...tabs.slice(0, idx), ...tabs.slice(idx + 1)])
            }
            className="tabs-item"
            key={tab}
          >
            {tab}
          </div>
        ))}
        <span onClick={() => setTabs([...tabs, randStr()])}>+</span>
      </div>
    </div>
  );
};

export default Tabs;
