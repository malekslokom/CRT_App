module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      width: {
        "1/7": "14.2857%"
      },
      height: {
        "10/12": "83.333%",
        "1/3": "33.333%"
      },
      boxShadow: {
        default: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        lg: "0 3px 6px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.24)",
        xl: "0 6px 12px rgba(0,0,0,0.19), 0 1px 2px rgba(0,0,0,0.24)",
        "outline-primary": "0 0 2px 2px rgba(252, 165, 165,5)"
      },
      colors: {
        primary: "#C53030",
        primary_light: "#DC2626",
        second: "#4B5563",
        second_light: "#1F2937"
      },
      ringOffsetWidth: {
        "3": "3px",
        "6": "6px",
        "10": "10px"
      },

      ringOffsetColor: {
        default: "#DC2626"
      }
    }
  },
  variants: {},
  plugins: []
};
