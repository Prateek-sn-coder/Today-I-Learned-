import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oumlpcigyaxthoarpndt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bWxwY2lneWF4dGhvYXJwbmR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3ODQzNzIsImV4cCI6MjAwMDM2MDM3Mn0.Pu1qPHNmwF1yXxKT3lglASlfERNLAc3XslbXCcDV1v0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
