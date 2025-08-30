import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zropbzkthwzdfkmmcboq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyb3Biemt0aHd6ZGZrbW1jYm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNjk0MzEsImV4cCI6MjA3MTc0NTQzMX0.xkPELxaZIhQernEVZyWSxS63Mvem72hI0U1XZBUpqZ0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);