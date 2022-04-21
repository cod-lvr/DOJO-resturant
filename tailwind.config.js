module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extends: {
      colors: {
        white: "#fff",
        "parg-cl": "#b6b6b6",
        black: "#000",
        "btn-cl": "#c4c4c4",
        gold: "#806400",
        "div-cl": "#171717",
      },
    },
    fontFamily: {
      Trav: ["Taviraj", "serif"],
      Taur: ["Tauri", "sans-serif"],
    },
    backgroundImage: {
      "hero-pattern-mob": "url('./assets/mobile/bg-mob-hero.png')",
      "hero-pattern-desk": "url('./assets/desktop/bg-desktop-hero.png')",
      "content-pattern-mob": "url('./assets/mobile/bg-mob-contact.png')",
      "content-pattern-desk": "url('./assets/desktop/bg1 - desktop.png')",
      "contact-pattern-mob": "url('./assets/mobile/bg-mob-contact.png')",
      "contact-pattern-desk": "url('./assets/desktop/bg-contact-desktop.png')",
      "head-places": "url('./assets/photos/head-places.jpg')",
      "place-one": "url('./assets/photos/place-one.jpg')",
      "place-two": "url('./assets/photos/place-two.jpg')",
    },
  },
  plugins: [],
};
