// /// <reference types="node" />
// /// <reference types="react" />
// /// <reference types="react-dom" />


// declare namespace NodeJS {
//   interface ProcessEnv {
//     readonly NODE_ENV: 'development' | 'production' | 'test';
//     readonly PUBLIC_URL: string;
//   }
// }

// declare module '*.module.css' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }

// // #region Features/LESS
// declare module '*.module.less' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }
// declare module '*.module.styl' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }
// // #endregion
// declare module '@/views/*' {
//   const src: any;
//   export default src;
// }
// declare module '@/components/*' {
//   const src: any;
//   export default src;
// }
declare module 'react-router-pro'