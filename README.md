# Reproduction for angular/angular#

Run `yarn && yarn ng build two` to reproduce the error.
Replace the import `OneModule.forRoot()` with `OneModule` in `packages/two/src/index.ts` and then compilation works.

The `dist/@scope/two` folder is the output of our internal library pipeline. Invalid paths can be seen in `dist/@scope/two/types/index.d.ts`.