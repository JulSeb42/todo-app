// Colors
export const ColorsCommon = {
    Black: "#000000",
    DarkGray: "#2F2F2F",
    Gray: "#767676",
    LightGray: "#C8C8C8",
    White: "#FFFFFF",
}

export const LightTheme = {
    Primary: "#1B4568",
    Primary70: "#10293E",
    Primary10: "#F4F6F7",
    Danger: "#B3001B",
    Danger70: "#6B0010",
    Danger10: "#FBF2F4",
    Warning: "#C44900",
    Warning70: "#762C00",
    Warning10: "#FCF6F2",
    Success: "#09814A",
    Success70: "#054D2C",
    Success10: "#F3F9F6",
    Background: ColorsCommon.White,
    Font: ColorsCommon.Black,
    ErrorFont: ColorsCommon.Black,
    Link: "#1B4568",
}

export const DarkTheme = {
    Primary: "#1A2238",
    Primary70: "#42578F",
    Primary10: "#EEF0F7",
    Danger: "#A30015",
    Danger70: "#FF2440",
    Danger10: "#FFE5E9",
    Warning: "#F2AF29",
    Warning70: "#F9DB9F",
    Warning10: "#FEF6E7",
    Success: "#99C24D",
    Success70: "#CFE2AB",
    Success10: "#F4F8EC",
    Background: ColorsCommon.DarkGray,
    Font: ColorsCommon.White,
    ErrorFont: ColorsCommon.Black,
    Link: ColorsCommon.White,
}

export const ThemeColors = {
    Black: ColorsCommon.Black,
    DarkGray: ColorsCommon.DarkGray,
    Gray: ColorsCommon.Gray,
    LightGray: ColorsCommon.LightGray,
    White: ColorsCommon.White,

    Primary: ({ theme }) => theme.Primary,
    Primary70: ({ theme }) => theme.Primary70,
    Primary10: ({ theme }) => theme.Primary10,
    Secondary: ({ theme }) => theme.Secondary,
    Secondary70: ({ theme }) => theme.Secondary70,
    Secondary10: ({ theme }) => theme.Secondary10,
    Danger: ({ theme }) => theme.Danger,
    Danger70: ({ theme }) => theme.Danger70,
    Danger10: ({ theme }) => theme.Danger10,
    Warning: ({ theme }) => theme.Warning,
    Warning70: ({ theme }) => theme.Warning70,
    Warning10: ({ theme }) => theme.Warning10,
    Success: ({ theme }) => theme.Success,
    Success70: ({ theme }) => theme.Success70,
    Success10: ({ theme }) => theme.Success10,

    Background: ({ theme }) => theme.Background,
    Font: ({ theme }) => theme.Font,
    ErrorFont: ({ theme }) => theme.ErrorFont,
    Link: ({ theme }) => theme.Link,
}

// Overlays
export const Overlays = {
    Overlay5: "rgba(24, 24, 24, 0.5)",
    Overlay8: "rgba(24, 24, 24, 0.8)",
}

// Margins
export const Margins = {
    XXL: "48px",
    XL: "32px",
    L: "24px",
    M: "16px",
    S: "12px",
    XS: "8px",
    XXS: "4px",
}

// Font family
export const FontFamily = '"Lato", sans-serif'

// Font weights
export const FontWeights = {
    Regular: 400,
    Bold: 700,
    Black: 900,
}

// Font sizes
export const FontSizes = {
    TitleLarge: "32px",
    TitleMedium: "24px",
    TitleSmall: "18px",
    Body: "16px",
    Label: "14px",
}

// Line height
export const LineHeight = 1.5

// Radii
export const Radii = {
    XL: "16px",
    L: "12px",
    M: "8px",
    S: "4px",
    Round: "99em",
}

// Container
export const Container = {
    Template: "1fr 600px 1fr",
    Column: 2,
    Padding: `${Margins.XXL} 0`,

    TemplateTablet: "5vw 1fr 5vw",
}

// Transitions
export const Transitions = {
    Short: "all 0.2s ease",
    Long: "all 0.5s ease",
    Bezier: "all 0.5s cubic-bezier(0.25, 0.75, 0, 0.66)",
}

// Breakpoints
export const Breakpoints = {
    Mobile: "(max-width: 600px)",
    Tablet: "(max-width: 1024px)",
}
