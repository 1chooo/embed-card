export const sampleEmbeds = [
  {
    label: "YouTube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    label: "X",
    url: "https://x.com/1chooo___/status/2028573993972969585",
  },
  {
    label: "Reddit",
    url: "https://www.reddit.com/r/reactjs/comments/1bz9yqv/what_are_you_building_with_react_this_week/",
  },
  {
    label: "Google Maps",
    url: "https://www.google.com/maps?q=Tokyo+Station&output=embed",
  },
  {
    label: "Vimeo",
    url: "https://vimeo.com/76979871",
  },
] as const

export const demoThemes = [
  {
    id: "editorial",
    label: "Editorial",
    theme: {
      accentColor: "#e11d48",
      background: "rgba(255,255,255,0.97)",
      borderColor: "rgba(225,29,72,0.18)",
      mutedColor: "rgba(17,24,39,0.62)",
      radius: 28,
      shadow: "0 28px 100px rgba(225,29,72,0.14)",
    },
  },
  {
    id: "cobalt",
    label: "Cobalt",
    theme: {
      accentColor: "#1d4ed8",
      background: "rgba(239,246,255,0.97)",
      borderColor: "rgba(29,78,216,0.18)",
      mutedColor: "rgba(30,41,59,0.7)",
      radius: 24,
      shadow: "0 28px 100px rgba(29,78,216,0.16)",
    },
  },
  {
    id: "mint",
    label: "Mint",
    theme: {
      accentColor: "#047857",
      background: "rgba(236,253,245,0.98)",
      borderColor: "rgba(4,120,87,0.18)",
      mutedColor: "rgba(6,78,59,0.68)",
      radius: 30,
      shadow: "0 28px 100px rgba(4,120,87,0.13)",
    },
  },
] as const
