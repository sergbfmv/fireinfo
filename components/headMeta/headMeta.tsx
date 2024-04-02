import Head from "next/head";

export const HeadMeta = () => {
    return (
        <Head>
            <title>Fire Info</title>
            <meta name="description" content="Fire staistic info"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};