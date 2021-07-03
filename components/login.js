import styles from './login.module.css'

import { signIn } from 'next-auth/client'

const Login = () => {
    return (
        <div className={styles.login}>
            <button className={styles.button} onClick={() => signIn('github')}>Sign in with github</button> <br />
            <button className={styles.button} onClick={() => signIn('google')}>Sign in with google</button> <br />
            <button className={styles.button} onClick={() => signIn('facebook')}>Sign in with facebook</button> <br />
        </div>
    )
}

export default Login