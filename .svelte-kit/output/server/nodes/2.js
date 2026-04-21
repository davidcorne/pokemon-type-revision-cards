

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DJr3l10q.js","_app/immutable/chunks/DtqsiENR.js","_app/immutable/chunks/DEDqjojZ.js","_app/immutable/chunks/mvTU2ncL.js"];
export const stylesheets = ["_app/immutable/assets/2.DRnyoX6y.css"];
export const fonts = [];
