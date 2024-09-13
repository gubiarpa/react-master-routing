import { useState, useEffect } from 'react'

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

	const Page = routes.find(({ path }) => path === currentPath)?.Component
	return Page ? <Page /> : <DefaultComponent />
}
