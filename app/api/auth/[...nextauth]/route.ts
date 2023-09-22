import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const googleProviderCredentials = {
  web: {
    client_id:
      '34147812897-re18v3rhks6roth1s8nev4e0sngm6cqe.apps.googleusercontent.com',
    project_id: 'seller-396610',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_secret: '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',
    redirect_uris: [
      'http://localhost:3000/api/auth/callback/google',
      'https://seller-kappa.vercel.app/api/auth/callback/google',
    ],
    javascript_origins: [
      'http://localhost:3000',
      'https://seller-kappa.vercel.app',
    ],
  },
};

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleProviderCredentials.web.client_id,
      clientSecret: googleProviderCredentials.web.client_secret,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
