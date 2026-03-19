/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colors - Backgrounds
        colorsBackgroundPrimaryBackground: '#F9FAFB',  // matches colors_background_primary_background
        colorsBackgroundInputsBackground: '#EEF1F5',  // matches colors_background_inputs_background
        colorsBackgroundCardsBackground: '#FFFFFF',    // matches colors_background_cards_background

        // Colors - Text (these reference other variables, but the base colors should be updated)
        colorsTextHeading: 'var(--colors-grays-gray-900)',
        colorsTextBody: 'var(--colors-grays-gray-700)',
        colorsTextMuted: 'var(--colors-grays-gray-600)',
        colorsTextDisabled: 'var(--colors-grays-gray-500)',
        colorsTextPlaceholder: 'var(--colors-grays-gray-400)',
        colorsTextPrimaryButtons: 'var(--colors-text-primary-buttons)',

        // Colors - Primary Palette
        colorsPrimaryPrimaryColor: '#38306B',           // matches
        colorsPrimaryPrimary100: '#EBEAF0',             // was '#f5f5f5', should be '#EBEAF0'
        colorsPrimaryPrimary200: '#CDCBDA',             // was '#e5e5e5', should be '#CDCBDA'
        colorsPrimaryPrimary300: '#A5A2BC',             // was '#d4d4d4', should be '#A5A2BC'
        colorsPrimaryPrimary400: '#746E97',             // was '#a3a3a3', should be '#746E97'
        colorsPrimaryPrimary500: '#38306B',              // was '#737373', should be '#38306B'
        colorsPrimaryPrimary600: '#312A5E',              // was '#525252', should be '#312A5E'
        colorsPrimaryPrimary700: '#2B2451',              // was '#404040', should be '#2B2451'
        colorsPrimaryPrimary800: '#241F44',              // was '#262626', should be '#241F44'
        colorsPrimaryPrimary900: '#1C1836',              // was '#0f0f0f', should be '#1C1836'

        // Colors - Secondary Palette
        colorsSecondarySecondaryaccent: '#7B8493',       // was '#007e8c', should be '#7B8493'
        colorsSecondarySecondaryaccent100: '#F4F6F8',    // was '#edf4f5', should be '#F4F6F8'
        colorsSecondarySecondaryaccent200: '#E6E9EE',    // was '#e0eef0', should be '#E6E9EE'
        colorsSecondarySecondaryaccent300: '#D1D7DF',    // was '#c7e1e5', should be '#D1D7DF'
        colorsSecondarySecondaryaccent400: '#AAB4C0',    // was '#aed5da', should be '#AAB4C0'
        colorsSecondarySecondaryaccent500: '#7B8493',    // was '#26a6b0', should be '#7B8493'
        colorsSecondarySecondaryaccent600: '#667080',    // was '#00919b', should be '#667080'
        colorsSecondarySecondaryaccent700: '#535C6B',    // was '#008a99', should be '#535C6B'
        // Missing 800 and 900 in your original, adding them:
        colorsSecondarySecondaryaccent800: '#3F4652',
        colorsSecondarySecondaryaccent900: '#2D323B',

        // Colors - Grays
        colorsGraysGray100: '#F8F9FB',                   // was '#f5f5f5', should be '#F8F9FB'
        colorsGraysGray200: '#EEF1F5',                    // was '#e5e5e5', should be '#EEF1F5'
        colorsGraysGray300: '#D9DEE6',                    // was '#d4d4d4', should be '#D9DEE6'
        colorsGraysGray400: '#B7BFCC',                    // was '#a3a3a3', should be '#B7BFCC'
        colorsGraysGray500: '#8B95A5',                    // was '#737373', should be '#8B95A5'
        colorsGraysGray600: '#667085',                    // was '#525252', should be '#667085'
        colorsGraysGray700: '#4B5565',                    // was '#404040', should be '#4B5565'
        colorsGraysGray800: '#2F3846',                    // was '#262626', should be '#2F3846'
        colorsGraysGray900: '#1C2430',                    // was '#0f0f0f', should be '#1C2430'

        // Colors - Status Colors
        colorsStatusError: 'var(--colors-red-red-500)',
        colorsStatusWarning: 'var(--colors-yellow-yellow-500)',
        colorsStatusSuccess: 'var(--colors-green-green-500)',

        // Colors - Reds
        colorsRedRed100: '#FDEEEF',                        // was '#faeaea', should be '#FDEEEF'
        colorsRedRed200: '#F9D2D5',                        // was '#f1c0c0', should be '#F9D2D5'
        colorsRedRed300: '#F0A9AF',                        // was '#e99797', should be '#F0A9AF'
        colorsRedRed400: '#E0747E',                        // was '#db5858', should be '#E0747E'
        colorsRedRed500: '#C43D4D',                        // was '#d32f2f', should be '#C43D4D'
        colorsRedRed600: '#A73241',                        // was '#bd2a2a', should be '#A73241'
        colorsRedRed700: '#892735',                        // was '#932020', should be '#892735'
        colorsRedRed800: '#6A1E28',                        // was '#691717', should be '#6A1E28'
        colorsRedRed900: '#47131B',                        // was '#3f0e0e', should be '#47131B'

        // Colors - Greens
        colorsGreenGreen100: '#EDF9F3',                    // was '#e5f3e5', should be '#EDF9F3'
        colorsGreenGreen200: '#D3F0E0',                    // was '#b2dcb2', should be '#D3F0E0'
        colorsGreenGreen300: '#A8DFC2',                    // was '#84c28e', should be '#A8DFC2'
        colorsGreenGreen400: '#6FC89A',                    // was '#66b966', should be '#6FC89A'
        colorsGreenGreen500: '#2F9E6F',                    // was '#4caf50', should be '#2F9E6F'
        colorsGreenGreen600: '#27875F',                    // was '#007d00', should be '#27875F'
        colorsGreenGreen700: '#206F4F',                    // was '#006100', should be '#206F4F'
        colorsGreenGreen800: '#18583F',                    // was '#004500', should be '#18583F'
        colorsGreenGreen900: '#103B2B',                    // was '#002900', should be '#103B2B'

        // Colors - Blues
        colorsBlueBlue100: '#EEF2FF',                      // was '#e8ebf3', should be '#EEF2FF'
        colorsBlueBlue200: '#DCE4FF',                      // was '#bbc3db', should be '#DCE4FF'
        colorsBlueBlue300: '#BCCBFF',                      // was '#8e9cc4', should be '#BCCBFF'
        colorsBlueBlue400: '#8EA7F2',                      // was '#4a61a1', should be '#8EA7F2'
        colorsBlueBlue500: '#4F6FD8',                      // was '#1e3a8a', should be '#4F6FD8'
        colorsBlueBlue600: '#3F5CC4',                      // was '#1b347c', should be '#3F5CC4'
        colorsBlueBlue700: '#354DA8',                      // was '#152860', should be '#354DA8'
        colorsBlueBlue800: '#2A3D84',                      // was '#0f1d45', should be '#2A3D84'
        colorsBlueGreen900: '#1E2C5F',                     // was '#091129', should be '#1E2C5F'

        // Colors - Yellows
        colorsYellowYellow100: '#FFF6E8',                  // was '#faf4dc', should be '#FFF6E8'
        colorsYellowYellow200: '#FEE7BF',                  // was '#f5e9ba', should be '#FEE7BF'
        colorsYellowYellow300: '#FBD38D',                  // was '#f0de97', should be '#FBD38D'
        colorsYellowYellow400: '#F4B45E',                  // was '#ebd474', should be '#F4B45E'
        colorsYellowYellow500: '#D98A2B',                  // was '#ecc94b', should be '#D98A2B'
        colorsYellowYellow600: '#B87324',                  // was '#bda139', should be '#B87324'
        colorsYellowYellow700: '#945D1D',                  // was '#8e7927', should be '#945D1D'
        colorsYellowYellow800: '#734816',                  // was '#5f5116', should be '#734816'
        colorsYellowYellow900: '#4E300E',                  // was '#2f2805', should be '#4E300E'

        // Colors - Neutral
        colorsNeutralBlack: '#0a141f',                     // was '#121212', should be '#0a141f'
        colorsNeutralWhite: '#f5f9fb',                     // matches

        // Border Colors
        borderBorderColorsBorderDefault: 'var(--colors-grays-gray-300)',
        borderBorderColorsBorderHover: 'var(--colors-grays-gray-500)',
        borderBorderColorsBorderFocused: 'var(--colors-primary-primary-color)',
        borderBorderColorsBorderError: 'var(--colors-status-error)',
        borderBorderColorsBorderDisabled: 'var(--colors-grays-gray-600)',

        // Inputs - Normal State
        inputsNormalText: 'var(--colors-text-heading)',
        inputsNormalBordercolor: 'var(--border-border-colors-border-default)',
        inputsNormalPlaceholder: 'var(--colors-text-placeholder)',
        inputsNormalLabel: 'var(--colors-text-body)',
        inputsNormalSupportText: 'var(--colors-text-muted)',
        inputsNormalIconToSelect: 'var(--icons-primary)',
        inputsNormalPlaceholderIcon: 'var(--icons-placeholder)',
        inputsNormalBackground: 'var(--colors-background-inputs-background)',

        // Inputs - Focused State
        inputsFocusedBackground: 'var(--colors-background-inputs-background)',
        inputsFocusedText: 'var(--colors-primary-primary-color)',
        inputsFocusedLabel: 'var(--colors-primary-primary-color)',
        inputsFocusedPlaceholder: 'var(--colors-text-placeholder)',
        inputsFocusedSupportText: 'var(--colors-text-body)',
        inputsFocusedIconToSelect: 'var(--icons-primary)',
        inputsFocusedPlaceholderIcon: 'var(--icons-placeholder)',
        inputsFocusedBordercolor: 'var(--border-border-colors-border-focused)',

        // Inputs - Hover State
        inputsHoverBackground: 'var(--colors-background-inputs-background)',
        inputsHoverText: 'var(--colors-text-heading)',
        inputsHoverLabel: 'var(--colors-text-body)',
        inputsHoverPlaceholder: 'var(--colors-text-placeholder)',
        inputsHoverSupportText: 'var(--colors-text-muted)',
        inputsHoverIconToSelect: 'var(--icons-primary)',
        inputsHoverPlaceholderIcon: 'var(--icons-placeholder)',
        inputsHoverBordercolor: 'var(--border-border-colors-border-hover)',

        // Inputs - Error State
        inputsErrorBackground: 'var(--colors-background-inputs-background)',
        inputsErrorText: 'var(--colors-status-error)',
        inputsErrorLabel: 'var(--colors-status-error)',
        inputsErrorPlaceholder: 'var(--colors-text-placeholder)',
        inputsErrorSupportText: 'var(--colors-status-error)',
        inputsErrorIconToSelect: 'var(--icons-primary)',
        inputsErrorPlaceholderIcon: 'var(--icons-placeholder)',
        inputsErrorBordercolor: 'var(--border-border-colors-border-error)',

        // Inputs - Disabled State
        inputsDisabledBackground: 'var(--colors-grays-gray-200)',
        inputsDisabledText: 'var(--colors-text-disabled)',
        inputsDisabledLabel: 'var(--colors-text-disabled)',
        inputsDisabledPlaceholderIcon: 'var(--icons-disabled)',
        inputsDisabledBordercolor: 'var(--border-border-colors-border-disabled)',
        inputsDisabledHighlightedText: 'var(--colors-text-body)',

        // Icons
        iconsHeading: 'var(--colors-grays-gray-900)',
        iconsBody: 'var(--colors-grays-gray-700)',
        iconsMuted: 'var(--colors-grays-gray-600)',
        iconsDisabled: 'var(--colors-grays-gray-500)',
        iconsPlaceholder: 'var(--colors-grays-gray-400)',

        // Buttons - Primary
        buttonsPrimaryBackground: 'var(--colors-primary-primary-color)',
        buttonsPrimaryText: 'var(--colors-text-primary-buttons)',
        buttonsPrimaryHover: 'var(--colors-primary-primary-600)',
        buttonsPrimaryIcon: 'var(--icons-primary-buttons)',
        buttonsPrimaryBordercolor: 'var(--colors-primary-primary-color)',

        // Buttons - Secondary
        buttonsSecondaryBackground: 'var(--colors-primary-primary-100)',
        buttonsSecondaryText: 'var(--colors-primary-primary-color)',
        buttonsSecondaryBordercolor: 'var(--colors-primary-primary-color)',
        buttonsSecondaryHover: 'var(--colors-primary-primary-200)',
        buttonsSecondaryIcon: 'var(--icons-primary)',
      },
      borderRadius: {
        borderRadius4px: '0.25rem',
        borderRadius8px: '0.5rem',
        borderRadius12px: '0.75rem',
        borderRadius16px: '1rem',
        borderRadius20px: '1.25rem',
        borderRadius24px: '1.5rem',
        borderRadius28px: '1.75rem',
        borderRadius32px: '2rem',
        borderRadius36px: '2.25rem',
        borderRadius40px: '2.5rem',
        borderRadius44px: '2.75rem',
        borderRadius48px: '3rem',
        borderRadius52px: '3.25rem',
        borderRadius56px: '3.5rem',
        borderRadius60px: '3.75rem',
        borderRadius64px: '4rem',
        borderRadius68px: '4.25rem',
        borderRadius72px: '4.25rem',
        borderRadius76px: '4.75rem',
        borderRadius80px: '5rem',
        borderRadius84px: '5.25rem',
        borderRadius88px: '5.5rem',
        borderRadius92px: '5.75rem',
        borderRadius96px: '6rem',
        borderRadius100px: '6.25rem',
        borderRadius104px: '6.5rem',
        borderRadius108px: '6.75rem',
        borderRadius112px: '7rem',
        borderRadius116px: '7.25rem',
        borderRadius120px: '7.5rem',
        borderRadius124px: '7.75rem',
        borderRadius128px: '8rem', // Change this value as needed
      },
      borderWidth: {
        borderWidth1px: '0.0625rem',
        borderWidth2px: '0.125rem',
        borderWidth3px: '0.1875rem',
        borderWidth4px: '0.25rem',
        borderWidth5px: '0.3125rem',
        borderWidth6px: '0.375rem',
        borderWidth7px: '0.4375rem',
        borderWidth8px: '0.5rem',
      },
      margin: {
        spacingGapGap20px: '1.25rem',
        spacingGapGap28px: '1.75rem',
        spacingGapGap36px: '2.25rem',
        spacingGapGap44px: '2.75rem',
        spacingGapGap52px: '3.25rem',
        spacingGapGap56px: '3.5rem',
        spacingGapGap60px: '3.75rem',
        spacingGapGap68px: '4.25rem',
        spacingGapGap72px: '4.25rem',
        spacingGapGap76px: '4.75rem',
        spacingGapGap80px: '5rem',
        spacingGapGap84px: '5.25rem',
        spacingGapGap88px: '5.5rem',
        spacingGapGap92px: '5.75rem',
        spacingGapGap96px: '6rem',
        spacingGapGap100px: '6.25rem',
        spacingGapGap104px: '6.5rem',
        spacingGapGap108px: '6.75rem',
        spacingGapGap112px: '7rem',
        spacingGapGap116px: '7.25rem',
        spacingGapGap120px: '7.5rem',
        spacingGapGap124px: '7.75rem',
        spacingGapGap4px: '0.25rem',
        spacingGapGap8px: '0.5rem',
        spacingGapGap12px: '0.75rem',
        spacingGapGap16px: '1rem',
        spacingGapGap24px: '1.5rem',
        spacingGapGap32px: '2rem',
        spacingGapGap40px: '2.5rem',
        spacingGapGap48px: '3rem',
        spacingGapGap64px: '4rem',
        spacingGapGap128px: '8rem',
      },
      opacity: {
        opacityOpacity5: '0.3125rem',
        opacityOpacity10: '0.625rem',
        opacityOpacity15: '0.9375rem',
        opacityOpacity20: '1.25rem',
        opacityOpacity25: '1.5625rem',
        opacityOpacity30: '1.875rem',
        opacityOpacity35: '2.1875rem',
        opacityOpacity40: '2.5rem',
        opacityOpacity45: '2.8125rem',
        opacityOpacity50: '3.125rem',
        opacityOpacity55: '3.4375rem',
        opacityOpacity60: '3.75rem',
        opacityOpacity65: '4.0625rem',
        opacityOpacity70: '4.375rem',
        opacityOpacity75: '4.6875rem',
        opacityOpacity80: '5rem',
        opacityOpacity85: '5.3125rem',
        opacityOpacity90: '5.625rem',
        opacityOpacity95: '5.9375rem',
        opacityOpacity100: '6.25rem',
      },
      container: {
        center: true,
      },
      maxWidth: {
        container: '90%',
      },
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        // You can add your own breakpoints too:
        '3xl': '1920px',
      },
      padding: {
        spacingPaddingPadding4px: '0.25rem',
        spacingPaddingPadding8px: '0.5rem',
        spacingPaddingPadding12px: '0.75rem',
        spacingPaddingPadding16px: '1rem',
        spacingPaddingPadding20px: '1.25rem',
        spacingPaddingPadding24px: '1.5rem',
        spacingPaddingPadding28px: '1.75rem',
        spacingPaddingPadding32px: '2rem',
        spacingPaddingPadding36px: '2.25rem',
        spacingPaddingPadding40px: '2.5rem',
        spacingPaddingPadding44px: '2.75rem',
        spacingPaddingPadding48px: '3rem',
        spacingPaddingPadding52px: '3.25rem',
        spacingPaddingPadding56px: '3.5rem',
        spacingPaddingPadding60px: '3.75rem',
        spacingPaddingPadding64px: '4rem',
        spacingPaddingPadding68px: '4.25rem',
        spacingPaddingPadding72px: '4.25rem',
        spacingPaddingPadding76px: '4.75rem',
        spacingPaddingPadding80px: '5rem',
        spacingPaddingPadding84px: '5.25rem',
        spacingPaddingPadding88px: '5.5rem',
        spacingPaddingPadding92px: '5.75rem',
        spacingPaddingPadding96px: '6rem',
        spacingPaddingPadding100px: '6.25rem',
        spacingPaddingPadding104px: '6.5rem',
        spacingPaddingPadding108px: '6.75rem',
        spacingPaddingPadding112px: '7rem',
        spacingPaddingPadding116px: '7.25rem',
        spacingPaddingPadding120px: '7.5rem',
        spacingPaddingPadding124px: '7.75rem',
        spacingPadding128px: '8rem',
      },
      fontSize: {
        /* Text-size styles */
        textHeadingsHeading864pxRegular: '4rem',
        textHeadingsHeading864pxMedium: '4rem',
        textHeadingsHeading864pxSemiBold: '4rem',
        textHeadingsHeading864pxBold: '4rem',
        textHeadingsHeading748pxRegular: '3rem',
        textHeadingsHeading748pxMedium: '3rem',
        textHeadingsHeading748pxSemiBold: '3rem',
        textHeadingsHeading748pxBold: '3rem',
        textHeadingsHeading640pxRegular: '2.5rem',
        textHeadingsHeading640pxMedium: '2.5rem',
        textHeadingsHeading640pxSemiBold: '2.5rem',
        textHeadingsHeading640pxBold: '2.5rem',
        textHeadingsHeading536pxRegular: '2.25rem',
        textHeadingsHeading536pxMedium: '2.25rem',
        textHeadingsHeading536pxSemiBold: '2.25rem',
        textHeadingsHeading536pxBold: '2.25rem',
        textHeadingsHeading432pxRegular: '2rem',
        textHeadingsHeading432pxMedium: '2rem',
        textHeadingsHeading432pxSemiBold: '2rem',
        textHeadingsHeading432pxBold: '2rem',
        textHeadingsHeading328pxRegular: '1.75rem',
        textHeadingsHeading328pxMedium: '1.75rem',
        textHeadingsHeading328pxSemiBold: '1.75rem',
        textHeadingsHeading328pxBold: '1.75rem',
        textHeadingsHeading224pxRegular: '1.5rem',
        textHeadingsHeading224pxMedium: '1.5rem',
        textHeadingsHeading224pxSemiBold: '1.5rem',
        textHeadingsHeading224pxBold: '1.5rem',
        textHeadingsHeading120pxRegular: '1.25rem',
        textHeadingsHeading120pxMedium: '1.25rem',
        textHeadingsHeading120pxSemiBold: '1.25rem',
        textHeadingsHeading120pxBold: '1.25rem',
        textBodyBodyLarge18pxRegular: '1.125rem',
        textBodyBodyLarge18pxMedium: '1.125rem',
        textBodyBodyLarge18pxSemiBold: '1.125rem',
        textBodyBodyLarge18pxBold: '1.125rem',
        textBodyBodyMed16pxRegular: '1rem',
        textBodyBodyMed16pxMedium: '1rem',
        textBodyBodyMed16pxSemiBold: '1rem',
        textBodyBodyMed16pxBold: '1rem',
        textBodyContent14pxRegular: '0.875rem',
        textBodyContent14pxMedium: '0.875rem',
        textBodyContent14pxSemiBold: '0.875rem',
        textBodyContent14pxBold: '0.875rem',
        textBodyCaption12pxRegular: '0.75rem',
        textBodyCaption12pxMedium: '0.75rem',
        textBodyCaption12pxSemiBold: '0.75rem',
        textBodyCaption12pxBold: '0.75rem',
        textBodyFootnote10pxRegular: '0.625rem',
        textBodyFootnote10pxMedium: '0.625rem',
        textBodyFootnote10pxSemiBold: '0.625rem',
        textBodyFootnote10pxBold: '0.625rem',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      boxShadow: {
        e0: '0px 0px 0px 0px #1b1c1d00',
        e1: '0px 2px 4px 0px #1b1c1d0a',
        e2: '0px 16px 32px -12px #585c5f1a',
        e3: '0px 16px 40px -8px #585c5f29',
        e4: '0px 16px 40px 0px #585c5f29',
        e5: 'inset 0px 2px 4px 0px #1b1c1d0a',
        e6: 'inset 0px 16px 32px -12px #585c5f1a',
        e7: 'inset 0px 25px 36.5px -7px #585c5f29',
        e8: 'inset 0px 32px 33.2px -7px #585c5f29',
        e9: '0px 4px 20px -5px #0092ff1f',
      },
    },
  }
};
