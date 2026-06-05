import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            Leggi la documentazione
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentazione di Frontend Quiz App, un'applicazione React interattiva per testare le conoscenze frontend">
      <HomepageHeader />
      <main>
        <section className="container margin-top--lg margin-bottom--lg">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className="card">
                <div className="card__header">
                  <h3>Benvenuto nella documentazione</h3>
                </div>
                <div className="card__body">
                  <p>
                    Frontend Quiz App è un'applicazione web interattiva per mettere alla prova
                    le tue conoscenze su HTML, CSS, JavaScript e Accessibilità.
                  </p>
                  <ul>
                    <li><Link to="/docs/overview">Panoramica del progetto</Link></li>
                    <li><Link to="/docs/getting-started">Guida introduttiva</Link></li>
                    <li><Link to="/docs/architecture">Architettura</Link></li>
                    <li><Link to="/docs/configuration">Configurazione</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
