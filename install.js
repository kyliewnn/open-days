/* OPEN/DAYS PWA bootstrap: install event + offline service-worker support. */
(() => {
'use strict';
let installPrompt = null;
function isStandalone(){return window.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone===true;}
function eligibleOrigin(){return location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1';}
function noteStatus(){window.dispatchEvent(new Event('open-days-install-status'));}
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;noteStatus();});
window.addEventListener('appinstalled',()=>{installPrompt=null;noteStatus();});
window.openDaysInstall=async()=>{
 if(isStandalone()){alert('OPEN/DAYS is already running as an installed app on this device.');return;}
 if(!eligibleOrigin()){alert('Installable apps must be opened over HTTPS or localhost. Upload the PWA folder to a secure static host, then visit that URL. The standalone HTML file can still be used without installing.');return;}
 if(installPrompt){const prompt=installPrompt;installPrompt=null;try{await prompt.prompt();await prompt.userChoice;noteStatus();}catch{alert('Please use your browser menu to install OPEN/DAYS.');}return;}
 alert('To install: on iPhone/iPad open this site in Safari, then Share → Add to Home Screen. On desktop or Android, check the browser menu for Install app or Add to Home Screen. Installation options depend on your browser and its eligibility checks.');
};
if(eligibleOrigin()&&'serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(err=>console.warn('Offline app registration unavailable:',err));});}
})();
