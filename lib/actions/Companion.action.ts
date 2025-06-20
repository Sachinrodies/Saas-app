"use server"
import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase";

export const createCompanion=async(formData:CreateCompanion)=>{
    const {userId:author}=await auth();
    const supabase=createSupabaseClient();
    console.log("[createCompanion] formData:", formData);
    console.log("[createCompanion] author:", author);
    const {data,error}=await supabase.from("companions").insert({
        ...formData,
        author
        
    }).select()

    if(error|| !data){
        console.error("[createCompanion] error:", error);
        throw new Error(error?.message||"Failed to create companion")
    }
    return data[0];
}