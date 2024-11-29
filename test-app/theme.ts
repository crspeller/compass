import { css } from 'styled-components';

export const defaultTheme = css`
	:root {
		// Default Hex values to be replaced by applyTheme()
		// these are define to prevent flashes of unstyled content
		--icon-opacity: 0.64;
		--icon-opacity-hover: 0.8;
		--away-indicator: #ffbc42;
		--away-indicator-dark: #c79e3f;
		--button-bg: #166de0;
		--button-color: #fff;
		--center-channel-bg: #fff;
		--center-channel-color: #3d3c40;
		--dnd-indicator: #d24b4e;
		--error-text: #d24b4e;
		--warning-text: #cc8f00;
		--link-color: #2389d7;
		--mention-bg: #fff;
		--mention-color: #145dbf;
		--mention-highlight-bg: #ffe577;
		--mention-highlight-link: #166de0;
		--new-message-separator: #f80;
		--online-indicator: #06d6a0;
		--sidebar-bg: #145dbf;
		--sidebar-header-bg: #1153ab;
		--sidebar-header-text-color: #fff;
		--sidebar-text: #fff;
		--sidebar-text-active-border: #579eff;
		--sidebar-text-active-color: #fff;
		--sidebar-text-hover-bg: #4578bf;
		--sidebar-unread-text: #fff;
		--sidebar-team-background: #0b428c;
		--secondary-blue: #22406d;
		--denim-button-bg: #1c58d9;
		--denim-status-online: #3db887;
		--denim-sidebar-active-border: #5d89ea;
		--title-color-indigo-500: #1e325c;

		// Default RGB values to be replaced by applyTheme() (do not add opacity mutations here)
		// these are define to prevent flashes of unstyled content
		--away-indicator-rgb: 255, 188, 66;
		--button-bg-rgb: 22, 109, 224;
		--button-color-rgb: 255, 255, 255;
		--center-channel-bg-rgb: 255, 255, 255;
		--center-channel-color-rgb: 61, 60, 64;
		--dnd-indicator-rgb: 247, 67, 67;
		--error-text-color-rgb: 253, 89, 96;
		--link-color-rgb: 35, 137, 215;
		--mention-bg-rgb: 255, 255, 255;
		--mention-color-rgb: 20, 93, 191;
		--mention-highlight-bg-rgb: 255, 229, 119;
		--mention-highlight-link-rgb: 22, 109, 224;
		--new-message-separator-rgb: 255, 136, 0;
		--online-indicator-rgb: 6, 214, 160;
		--sidebar-bg-rgb: 20, 93, 191;
		--sidebar-header-bg-rgb: 17, 83, 171;
		--sidebar-header-text-color-rgb: 255, 255, 255;
		--sidebar-text-rgb: 255, 255, 255;
		--sidebar-text-active-border-rgb: 87, 158, 255;
		--sidebar-text-active-color-rgb: 255, 255, 255;
		--sidebar-text-hover-bg-rgb: 69, 120, 191;
		--sidebar-unread-text-rgb: 255, 255, 255;
		--error-box-background: 197, 67, 72;
		--sidebar-team-background-rgb: 11, 66, 140;
		--secondary-blue-rgb: 34, 64, 109;
		--denim-status-online-rgb: 61, 184, 135;
		--denim-button-bg-rgb: 28, 88, 217;
		--title-color-indigo-500-rgb: 30, 50, 92;

		// offline indicator color stays the same in all themes, that's why it is separated from the other variables
		// the color specified here is the new hard-coded color from the compass design system
		--offline-indicator: rgba(175, 179, 192, 0.75);

		// Elevation values used for box shadows.
		// Defined as CSS variables so that both sass and JS can use them.
		--elevation-1: 0 2px 3px 0 rgba(0, 0, 0, 0.08);
		--elevation-2: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
		--elevation-3: 0 6px 14px 0 rgba(0, 0, 0, 0.12);
		--elevation-4: 0 8px 24px 0 rgba(0, 0, 0, 0.12);
		--elevation-5: 0 12px 32px 0 rgba(0, 0, 0, 0.12);
		--elevation-6: 0 20px 32px 0 rgba(0, 0, 0, 0.12);

		// Corner Radius variables
		--radius-xs: 2px;
		--radius-s: 4px;
		--radius-m: 8px;
		--radius-l: 12px;
		--radius-xl: 16px;
		--radius-full: 50%;

		// Border variables
		--border-default: solid 1px rgba(var(--center-channel-color-rgb), 0.12);
		--border-light: solid 1px rgba(var(--center-channel-color-rgb), 0.08);
		--border-dark: solid 1px rgba(var(--center-channel-color-rgb), 0.16);

		// Global Header variables
		--global-header-background: var(--sidebar-teambar-bg);
		--global-header-text: var(--sidebar-header-text-color);
		--global-header-background-rgb: var(--sidebar-teambar-bg-rgb);
		--global-header-text-rgb: var(--sidebar-header-text-color-rgb);

		// semantic colors
		// not to be overwritten, since they are shared among themes
		--semantic-color-general: var(--center-channel-color-rgb);
		--semantic-color-info: 93, 137, 234;
		--semantic-color-success: 61, 184, 135;
		--semantic-color-warning: 245, 171, 0;
		--semantic-color-danger: 210, 75, 78;
		--icon-opacity: 0.56;
		--icon-opacity-hover: 0.72;
		--away-indicator: #f5ab00;
		--away-indicator-dark: #e05100;
		--button-bg: #1c58d9;
		--button-color: #ffffff;
		--center-channel-bg: #ffffff;
		--center-channel-color: #3d3c40;
		--dnd-indicator: #d24b4e;
		--error-text: #d24b4e;
		--warning-text: #f5ab00;
		--link-color: #1c58d9;
		--mention-bg: #ffffff;
		--mention-color: #1c58d9;
		--mention-highlight-bg: #fff4dd;
		--mention-highlight-link: #1c58d9;
		--new-message-separator: #f4af64;
		--online-indicator: #3db887;
		--sidebar-bg: #1b1b1b;
		--sidebar-header-bg: #1b1b1b;
		--sidebar-header-text-color: #ffffff;
		--sidebar-text: #ffffff;
		--sidebar-text-active-border: #5d89ea;
		--sidebar-text-active-color: #ffffff;
		--sidebar-text-hover-bg: rgba(255, 255, 255, 0.08);
		--sidebar-unread-text: #ffffff;
		--sidebar-team-background: #1b1b1b;
		--secondary-blue: #1c58d9;
		--denim-button-bg: #1c58d9;
		--denim-status-online: #3db887;
		--denim-sidebar-active-border: #5d89ea;
		--title-color-indigo-500: #1c58d9;

		--away-indicator-rgb: 245, 171, 0;
		--button-bg-rgb: 28, 88, 217;
		--button-color-rgb: 255, 255, 255;
		--center-channel-bg-rgb: 255, 255, 255;
		--center-channel-color-rgb: 61, 60, 64;
		--dnd-indicator-rgb: 210, 75, 78;
		--error-text-color-rgb: 210, 75, 78;
		--link-color-rgb: 28, 88, 217;
		--mention-bg-rgb: 255, 255, 255;
		--mention-color-rgb: 28, 88, 217;
		--mention-highlight-bg-rgb: 255, 244, 221;
		--mention-highlight-link-rgb: 28, 88, 217;
		--new-message-separator-rgb: 244, 175, 100;
		--online-indicator-rgb: 61, 184, 135;
		--sidebar-bg-rgb: 27, 27, 27;
		--sidebar-header-bg-rgb: 27, 27, 27;
		--sidebar-header-text-color-rgb: 255, 255, 255;
		--sidebar-text-rgb: 255, 255, 255;
		--sidebar-text-active-border-rgb: 93, 137, 234;
		--sidebar-text-active-color-rgb: 255, 255, 255;
		--sidebar-text-hover-bg-rgb: 255, 255, 255;
		--sidebar-unread-text-rgb: 255, 255, 255;
		--error-box-background: 244, 198, 199;
		--sidebar-team-background-rgb: 27, 27, 27;
		--secondary-blue-rgb: 28, 88, 217;
		--denim-status-online-rgb: 61, 184, 135;
		--denim-button-bg-rgb: 28, 88, 217;
		--title-color-indigo-500-rgb: 28, 88, 217;

		--offline-indicator: #666666;

		--elevation-1: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
		--elevation-2: 0px 3px 6px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.12);
		--elevation-3: 0px 10px 20px rgba(0, 0, 0, 0.15), 0px 3px 6px rgba(0, 0, 0, 0.10);
		--elevation-4: 0px 15px 25px rgba(0, 0, 0, 0.15), 0px 5px 10px rgba(0, 0, 0, 0.05);
		--elevation-5: 0px 20px 40px rgba(0, 0, 0, 0.2);
		--elevation-6: 0px 25px 50px rgba(0, 0, 0, 0.25);

		--radius-xs: 2px;
		--radius-s: 4px;
		--radius-m: 8px;
		--radius-l: 12px;
		--radius-xl: 16px;
		--radius-full: 9999px;

		--border-default: 1px solid rgba(var(--center-channel-color-rgb), 0.16);
		--border-light: 1px solid rgba(var(--center-channel-color-rgb), 0.08);
		--border-dark: 1px solid rgba(var(--center-channel-color-rgb), 0.32);

		--global-header-background: #1b1b1b;
		--global-header-text: #ffffff;
		--global-header-background-rgb: 27, 27, 27;
		--global-header-text-rgb: 255, 255, 255;

		--semantic-color-general: #1c58d9;
		--semantic-color-info: #1c58d9;
		--semantic-color-success: #3db887;
		--semantic-color-warning: #f5ab00;
		--semantic-color-danger: #d24b4e;
	}
	`;
