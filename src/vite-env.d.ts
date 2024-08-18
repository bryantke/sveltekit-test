/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly RAPID_API_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }