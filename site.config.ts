export const config = {
  siteMeta: {
    title: "p12 Blog<s",
    teamName: "p12",
    description: "RSS based blog for p12.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://p12-blogs.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/p12-sandbox/team-blog-hub",
    },
  ],
};
