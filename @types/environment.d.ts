
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string
        API_KEY: string
        KRAKEN_API_URL: string
        }
    }   
}