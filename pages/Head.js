import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="title"
          content="Transform Your Hiring Process with Talentely"
        />

        <meta
          name="description"
          content="Access Top Talent, No Costs & Accelerate Recruitment Cycles"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default PageHead;
