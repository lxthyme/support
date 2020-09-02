import Head from "next/head";

/// test
const Home = ({ mail }) => {
  return (
    <div
      className="v-main-wrapper"
      style={{
        padding: "16px",
      }}
    >
      <p>
        If you have any questions, you can leave a message here or send it to
        the mailbox, and we will answer you in the first time.
      </p>
      <p>
        Email address: <a href={`mailto:${mail}`}>{mail}</a>
      </p>
      <p>Thank you!</p>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
export const getStaticProps = async ({ params, preview, previewData }) => {
  const envName = "mail_" + process.env.NODE_BUILD_ENV
    const name = process.env[envName]
  return {
    props: {
      mail: process.env[name],
    },
  };
};

Home.displayName = "Page";
export default Home;
