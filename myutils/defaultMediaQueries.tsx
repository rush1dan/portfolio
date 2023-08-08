export type MediaQuery = {
    mediaQuery?: {
        sm: boolean,
        md: boolean,
        lg: boolean,
        xl: boolean,
        xxl: boolean,
        desktop: boolean
    }
}

export const defaultMediaQueries = {
    sm: "screen and (min-width: 640px)",
    md: "screen and (min-width: 768px)",
    lg: "screen and (min-width: 1024px)",
    xl: "screen and (min-width: 1280px)",
    xxl: "screen and (min-width: 1536px)",
    desktop: "(hover) and (pointer: fine)",
}