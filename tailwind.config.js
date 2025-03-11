module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '853px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: "transparent",
      neutral: {
        DEFAULT: "rgba(var(--color-neutral), <alpha-value>)",
        50: "rgba(var(--color-neutral-50), <alpha-value>)",
        100: "rgba(var(--color-neutral-100), <alpha-value>)",
        200: "rgba(var(--color-neutral-200), <alpha-value>)",
        300: "rgba(var(--color-neutral-300), <alpha-value>)",
        400: "rgba(var(--color-neutral-400), <alpha-value>)",
        500: "rgba(var(--color-neutral-500), <alpha-value>)",
        600: "rgba(var(--color-neutral-600), <alpha-value>)",
        700: "rgba(var(--color-neutral-700), <alpha-value>)",
        800: "rgba(var(--color-neutral-800), <alpha-value>)",
        900: "rgba(var(--color-neutral-900), <alpha-value>)",
      },
      primary: {
        50: "rgba(var(--color-primary-50), <alpha-value>)",
        100: "rgba(var(--color-primary-100), <alpha-value>)",
        200: "rgba(var(--color-primary-200), <alpha-value>)",
        300: "rgba(var(--color-primary-300), <alpha-value>)",
        400: "rgba(var(--color-primary-400), <alpha-value>)",
        500: "rgba(var(--color-primary-500), <alpha-value>)",
        600: "rgba(var(--color-primary-600), <alpha-value>)",
        700: "rgba(var(--color-primary-700), <alpha-value>)",
        800: "rgba(var(--color-primary-800), <alpha-value>)",
        900: "rgba(var(--color-primary-900), <alpha-value>)",
      },
      secondary: {
        50: "rgba(var(--color-secondary-50), <alpha-value>)",
        100: "rgba(var(--color-secondary-100), <alpha-value>)",
        200: "rgba(var(--color-secondary-200), <alpha-value>)",
        300: "rgba(var(--color-secondary-300), <alpha-value>)",
        400: "rgba(var(--color-secondary-400), <alpha-value>)",
        500: "rgba(var(--color-secondary-500), <alpha-value>)",
        600: "rgba(var(--color-secondary-600), <alpha-value>)",
        700: "rgba(var(--color-secondary-700), <alpha-value>)",
        800: "rgba(var(--color-secondary-800), <alpha-value>)",
        900: "rgba(var(--color-secondary-900), <alpha-value>)",
      },
    },
    extend: {
      animation: {
        "text-slide-2":
          "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-3":
          "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-4":
          "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-5":
          "text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-6":
          "text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-7":
          "text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-8":
          "text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        'animate-scroll': 'scroll 10s linear infinite',
      },
      keyframes: {
        "text-slide-2": {
          "0%, 40%": {
            transform: "translateY(0%)",
          },
          "50%, 90%": {
            transform: "translateY(-33.33%)",
          },
          "100%": {
            transform: "translateY(-66.66%)",
          },
        },
        "text-slide-3": {
          "0%, 26.66%": {
            transform: "translateY(0%)",
          },
          "33.33%, 60%": {
            transform: "translateY(-25%)",
          },
          "66.66%, 93.33%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
        "text-slide-4": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "25%, 45%": {
            transform: "translateY(-20%)",
          },
          "50%, 70%": {
            transform: "translateY(-40%)",
          },
          "75%, 95%": {
            transform: "translateY(-60%)",
          },
          "100%": {
            transform: "translateY(-80%)",
          },
        },
        "text-slide-5": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
        "text-slide-6": {
          "0%, 13.33%": {
            transform: "translateY(0%)",
          },
          "16.66%, 30%": {
            transform: "translateY(-14.28%)",
          },
          "33.33%, 46.66%": {
            transform: "translateY(-28.57%)",
          },
          "50%, 63.33%": {
            transform: "translateY(-42.85%)",
          },
          "66.66%, 80%": {
            transform: "translateY(-57.14%)",
          },
          "83.33%, 96.66%": {
            transform: "translateY(-71.42%)",
          },
          "100%": {
            transform: "translateY(-85.71%)",
          },
        },
        "text-slide-7": {
          "0%, 11.43%": {
            transform: "translateY(0%)",
          },
          "14.28%, 25.71%": {
            transform: "translateY(-12.5%)",
          },
          "28.57%, 40%": {
            transform: "translateY(-25%)",
          },
          "42.85%, 54.28%": {
            transform: "translateY(-37.5%)",
          },
          "57.14%, 68.57%": {
            transform: "translateY(-50%)",
          },
          "71.42%, 82.85%": {
            transform: "translateY(-62.5%)",
          },
          "85.71%, 97.14%": {
            transform: "translateY(-75%)",
          },
          "100%": {
            transform: "translateY(-87.5%)",
          },
        },
        "text-slide-8": {
          "0%, 10%": {
            transform: "translateY(0%)",
          },
          "12.5%, 22.5%": {
            transform: "translateY(-11.11%)",
          },
          "25%, 35%": {
            transform: "translateY(-22.22%)",
          },
          "37.5%, 47.5%": {
            transform: "translateY(-33.33%)",
          },
          "50%, 60%": {
            transform: "translateY(-44.44%)",
          },
          "62.5%, 72.5%": {
            transform: "translateY(-55.55%)",
          },
          "75%, 85%": {
            transform: "translateY(-66.66%)",
          },
          "87.5%, 97.5%": {
            transform: "translateY(-77.77%)",
          },
          "100%": {
            transform: "translateY(-88.88%)",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
            "--tw-prose-body": theme("colors.neutral.700 / 1"),
            "--tw-prose-headings": theme("colors.neutral.800 / 1"),
            "--tw-prose-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-links": theme("colors.primary.600 / 1"),
            "--tw-prose-bold": theme("colors.neutral.900 / 1"),
            "--tw-prose-counters": theme("colors.neutral.800 / 1"),
            "--tw-prose-bullets": theme("colors.neutral.500 / 1"),
            "--tw-prose-hr": theme("colors.neutral.200 / 1"),
            "--tw-prose-quotes": theme("colors.neutral.700 / 1"),
            "--tw-prose-quote-borders": theme("colors.primary.200 / 1"),
            "--tw-prose-captions": theme("colors.neutral.500 / 1"),
            "--tw-prose-code": theme("colors.secondary.700 / 1"),
            "--tw-prose-pre-code": theme("colors.neutral.700 / 1"),
            "--tw-prose-pre-bg": theme("colors.neutral.50 / 1"),
            "--tw-prose-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-td-borders": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-body": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-headings": theme("colors.neutral.50 / 1"),
            "--tw-prose-invert-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-links": theme("colors.primary.400 / 1"),
            "--tw-prose-invert-bold": theme("colors.neutral.DEFAULT / 1"),
            "--tw-prose-invert-counters": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-bullets": theme("colors.neutral.600 / 1"),
            "--tw-prose-invert-hr": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-quotes": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-quote-borders": theme("colors.primary.900 / 1"),
            "--tw-prose-invert-captions": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-code": theme("colors.secondary.400 / 1"),
            "--tw-prose-invert-pre-code": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-pre-bg": theme("colors.neutral.700 / 1"),
            "--tw-prose-invert-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-td-borders": theme("colors.neutral.700 / 1"),
            a: {
              textDecoration: "none",
              textDecorationColor: theme("colors.primary.300 / 1"),
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.primary.600 / 1"),
                textDecoration: "none",
                borderRadius: "0.09rem",
              },
            },
            "a code": {
              color: "var(--tw-prose-code)",
            },
            kbd: {
              backgroundColor: theme("colors.neutral.200 / 1"),
              padding: "0.1rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            },
            mark: {
              color: theme("colors.neutral.800 / 1"),
              backgroundColor: theme("colors.primary.600 / 1"),
              padding: "0.1rem 0.2rem",
              borderRadius: "0.25rem",
            },
            code:{
              backgroundColor: theme("colors.neutral.50 / 1"),
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "0.25rem",
            },
            'code::before': {
              display: 'none'
            },
            'code::after': {
              display: 'none'
            },
            'p::before': {
              display: 'none'
            },
            'p::after': {
              display: 'none'
            },
            'a.active': {
              "text-decoration-color": theme("colors.primary.600 / 1"),
            },
            'p.active': {
              "text-decoration-color": theme("colors.primary.600 / 1"),
            }
          },
        },
        invert: {
          css: {
            a: {
              textDecorationColor: theme("colors.neutral.600 / 1"),
              "&:hover": {
                color: theme("colors.primary.400 / 1"),
              },
            },
            kbd: {
              color: theme("colors.neutral.200 / 1"),
              backgroundColor: theme("colors.neutral.700 / 1"),
            },
            mark: {
              backgroundColor: theme("colors.primary.400 / 1"),
            },
            code:{
              backgroundColor: theme("colors.neutral.700 / 1"),
            },
            'a.active': {
              "text-decoration-color": theme("colors.primary.400 / 1")
            },
            'p.active': {
              "text-decoration-color": theme("colors.primary.400 / 1")
            }
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' })
  ],
};
