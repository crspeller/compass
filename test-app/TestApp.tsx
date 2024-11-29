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
            <Button variant={ButtonVariant.Primary}>Primary</Button>
            <Button variant={ButtonVariant.Secondary}>Secondary</Button>
            <Button variant={ButtonVariant.Tertiary}>Tertiary</Button>
            <Button variant={ButtonVariant.Quaternary}>Quaternary</Button>
            <Button variant={ButtonVariant.Link}>Link</Button>
          </div>
        </section>

        <section>
          <h2>Sizes</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button size={ButtonSize.XSmall}>X-Small</Button>
            <Button size={ButtonSize.Small}>Small</Button>
            <Button size={ButtonSize.Medium}>Medium</Button>
            <Button size={ButtonSize.Large}>Large</Button>
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
                <Checkbox size={CheckboxSize.Small} label="Small" />
                <Checkbox size={CheckboxSize.Medium} label="Medium" />
                <Checkbox size={CheckboxSize.Large} label="Large" />
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
