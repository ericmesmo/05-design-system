import { createStitches, defaultThemeMap } from '@stitches/react'

import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
} from '@ericmesmo-ignite-ui/tokens'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    createTheme,
    theme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
    },
    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space,
    },
})
