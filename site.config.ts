export const config = {
  siteMeta: {
    title: "12期 Blog's",
    teamName: "12期",
    description: "12期生のブログなどをまとめています。毎日10時ごろにRSSをもとに更新を行います。",
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
