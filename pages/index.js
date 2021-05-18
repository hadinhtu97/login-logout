import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { signIn, signOut, useSession } from 'next-auth/client'


const Home = () => {

    const [session, loading] = useSession()

    return (
        <>
            <Head>
                <title>Next temp</title>
            </Head>
            <main className={styles.main}>
                {
                    !session && <>
                        Not signed in <br />
                        <button onClick={() => signIn()}>Sign in</button>
                    </>
                }
                {
                    session && <>
                        Signed in as {session.user.name} <br />
                        <button onClick={() => signOut()}>Sign Out</button>
                    </>
                }
            </main>
        </>
    )
}

export default Home