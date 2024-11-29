export const themeVariables = {
    // Default Hex values
    iconOpacity: '--icon-opacity',
    iconOpacityHover: '--icon-opacity-hover',
    awayIndicator: '--away-indicator',
    awayIndicatorDark: '--away-indicator-dark',
    buttonBg: '--button-bg',
    buttonColor: '--button-color',
    centerChannelBg: '--center-channel-bg',
    centerChannelColor: '--center-channel-color',
    dndIndicator: '--dnd-indicator',
    errorText: '--error-text',
    warningText: '--warning-text',
    linkColor: '--link-color',
    mentionBg: '--mention-bg',
    mentionColor: '--mention-color',
    mentionHighlightBg: '--mention-highlight-bg',
    mentionHighlightLink: '--mention-highlight-link',
    newMessageSeparator: '--new-message-separator',
    onlineIndicator: '--online-indicator',
    sidebarBg: '--sidebar-bg',
    sidebarHeaderBg: '--sidebar-header-bg',
    sidebarHeaderTextColor: '--sidebar-header-text-color',
    sidebarText: '--sidebar-text',
    sidebarTextActiveBorder: '--sidebar-text-active-border',
    sidebarTextActiveColor: '--sidebar-text-active-color',
    sidebarTextHoverBg: '--sidebar-text-hover-bg',
    sidebarUnreadText: '--sidebar-unread-text',
    sidebarTeamBackground: '--sidebar-team-background',
    secondaryBlue: '--secondary-blue',
    denimButtonBg: '--denim-button-bg',
    denimStatusOnline: '--denim-status-online',
    denimSidebarActiveBorder: '--denim-sidebar-active-border',
    titleColorIndigo500: '--title-color-indigo-500',

    // RGB values
    awayIndicatorRgb: '--away-indicator-rgb',
    buttonBgRgb: '--button-bg-rgb',
    buttonColorRgb: '--button-color-rgb',
    centerChannelBgRgb: '--center-channel-bg-rgb',
    centerChannelColorRgb: '--center-channel-color-rgb',
    dndIndicatorRgb: '--dnd-indicator-rgb',
    errorTextColorRgb: '--error-text-color-rgb',
    linkColorRgb: '--link-color-rgb',
    mentionBgRgb: '--mention-bg-rgb',
    mentionColorRgb: '--mention-color-rgb',
    mentionHighlightBgRgb: '--mention-highlight-bg-rgb',
    mentionHighlightLinkRgb: '--mention-highlight-link-rgb',
    newMessageSeparatorRgb: '--new-message-separator-rgb',
    onlineIndicatorRgb: '--online-indicator-rgb',
    sidebarBgRgb: '--sidebar-bg-rgb',
    sidebarHeaderBgRgb: '--sidebar-header-bg-rgb',
    sidebarHeaderTextColorRgb: '--sidebar-header-text-color-rgb',
    sidebarTextRgb: '--sidebar-text-rgb',
    sidebarTextActiveBorderRgb: '--sidebar-text-active-border-rgb',
    sidebarTextActiveColorRgb: '--sidebar-text-active-color-rgb',
    sidebarTextHoverBgRgb: '--sidebar-text-hover-bg-rgb',
    sidebarUnreadTextRgb: '--sidebar-unread-text-rgb',
    errorBoxBackground: '--error-box-background',
    sidebarTeamBackgroundRgb: '--sidebar-team-background-rgb',
    secondaryBlueRgb: '--secondary-blue-rgb',
    denimStatusOnlineRgb: '--denim-status-online-rgb',
    denimButtonBgRgb: '--denim-button-bg-rgb',
    titleColorIndigo500Rgb: '--title-color-indigo-500-rgb',

    // Special cases
    offlineIndicator: '--offline-indicator',

    // Elevation
    elevation1: '--elevation-1',
    elevation2: '--elevation-2',
    elevation3: '--elevation-3',
    elevation4: '--elevation-4',
    elevation5: '--elevation-5',
    elevation6: '--elevation-6',

    // Corner Radius
    radiusXs: '--radius-xs',
    radiusS: '--radius-s',
    radiusM: '--radius-m',
    radiusL: '--radius-l',
    radiusXl: '--radius-xl',
    radiusFull: '--radius-full',

    // Borders
    borderDefault: '--border-default',
    borderLight: '--border-light',
    borderDark: '--border-dark',

    // Global Header
    globalHeaderBackground: '--global-header-background',
    globalHeaderText: '--global-header-text',
    globalHeaderBackgroundRgb: '--global-header-background-rgb',
    globalHeaderTextRgb: '--global-header-text-rgb',

    // Semantic colors
    semanticColorGeneral: '--semantic-color-general',
    semanticColorInfo: '--semantic-color-info',
    semanticColorSuccess: '--semantic-color-success',
    semanticColorWarning: '--semantic-color-warning',
    semanticColorDanger: '--semantic-color-danger',
} as const;

export type ThemeVariables = typeof themeVariables;
