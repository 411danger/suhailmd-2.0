const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121530876";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_41_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDMyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWDZRVFByem5vMVZpenFsSmo5ZnhtY244TjBQbmU4RS9OMzdQVk9xcUd0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWTdnMzZPTVZUZFNxcklnd25JNlZ3UVwiLFxuICBcInBob25lSWRcIjogXCI5MmVlODUxNC02YzI5LTQ1N2QtYjYzZS02NjM1Y2M4N2Y1ZDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMTMzLFxuICAgICAgMTI5LFxuICAgICAgNjYsXG4gICAgICAxNjEsXG4gICAgICAyMjgsXG4gICAgICAxNDIsXG4gICAgICAxNDcsXG4gICAgICAyMDMsXG4gICAgICAxMzYsXG4gICAgICAxOTAsXG4gICAgICAxOTcsXG4gICAgICAyNDgsXG4gICAgICAxOTMsXG4gICAgICA3NCxcbiAgICAgIDU1LFxuICAgICAgMjExLFxuICAgICAgMTM5LFxuICAgICAgNTEsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTA4LFxuICAgICAgMjE2LFxuICAgICAgMTcsXG4gICAgICAyNCxcbiAgICAgIDE0NixcbiAgICAgIDk1LFxuICAgICAgMTkxLFxuICAgICAgMTUwLFxuICAgICAgOTIsXG4gICAgICAxOTYsXG4gICAgICAxNzcsXG4gICAgICAyMzksXG4gICAgICAyMixcbiAgICAgIDk5LFxuICAgICAgMjAwLFxuICAgICAgMjM4LFxuICAgICAgOTYsXG4gICAgICA2MCxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTWkxSWDY4V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMTUzMDg3NjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE4OTYyNDkwNzQ4OTgwOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liTzFBa1FvUEhMdVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNlRuZ29Idm9JRjRHQVJ6M3liV0ZXSnFjTEh4aXJaYU9nVm9oaE0xbURFVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoSVFROFRncVdBSTNtY3ZwOUNyNzFMUEZUQ3NnVmZoanl5aStoaTBYVEkzU3FOWVRtM2VrcnB5bmdlT1F0cHdOc0VmVVV6a1ZkS0pQc2RZSi8rRTZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHelhqdy9SSktYcGg3TDVBamN5VDUrVkFXQVBOZHp1VS95V0wrNXhaQlBucGNiYzBYWkprTHg1QVVTSytZMzhvZ2NXakc1QWRoV1BISmo5c3packZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTIxNTMwODc2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzkzNjk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
