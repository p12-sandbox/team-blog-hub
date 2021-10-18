import Link from "next/link";
import { config } from "@site.config";
import { ThemeChanger } from '@src/components/ThemeChanger';
import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteHeader: React.FC = () => (
  <header className="site-header">
    <ContentWrapper>
      <div className="site-header__inner">
        <Link href="/" passHref>
          <a className="site-header__logo-link">
            <img
              src="/logo.svg"
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
            <ThemeChanger className="site-header__nav__item"/>
        </div>

      </div>
    </ContentWrapper>
  </header>
);
