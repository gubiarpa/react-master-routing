import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'

import { EVENTS } from './consts'

export function Router({
	children,
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

	const routesFromChildren = Children.map(children, ({ props, type }) => {
		const { name } = type
		const isRoute = name === 'Route'
		return isRoute ? props : null
	})

	const routesToUse = routes.concat(routesFromChildren)

	const Page = routesToUse.find(({ path }) => {
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
