import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://txgcclvqtdtidjuwyado.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4Z2NjbHZxdGR0aWRqdXd5YWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjAyMDAsImV4cCI6MjA1NzgzNjIwMH0.4CIykgI8emiEpfGtGu4URknv-viWSWH2cLj8KrYxXnk";

const supabase = createClient(supabaseUrl, supabaseKey);
//hola
export const uploadImage = async (file, bucket, folder) => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()
      .toString(36)
      .substring(2, 15)}_${Date.now()}.${fileExt}`;

    const filePath = `${folder}/${fileName}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};