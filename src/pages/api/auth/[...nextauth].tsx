import { query as q } from 'faunadb';

import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'read:user',
                },
            },
        })
    ],
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //         try {}
    //     }
    // }
});