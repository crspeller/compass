import React, { useState } from 'react';
import { Button, Checkbox } from '../src/index';
import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${defaultTheme}
`;

export const TestApp = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ padding: '20px' }}>
      <h1>Button Component Examples</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <section>
          <h2>Variants</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="quaternary">Quaternary</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <h2>Sizes</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button size="x-small">X-Small</Button>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </section>

        <section>
          <h2>States</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button destructive>Destructive</Button>
            <Button fullWidth>Full Width</Button>
          </div>
        </section>

        <section>
          <h2>With Icons</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button leadingIcon="→">Leading Icon</Button>
            <Button trailingIcon="←">Trailing Icon</Button>
            <Button leadingIcon="→" trailingIcon="←">Both Icons</Button>
          </div>
        </section>
        <section>
          <h2>Checkboxes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Checkbox size="small" label="Small" />
                <Checkbox size="medium" label="Medium" />
                <Checkbox size="large" label="Large" />
              </div>
            </div>

            <div>
              <h3>States</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Checkbox label="Unchecked" />
                <Checkbox label="Checked" checked />
                <Checkbox label="Indeterminate" indeterminate />
                <Checkbox label="Disabled" disabled />
                <Checkbox label="Invalid" invalid />
              </div>
            </div>

            <div>
              <h3>Interactive Example</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Checkbox 
                  label="Toggle me" 
                  onChange={(e) => console.log('Checkbox changed:', e.target.checked)} 
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};
