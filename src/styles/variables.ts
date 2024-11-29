// RGB values
export const awayIndicatorRgb = '--away-indicator-rgb';
export const buttonBgRgb = '--button-bg-rgb';
export const buttonColorRgb = '--button-color-rgb';
export const centerChannelBgRgb = '--center-channel-bg-rgb';
export const centerChannelColorRgb = '--center-channel-color-rgb';
export const dndIndicatorRgb = '--dnd-indicator-rgb';
export const errorTextColorRgb = '--error-text-color-rgb';
export const linkColorRgb = '--link-color-rgb';
export const mentionBgRgb = '--mention-bg-rgb';
export const mentionColorRgb = '--mention-color-rgb';
export const mentionHighlightBgRgb = '--mention-highlight-bg-rgb';
export const mentionHighlightLinkRgb = '--mention-highlight-link-rgb';
export const newMessageSeparatorRgb = '--new-message-separator-rgb';
export const onlineIndicatorRgb = '--online-indicator-rgb';
export const sidebarBgRgb = '--sidebar-bg-rgb';
export const sidebarHeaderBgRgb = '--sidebar-header-bg-rgb';
export const sidebarHeaderTextColorRgb = '--sidebar-header-text-color-rgb';
export const sidebarTextRgb = '--sidebar-text-rgb';
export const sidebarTextActiveBorderRgb = '--sidebar-text-active-border-rgb';
export const sidebarTextActiveColorRgb = '--sidebar-text-active-color-rgb';
export const sidebarTextHoverBgRgb = '--sidebar-text-hover-bg-rgb';
export const sidebarUnreadTextRgb = '--sidebar-unread-text-rgb';
export const errorBoxBackground = '--error-box-background';
export const sidebarTeamBackgroundRgb = '--sidebar-team-background-rgb';
export const secondaryBlueRgb = '--secondary-blue-rgb';
export const denimStatusOnlineRgb = '--denim-status-online-rgb';
export const denimButtonBgRgb = '--denim-button-bg-rgb';
export const titleColorIndigo500Rgb = '--title-color-indigo-500-rgb';

// Elevation
export const elevation1 = '--elevation-1';
export const elevation2 = '--elevation-2';
export const elevation3 = '--elevation-3';
export const elevation4 = '--elevation-4';
export const elevation5 = '--elevation-5';
export const elevation6 = '--elevation-6';

// Corner Radius
export const radiusXs = '--radius-xs';
export const radiusS = '--radius-s';
export const radiusM = '--radius-m';
export const radiusL = '--radius-l';
export const radiusXl = '--radius-xl';
export const radiusFull = '--radius-full';

// Borders
export const borderDefault = '--border-default';
export const borderLight = '--border-light';
export const borderDark = '--border-dark';

// Global Header
export const globalHeaderBackgroundRgb = '--global-header-background-rgb';
export const globalHeaderTextRgb = '--global-header-text-rgb';

// Semantic colors
//export const semanticColorGeneral = '--semantic-color-general';
//export const semanticColorInfo = '--semantic-color-info';
//export const semanticColorSuccess = '--semantic-color-success';
//export const semanticColorWarning = '--semantic-color-warning';
//export const semanticColorDanger = '--semantic-color-danger';

export function cssVar(name: string, opacity: number = 1) {
  return `rgba(var(${name}), ${opacity})`;
}
