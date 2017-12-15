// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBn9kse1vhO7-GbarP-bXwf2F1TJLSNi6U',
    authDomain: 'fir-demo-caa03.firebaseapp.com',
    databaseURL: 'https://fir-demo-caa03.firebaseio.com',
    projectId: 'fir-demo-caa03',
    storageBucket: 'fir-demo-caa03.appspot.com',
    messagingSenderId: '958073656356'
  }
};
