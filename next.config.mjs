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
    },
    {
      source: "/invite",
      destination:
        "https://discord.com/api/oauth2/authorize?client_id=1077159995487035402&permissions=19456&scope=applications.commands%20bot",
    },
    {
      source: "/vote",
      destination: "https://top.gg/bot/1077159995487035402/invite",
    },
  ],
  images: {
    domains: ["yt3.googleusercontent.com"],
  },
});
