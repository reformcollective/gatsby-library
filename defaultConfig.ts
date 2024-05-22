import type { Transitions } from "./Loader"

/**
 * config schema and config defaults for the reform util library
 * see src/libraryConfig.ts for the actual config
 */

export type Config = {
	/**
	 * if true, the fresponsive util will scale on fullWidth breakpoints
	 */
	scaleFully: boolean
	/**
	 * get the amount of time needed to load the page
	 * @param startTime the number of MS the page spent loading on the network so far
	 */
	getTimeNeeded: (startTime: number) => number
	/**
	 * the default transition to use if none is specified
	 */
	defaultTransition: Transitions
	/**
	 * should the page preserve the scroll position when reloading or when clicking back/forward
	 */
	scrollRestoration: boolean
}

export const defaultConfig = {
	defaultTransition: "instant",
	scaleFully: false,
	getTimeNeeded: (startTime: number) => startTime * 2 + 1000,
	scrollRestoration: true,
} as const satisfies Partial<Config>
