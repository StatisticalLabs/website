import Image from "next/image";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

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
  useNextSeoProps: () => ({ titleTemplate: "%s – Statistical" }),
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
