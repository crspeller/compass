import { css } from 'styled-components';

export const defaultTheme = css`
  :root {
    /* Default Hex Values */
    --button-bg: #1C58D9;
    --button-color: #FFFFFF;
    --center-channel-bg: #FFFFFF;
    --center-channel-color: #3D3C40;
    --error-text: #D24B4E;
    --warning-text: #CC8F00;
    --link-color: #1C58D9;
    --sidebar-text-hover-bg: rgba(28, 88, 217, 0.08);
    --secondary-blue: #165ECC;
    --denim-button-bg: #1C58D9;
    --title-color-indigo-500: #1C58D9;
    
    /* Semantic Colors */
    --semantic-color-general: #1C58D9;
    --semantic-color-info: #1C58D9;
    --semantic-color-success: #26A653;
    --semantic-color-warning: #CC8F00;
    --semantic-color-danger: #D24B4E;

    /* Corner Radius */
    --radius-xs: '2px';
    --radius-s: '4px';
    --radius-m: '8px';
    --radius-l: '12px';
    --radius-xl: '16px';
    --radius-full: '9999px';

    /* Borders */
    --border-default: '1px solid';
  }
`;
