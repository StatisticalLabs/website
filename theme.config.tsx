import Image from "next/image";
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
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/StatisticalLabs/website",
  footer: {
    text: <p>&copy; {new Date().getFullYear()} Statistical Labs</p>,
  },
};

export default config;
