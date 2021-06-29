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
                        <button onClick={() => signIn('github')}>Sign in with github</button> <br />
                        <button onClick={() => signIn('google')}>Sign in with google</button> <br />
                        <button onClick={() => signIn('facebook')}>Sign in with facebook</button> <br />
                    </>
                }
                {
                    session && <>
                        Signed in as {session.user.name} <br />
                        <button onClick={() => signOut()}>Sign Out</button>
                        {console.log(session.user)}
                    </>
                }
            </main>
        </>
    )
}

export default Home