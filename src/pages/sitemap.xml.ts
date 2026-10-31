import type {APIRoute} from 'astro';
import {getCollection} from 'astro:content';
export const GET:APIRoute=async({site})=>{const notes=await getCollection('notes',({data})=>!data.draft);const paths=['','notes/','profile/','credits/','projects/personal-website/',...notes.map(n=>'notes/'+n.id+'/')];return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(path=>'<url><loc>'+new URL(path,site).href+'</loc></url>').join('')+'</urlset>',{headers:{'Content-Type':'application/xml; charset=utf-8'}});};

