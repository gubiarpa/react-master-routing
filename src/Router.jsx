import { useState, useEffect } from 'react'
import { match } from 'path-to-regexp'

import { EVENTS } from './consts'

export function Router({
	routes = [],
	defaultComponent: DefaultComponent = () => null,
}) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener(EVENTS.PUSH_STATE, onLocationChange)
		window.addEventListener(EVENTS.POP_STATE, onLocationChange)

		return () => {
			window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange)
			window.removeEventListener(EVENTS.POP_STATE, onLocationChange)
		}
	}, [])

	let routeParams = []

	const Page = routes.find(({ path }) => {
		if (path === currentPath) return true

		const matchUrl = match(path, { decode: decodeURIComponent })
		const matched = matchUrl(currentPath)
		if (!matched) return false

		routeParams = matched.params
		return true
	})?.Component

	return Page ? (
		<Page routeParams={routeParams} />
	) : (
		<DefaultComponent routeParams={routeParams} />
	)
}
