/**
 * Script síncrono inline ejecutado en <head> antes del primer paint.
 * Separado de hooks cliente para garantizar serialización literal en Server Components.
 * Establece `html[data-perf="lite" | "full"]` y `html[data-banner-dismissed="true"]`.
 */
export const PERF_TIER_INIT_SCRIPT = `(function(){try{var d=document.documentElement;var p=new URLSearchParams(window.location.search).get("perf");if(p==="lite"||p==="full"){try{sessionStorage.setItem("fp-perf-override",p);}catch(e){}d.dataset.perf=p;}else{var s="";try{s=sessionStorage.getItem("fp-perf-override")||"";}catch(e){}if(s==="lite"||s==="full"){d.dataset.perf=s;}else{var n=navigator,c=n.hardwareConcurrency||8,m=n.deviceMemory||8,cn=n.connection||{},sd=cn.saveData===true,sl=/^(slow-2g|2g|3g)$/.test(cn.effectiveType||""),rm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;d.dataset.perf=(c<=4||m<=4||sd||sl||rm)?"lite":"full";}}if(localStorage.getItem("financepal_v2_announcement_dismissed")==="true"){d.dataset.bannerDismissed="true";}}catch(e){}})();`;
