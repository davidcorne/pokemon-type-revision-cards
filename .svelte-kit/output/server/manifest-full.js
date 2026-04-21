export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["types/bug.svg","types/dark.svg","types/dragon.svg","types/electric.svg","types/fairy.svg","types/fighting.svg","types/fire.svg","types/flying.svg","types/ghost.svg","types/grass.svg","types/ground.svg","types/ice.svg","types/normal.svg","types/poison.svg","types/psychic.svg","types/rock.svg","types/steel.svg","types/water.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.0CR65-n9.js",app:"_app/immutable/entry/app.CztsIQvP.js",imports:["_app/immutable/entry/start.0CR65-n9.js","_app/immutable/chunks/DtqsiENR.js","_app/immutable/chunks/Coi32d58.js","_app/immutable/entry/app.CztsIQvP.js","_app/immutable/chunks/DtqsiENR.js","_app/immutable/chunks/Dj6f-nJM.js","_app/immutable/chunks/DEDqjojZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
