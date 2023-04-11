import Image from "next/image";
import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";

const titleTemplate = "%s – Statistical";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <Image
        src="/logo.png"
        alt="Statistical Logo"
        width={60}
        height={60}
        style={{
          marginLeft: "-10px",
        }}
      />
    </span>
  ),
  useNextSeoProps: () => ({ titleTemplate }),
  project: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="#fff"
      >
        <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
      </svg>
    ),
    link: "/invite",
  },
  chat: {
    link: "/discord",
  },
  docsRepositoryBase: "https://github.com/StatisticalLabs/website",
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  head: () => {
    const { title } = useConfig();
    const description =
      "Track your favorite YouTuber's subscriber counts, view statistics about a server and it's users, and more.";
    const domain = "statistical.vercel.app";
    const url = ("https://" + domain) as `https://${typeof domain}`;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={titleTemplate.replace("%s", title)} />
        <meta name="description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta name="twitter:site:domain" content={domain} />
        <meta name="twitter:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta name="theme-color" content="#ffffff" />
      </>
    );
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: <p>&copy; {new Date().getFullYear()} Statistical Labs</p>,
  },
};

export default config;
