const fs = require('fs');

const {
  CIM_AMPLIFY_AUTH_REGION,
  CIM_AMPLIFY_AUTH_USER_POOL_ID,
  CIM_AMPLIFY_AUTH_IDENTITY_POOL_ID,
  CIM_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
  CIM_ENV,
} = process.env;

const conf = {
  production: CIM_ENV === 'production',
  amplify: {
    auth: {
      region: CIM_AMPLIFY_AUTH_REGION,
      userPoolId: CIM_AMPLIFY_AUTH_USER_POOL_ID,
      identityPoolId: CIM_AMPLIFY_AUTH_IDENTITY_POOL_ID,
      userPoolWebClientId: CIM_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
    }
  }
};

var buf = Buffer.from(`export const environment = ${JSON.stringify(conf)}
`)

fs.writeFileSync(`${__dirname}/../src/environments/environment.ts`, buf);
