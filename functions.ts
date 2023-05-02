export const isBrowser = () => typeof window !== "undefined"

export const addDebouncedEventListener = (
  element: Window | HTMLElement,
  event: string,
  callback: () => void,
  delay: number
) => {
  let timeout: NodeJS.Timeout

  const debouncedCallback = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(), delay)
  }

  element.addEventListener(event, debouncedCallback)
  return () => element.removeEventListener(event, debouncedCallback)
}

export const vwToPx = (vw: number) => {
  if (isBrowser()) {
    return vw * (window.innerWidth / 100)
  }
  return 0
}

export const pxToVw = (px: number, breakpoint: number) => {
  if (isBrowser()) {
    return px / (breakpoint / 100)
  }
}

export const vhToPx = (vh: number) => {
  if (isBrowser()) {
    return (vh * window.innerHeight) / 100
  }
  return 0
}

export const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

export function pathnameMatches(pathA: string, pathB: string) {
  return pathA === pathB || pathA === `${pathB}/` || pathB === `${pathA}/`
}

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
