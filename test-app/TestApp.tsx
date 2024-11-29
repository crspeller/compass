import React, { useState } from 'react';
import * as Components from '../src/index';

export const TestApp = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  
  // Get all exported components
  const componentList = Object.keys(Components);
  
  // Render the selected component
  const renderComponent = () => {
    if (!selectedComponent) return null;
    
    const Component = (Components as any)[selectedComponent];
    return <Component />;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Test App</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <select 
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          <option value="">Select a component</option>
          {componentList.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        {renderComponent()}
      </div>
    </div>
  );
};
