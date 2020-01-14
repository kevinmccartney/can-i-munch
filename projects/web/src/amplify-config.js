import { environment } from './environments/environment'

export const conf = {
  Auth: {
    mandatorySignIn: true,
    region: environment.amplify.auth.region,
    userPoolId: environment.amplify.auth.userPoolId,
    identityPoolId: environment.amplify.auth.identityPoolId,
    userPoolWebClientId: environment.amplify.auth.userPoolWebClientId,
  },
}
