import { createClient } from '@supabase/supabase-js'

const SUPA_URL = import.meta.env.VITE_SUPA_URL;
const SUPA_API = import.meta.env.VITE_SUPA_API
export const supabase = createClient(SUPA_URL, SUPA_API)
