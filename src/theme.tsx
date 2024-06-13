import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    ui: {
      main: "hsl(213, 96%, 18%)",
      purplishBlue: "hsl(243, 100%, 62%)",
      pastelBlue: "hsl(228, 100%, 84%)",
      lightBlue: "hsl(206, 94%, 87%)",
      strawberryRed: "hsl(354, 84%, 57%)",
      coolGray: "hsl(231, 11%, 63%)",
      lightGray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  components: {
    Heading: {
      variants: {
        stepTitle: {
          color: "ui.main",
          fontSize: { base: "25px", md: "-moz-initial" },
        },
      },
    },
    Text: {
      variants: {
        planDesc: {
          color: "ui.coolGray",
          marginTop: { base: "9px", md: "11px" },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          backgroundColor: "ui.main",
          color: "ui.white",
          _hover: {
            backgroundColor: "ui.purplishBlue",
          },
        },
        confirm: {
          backgroundColor: "ui.purplishBlue",
          color: "ui.white",
          _hover: {
            backgroundColor: "ui.pastelBlue",
          },
        },
        back: {
          backgroundColor: "transparent",
          color: "ui.coolGray",
          _hover: {
            color: "ui.main",
          },
        },
      },
    },
    Switch: {
      variants: {
        billed: {
          track: {
            bg: "ui.main",
            _checked: {
              bg: "ui.main",
            },
          },
          thumb: {
            bg: "ui.white",
            _checked: {
              bg: "ui.white",
            },
          },
        },
      },
    },
    Checkbox: {
      variants: {
        addOn: {
          container: {
            width: "100%",
            padding: { base: "15px", md: "20px" },
            border: "1px",
            borderColor: "ui.lightGray",
            borderRadius: "lg",
            _hover: {
              borderColor: "ui.purplishBlue",
            },
            _checked: {
              backgroundColor: "ui.alabaster",
              borderColor: "ui.purplishBlue",
            },
          },
          control: {
            borderWidth: "1px",
            rounded: "md",
            borderColor: "ui.lightGray",
            _checked: {
              bg: "ui.purplishBlue",
            },
          },
          label: {
            width: "100%",
            marginLeft: { base: "16px", md: "28px" },
          },
        },
      },
    },
    Stepper: {
      baseStyle: {
        step: {
          alignItems: "center",
          gap: "16px",
          fontWeight: "500",
        },
        indicator: {
          color: "white",
          borderColor: "ui.white",
          borderWidth: "1px",

          "&[data-status=complete]": {
            bg: "transparent",
          },

          "&[data-status=active]": {
            bg: "ui.lightBlue",
            borderColor: "ui.lightBlue",
            color: "ui.main",
          },

          "&[data-status=incomplete]": {
            bg: "transparent",
            borderWidth: "1px",
          },
        },
        title: {
          fontSize: "12px",
          color: "ui.lightBlue",
          fontWeight: "400",
          textTransform: "uppercase",
        },
        description: {
          fontSize: "14px",
          color: "ui.white",
          fontWeight: "bold",
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
      },
    },
  },
})

export default theme
