import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// PRUEBA DE DEBUG: Mira tu terminal o consola del navegador
console.log("URL de Supabase:", supabaseUrl) 

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("¡CUIDADO! Las variables de entorno no se cargaron.")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)