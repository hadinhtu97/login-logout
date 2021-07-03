import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { signIn, signOut, useSession } from 'next-auth/client'

import Login from '../components/login'


const Home = () => {

    const [session, loading] = useSession()

    return (
        <>
            <Head>
                <title>Login - Logout</title>
            </Head>
            <main>
                {
                    !session && <Login />
                }
                {
                    session && <div className={styles.main}>
                        Wellcome, {session.user.name}! 
                        <br/> <br/>
                        <button className={styles.button} onClick={() => signOut()}>Sign Out</button>
                    </div>
                }
            </main>
        </>
    )
}

export default Home