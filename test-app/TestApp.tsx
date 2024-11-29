import React, { useState } from 'react';
import { Button, ButtonSize, ButtonVariant, Checkbox, CheckboxSize, TextInput, TextInputSize, Chip, ChipSize, ChipVariant, RadioButton, RadioButtonSize, Switch, SwitchSize, TextArea, TextAreaSize } from '../src/index';
import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${defaultTheme}
`;

export const TestApp = () => {
  const [checked, setChecked] = useState(false);
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
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexDirection: 'column' }}>
                <Checkbox 
                  label="Toggle me (Controlled)" 
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <div>Checked state: {checked ? 'true' : 'false'}</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Text Inputs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <TextInput size={TextInputSize.Small} label="Small" placeholder="Small input" />
                <TextInput size={TextInputSize.Medium} label="Medium" placeholder="Medium input" />
                <TextInput size={TextInputSize.Large} label="Large" placeholder="Large input" />
              </div>
            </div>

            <div>
              <h3>States</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <TextInput label="Default" placeholder="Default input" />
                <TextInput label="Disabled" placeholder="Disabled input" disabled />
                <TextInput label="With Error" placeholder="Error input" error helperText="This is an error message" />
                <TextInput label="With Helper" placeholder="Helper text" helperText="This is helper text" />
              </div>
            </div>

            <div>
              <h3>With Icons</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <TextInput 
                  label="Leading Icon" 
                  placeholder="Search..." 
                  leadingIcon="🔍"
                />
                <TextInput 
                  label="Trailing Icon" 
                  placeholder="Enter password" 
                  type="password"
                  trailingIcon="👁️"
                />
                <TextInput 
                  label="Both Icons" 
                  placeholder="Both icons" 
                  leadingIcon="📧"
                  trailingIcon="✉️"
                />
              </div>
            </div>

            <div>
              <h3>Full Width</h3>
              <TextInput 
                label="Full Width Input"
                placeholder="This input takes up the full width"
                fullWidth
              />
            </div>
          </div>
        </section>

        <section>
          <h2>Chips</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Chip size={ChipSize.Small}>Small</Chip>
                <Chip size={ChipSize.Medium}>Medium</Chip>
                <Chip size={ChipSize.Large}>Large</Chip>
              </div>
            </div>

            <div>
              <h3>Variants</h3>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Chip variant={ChipVariant.Filled}>Filled</Chip>
                <Chip variant={ChipVariant.Outlined}>Outlined</Chip>
              </div>
            </div>

            <div>
              <h3>States</h3>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Chip>Default</Chip>
                <Chip selected>Selected</Chip>
                <Chip disabled>Disabled</Chip>
                <Chip destructive>Destructive</Chip>
              </div>
            </div>

            <div>
              <h3>With Icons</h3>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Chip leadingIcon="→">Leading Icon</Chip>
                <Chip trailingIcon="←">Trailing Icon</Chip>
                <Chip leadingIcon="→" trailingIcon="←">Both Icons</Chip>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Radio Buttons</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <RadioButton name="size" size={RadioButtonSize.Small} label="Small" />
                <RadioButton name="size" size={RadioButtonSize.Medium} label="Medium" />
                <RadioButton name="size" size={RadioButtonSize.Large} label="Large" />
              </div>
            </div>

            <div>
              <h3>States</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <RadioButton name="state" label="Default" />
                <RadioButton name="state" label="Checked" checked />
                <RadioButton name="state" label="Disabled" disabled />
                <RadioButton name="state" label="Destructive" destructive />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Switches</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Switch size={SwitchSize.Small} label="Small" />
                <Switch size={SwitchSize.Medium} label="Medium" />
                <Switch size={SwitchSize.Large} label="Large" />
              </div>
            </div>

            <div>
              <h3>States</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Switch label="Default" />
                <Switch label="Checked" checked />
                <Switch label="Disabled" disabled />
                <Switch label="Destructive" destructive />
              </div>
            </div>

            <div>
              <h3>Interactive Example</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexDirection: 'column' }}>
                <Switch 
                  label="Toggle me (Controlled)" 
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <div>Switch state: {checked ? 'ON' : 'OFF'}</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Text Areas</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <TextArea size={TextAreaSize.Small} placeholder="Small textarea" />
                <TextArea size={TextAreaSize.Medium} placeholder="Medium textarea" />
                <TextArea size={TextAreaSize.Large} placeholder="Large textarea" />
              </div>
            </div>

            <div>
              <h3>States</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <TextArea placeholder="Default textarea" />
                <TextArea placeholder="Disabled textarea" disabled />
                <TextArea placeholder="Error textarea" error />
              </div>
            </div>

            <div>
              <h3>Rows Configuration</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <TextArea placeholder="Min 2 rows" minRows={2} />
                <TextArea placeholder="Max 4 rows" maxRows={4} />
                <TextArea placeholder="3-5 rows" minRows={3} maxRows={5} />
              </div>
            </div>

            <div>
              <h3>Full Width</h3>
              <TextArea 
                placeholder="This textarea takes up the full width"
                fullWidth
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};
