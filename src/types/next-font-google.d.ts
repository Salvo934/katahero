/**
 * Alcuni setup TypeScript/IDE non risolvono la catena di re-export di `next/font/google`
 * e segnalano "is not a module". Questo modulo dichiara i tipi verso il pacchetto
 * compilato interno, senza cambiare l'import nel codice (`next/font/google` resta l'API Next).
 */
declare module "next/font/google" {
  export * from "next/dist/compiled/@next/font/dist/google";
}
