import {getCollection} from 'astro:content';
import type {APIRoute} from 'astro';
const escapeXml=(s:string)=>s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export const GET:APIRoute=async({site})=>{
 const notes=(await getCollection('notes',({data})=>!data.draft)).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf());
 const root=site!.href;
 const items=notes.map(note=>'<item><title>'+escapeXml(note.data.title)+'</title><link>'+root+'notes/'+note.id+'/</link><guid>'+root+'notes/'+note.id+'/</guid><description>'+escapeXml(note.data.description)+'</description><pubDate>'+note.data.date.toUTCString()+'</pubDate></item>').join('');
 return new Response('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>王赫骏 的成长记录</title><link>'+root+'</link><description>作品、想法与探索的过程。</description><language>zh-CN</language>'+items+'</channel></rss>',{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
};
