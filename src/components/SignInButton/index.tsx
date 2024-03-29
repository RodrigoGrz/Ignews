import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import { FaGithub } from 'react-icons/fa';

export function SignInButton() {
    const { data: session } = useSession();

    return session ? (
        <button
            className={styles.signInButton}
            type='button'
            onClick={() => signOut()}
        >
            <FaGithub color="#04D361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type='button'
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#EBA417" />
            Sign in with Github
        </button>
    )
}