import Link from "next/link";
import Image from "next/image";
import { config } from "@site.config";
import { ThemeChanger } from "@src/components/ThemeChanger";
import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteHeader: React.FC = () => (
  <header className="site-header">
    <ContentWrapper>
      <div className="site-header__inner">
        <Link href="/" passHref>
          <a className="site-header__logo-link">
            <Image
              src="/logo.svg"
              width={80}
              height={80}
              alt={config.siteMeta.title}
              className="site-header__logo-img"
            />
          </a>
        </Link>

        <div className="site-header__nav">
            {config.headerLinks.map((link, i) => {
                const key = `header-link-${i}`;
                if (link.href.startsWith("/")) {
                return (
                    <Link key={key} href={link.href} passHref>
                    <a className="site-header__nav__item">{link.title}</a>
                    </Link>
                );
                }
                return (
                <a key={key} href={link.href} className="site-header__nav__item">
                    {link.title}
                </a>
                );
            })}
            <ThemeChanger/>
        </div>

      </div>
    </ContentWrapper>
  </header>
);
