// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: 'AIzaSyCsEYoXdOkNdNt2cLSR0SCXa8oppTHxNww',
      authDomain: 'vglow-494b8.firebaseapp.com',
      projectId: 'vglow-494b8',
      storageBucket: 'vglow-494b8.appspot.com',
      messagingSenderId: '161649144968',
      appId: '1:161649144968:web:fd4c8e7cc0adc602db9b3d',
      measurementId: 'G-WRWZXPSLLW',
    },
  },
  actionCodeSettings: {
    url: 'http://localhost:4200/demo',
    handleCodeInApp: true,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
