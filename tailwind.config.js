/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*html"],
  theme: {
    extend: {
      colors: {
        DarkBlueintroemailbg: "hsl(217, 28%, 15%)",
        DarkBluemainbg: "hsl(218, 28%, 13%)",
        DarkBluefooterbg: "hsl(216, 53%, 9%)",
        DarkBluetestibg: "hsl(219, 30%, 18%)",
        BlueinsidectaGrad: "hsl(198, 60%, 50%)",
        Lightrederror: "hsl(0, 100%, 63%)",
        CyaninsidectaGrad: "hsl(176, 68%, 64%)",
      },
    },
  },
  plugins: [],
};
