declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';
declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
