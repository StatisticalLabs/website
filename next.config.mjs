import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  redirects: async () => [
    {
      source: "/discord",
      destination: "https://discord.gg/MEF8q6MwTc",
      permanent: false,
    },
    {
      source: "/invite",
      destination: "https://top.gg/bot/1077159995487035402/invite",
      permanent: false,
    },
    {
      source: "/vote",
      destination: "https://top.gg/bot/1077159995487035402/vote",
      permanent: false,
    },
  ],
  images: {
    domains: ["yt3.googleusercontent.com"],
  },
});
