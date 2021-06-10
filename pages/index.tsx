import Head from 'next/head'
import HomePage from '../src/pages'

export default function Home() {
    return (
        <>
            <Head>
                <title>AirFood</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomePage />
        </>
    )
}
