import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "@/components/AnimatedText";

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles | Page </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Articles Page! "
            className="mb-16 md:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
        </Layout>
      </main>
    </>
  );
};

export default articles;
