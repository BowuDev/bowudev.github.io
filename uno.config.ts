import {
    defineConfig,
    presetAttributify,
    presetIcons, presetTypography,
    presetWind4, transformerDirectives, transformerVariantGroup,
} from "unocss";
import {presetFluid} from "unocss-preset-fluid";
import {extractorArbitraryVariants} from "@unocss/extractor-arbitrary-variants";

export default defineConfig({
    presets: [
        presetWind4({
            dark: "media",
        }),
        presetAttributify(),
        presetTypography(),
        presetIcons({
            cdn: "https://esm.sh/",
            extraProperties: {
                "display": "inline-block",
                "vertical-align": "middle",
            },
        }),
        presetFluid(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
    extractors: [
        extractorArbitraryVariants(),
    ],
});
