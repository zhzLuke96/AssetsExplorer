import React from 'react';
import { Tabs } from '../components/Tabs';
import { Address } from '../components/Address';

export const Explorer = () => {
  return (
    <div className="explorer-container">
      <style jsx>{`
        .explorer-container {
          display: flex;
          width: 100vw;
          height: 100vh;

          background-color: #e9e9e9;
          color: #0c0c0c;

          .left-panel {
            width: 30%;
            min-width: 20rem;
          }
          .right-panel {
            background-color: #cccccc;
            flex: 1;
            display: flex;
            flex-flow: column;
            width: 0;
            .top-bar {
              width: 100%;
              height: 4rem;
            }
            .file-view {
              background-color: #f4f2f3;
              flex: 1;
              display: flex;
              flex-flow: row;
              &-content {
                flex: 1;
              }
              &-detail {
                width: 30%;
              }
            }
          }
        }
      `}</style>
      <div className="left-panel">left-panel</div>
      <div className="right-panel">
        <div className="top-bar">
          <Tabs />
          <Address />
        </div>
        <div className="file-view">
          <div className="file-view-content">file-view-content</div>
          <div className="file-view-detail">file-view-detail</div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
