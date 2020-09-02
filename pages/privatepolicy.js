import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import fs from "fs";
// export const config = { amp: true };
const Policy = ({ policyString }) => {
  useEffect(() => {
    window.policy = policyString;
  }, []);
  return (
    <>
      <div
        className="v-policy-wrapper"
        style={{
          whiteSpace: "pre-wrap",
          padding: "16px",
        }}
      >
        {policyString}
      </div>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

// Policy.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
export const getStaticProps = async ({ params, preview, previewData }) => {
  let policyString = "";
  try {
    const envName = "policy_" + process.env.NODE_BUILD_ENV
    const name = process.env[envName]
    policyString = await fs.readFileSync(
      `./model/${name}`,
      "utf8"
    );
    policyString = policyString.split("\n").join("\n");
  } catch (e) {
    console.log("E: ", e);
    policyString = "";
  }

  return {
    props: {
      policyString,
    },
  };
};
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Policy.getInitialProps = async ({ req }) => {}
Policy.displayName = "Policy";

export default Policy;
