import React from "react";
import Head from "next/head";
import styles from "../../sass/components/Blogs.module.scss";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import Queries from "../../components/Queries";
import Footer from "../../components/Footer";
function id() {
  return (
    <div className={styles.posts}>
      <Head>
        <title>id</title>
        <meta
          name="description"
          content="Our blog featuring helpful and interesting articles on finance, asset valuation, and entrepreneurship."
        />
        <meta name="keywords" content="" />
      </Head>

      <Header />

      <div className={styles.hero}>
        <div>
          <Link href="/apply">
            <a className={styles.link}>Apply for Loan at Depfin Finance.</a>
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <h1>what is id?</h1>

        <div className={styles.content}>
          <div className={styles.blog__image}>
            <Image
              className={styles.image}
              src="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg"
              layout="fill"
              objectFit="contain"
              alt="title"
            />
          </div>

          <div className={styles.blog__details}>
            <p>
              {" "}
              Business loans are financial credits extended by financial
              institutions to corporations and sole traders for financing
              business activities.
            </p>

            <h2>Business Loans</h2>
            <p>
              When running a business, the financial management team and the
              executive directors have an essential role in striking the right
              capital mix depending on the business phase and economic cycle.
            </p>
            <p>
              Businesses go through phases of recessions and growth, and these
              can be traced to the shrinkage of the markets, political
              situations, and other unforeseen events. When events turn to be
              unfavorable for a company, the risk of a financial recession can
              be mitigated by the use of a business loan.
            </p>

            <p>
              Business loans have a significant variation from personal loans,
              short-term loans, and quick loans. Companies and business set-ups
              also experience financial shortages and recessions that need
              funding from external players. The lenders could be large
              investment corporations, banking institutions, or other companies
              that have an investment interest in the specific line of business.
            </p>

            <p>
              Business loans are at all times more abundant than personal loans
              and come in the form of long-term investments that are issued at
              low-interest rates.
            </p>
            <p>
              Business loans are at all times more abundant than personal loans
              and come in the form of long-term investments that are issued at
              low-interest rates.
            </p>

            <h3>Why business Loans?</h3>
            <p>
              The fathers of economics and finance have made extensive
              researches and designed models that illustrate the need for loan
              finance in a business.
            </p>
            <p>
              Whether the business is performing well or going through financial
              difficulties, there is a point where a business loan will help the
              company to realize maximum profits.
            </p>

            <p>
              The Markowitz Portfolio theory has made many headlines for
              striking a balance between the maximum debt and share capital. The
              company needs to maximize return at the same time, minimizing
              risk. This means that managers have a role of finding relevant and
              sufficient debt finance.
            </p>
            <p>
              The common reasons for the utilization of business loans can be
              one of the following:
            </p>

            <h5>.FACILITATING GROWTH</h5>
            <p>
              __ There are two ways in which companies or business corporations
              can finance their growth, which is through saving business profits
              that accumulate as reserves or sourcing funds from external
              financial institutions that provide business loans.
            </p>
            <p>
              __ The use of reserves can only be done when the company or
              business corporation is large and has managed to earn enough
              profits to set aside, but in events where the company is a small
              business, the loan can facilitate growth.
            </p>
            <p>
              {" "}
              __Business loans will help a corporation with the finance needed
              to acquire property plant and equipment, and these are the fixed
              assets required for the business to increase its operational
              capacity.
            </p>

            <h5>.WORKING CAPITAL FUNDING</h5>
            <p>
              __ In finance, working capital is generally referred to as the
              blood of a business, which means without enough working capital,
              all companies will find it difficult to survive.
            </p>
            <p>
              __ Working capital includes stocks, cash, and prepayments that the
              business use in its daily activities. Business loans present an
              undisputed opportunity for companies to rejuvenate their working
              capital, giving them an advantage over other companies.
            </p>
            <p>
              {" "}
              __ Thus business loans have an important role when a company faces
              problems.
            </p>

            <h5>.MAXIMIZING DEBT FINANCE OPPORTUNITIES</h5>
            <p>
              __ As mentioned earlier in the Markovits theory, there is a point
              where businesses need to use debt finance in its operations. This
              is the strike between the optimum debt capital and share capital.
            </p>
            <p>
              __ The reason behind the optimum capital levels is that, when the
              company is making large profits, the use of debt capital can
              multiply the benefits. While using debt finance or business loans
              will increase losses when the company is performing.
            </p>
            <p>
              __ If the cost of a business loan is smaller than the return on
              capital employed by the business, the business will enjoy a
              financial advantage on business loans.
            </p>

            <h3>HOW TO APPLY FOR BUSINESS LOANS?</h3>
            <p>
              Business loans can be applied online or through the paper based
              application, but when the applicant takes the online application,
              it does not outplay the need for the company or top business
              official to visit the financial institution.
            </p>
            <p>
              The application of a business loan starts with making an
              appointment with a banker or business loan officer of the relevant
              financial institution. This is when the company official
              communicates its financial requirements to the banker or business
              loan officer.
            </p>
            <p>
              After filling business loan application forms, the official will
              be required to provide their business proposal, audited financial
              statements, top officials’ profiles and identify physical assets
              that will be used as collateral if needed.
            </p>
            <p>
              When these have been done, a business loan would be obtained and
              the business receives funds needed for growth and improvement of
              financial results.
            </p>
          </div>
        </div>
      </div>

      <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg" />

      <Footer />
    </div>
  );
}

export default id;
