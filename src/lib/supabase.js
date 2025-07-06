import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kdpmrxycpirrqwndnyrw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkcG1yeHljcGlycnF3bmRueXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MTM4ODIsImV4cCI6MjA2NzA4OTg4Mn0.vduyDQ3gY19zWNLg4eee1cv_NSvKN_Jhc-bISFWMxAM'

export const supabase = createClient(supabaseUrl, supabaseKey)