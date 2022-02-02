// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* First time using environment files checked several resources but the one that made it click
 * was https://www.itsolutionstuff.com/post/how-to-use-environment-variable-in-angularexample.html
 * The url for the Rest API created changes from the dev environment to the production environment
 */
export const environment = {
  production: false,
  uri: "http://localhost:9092"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
