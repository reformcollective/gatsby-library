import { useEffect, useState } from "react"

import { isBrowser } from "./functions"

export const isIOS = () => {
	if (!isBrowser()) return false
	const userAgent = window.navigator.userAgent.toLowerCase()
	const userAgentMatch = /iphone|ipad|ipod/.test(userAgent)
	const isMacWithTouch =
		userAgent.includes("mac") && navigator.maxTouchPoints > 1

	return userAgentMatch || isMacWithTouch
}

export const isAndroid = () => {
	if (!isBrowser()) return false
	const userAgent = window.navigator.userAgent.toLowerCase()
	return userAgent.includes("android")
}

export const isMobileOS = () => {
	return isIOS() || isAndroid()
}

/**
 * hookify a get function to update after hydration
 */
export const useHookify = (fn: () => boolean) => {
	const [value, setValue] = useState<boolean>()
	useEffect(() => {
		if (isBrowser()) setValue(fn())
	}, [fn])
	return value
}

export const useIsIOS = () => {
	return useHookify(isIOS)
}

export const useIsAndroid = () => {
	return useHookify(isAndroid)
}

export const useIsMobileOS = () => {
	return useHookify(isMobileOS)
}
