import { BUTTON, EVENTS } from './consts'

export function navigate(href = '/') {
	window.history.pushState({}, '', href)
	// Create a custom event to notice the navigation
	const navigationEvent = new Event(EVENTS.PUSH_STATE)
	window.dispatchEvent(navigationEvent)
}

export function Link({ resetScroll = false, target, to, ...props }) {
	const handleClick = (event) => {
		const isMainEvent = event.button === BUTTON.PRIMARY // primary click
		const isModifiedEvent =
			event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
		const isManageable = target === undefined || target === '_self'

		if (isMainEvent && isManageable && !isModifiedEvent) {
			event.preventDefault()
			navigate(to)
			resetScroll && window.scroll(0, 0)
		}
	}

	return (
		<a
			href={to}
			onClick={handleClick}
			target={target}
			{...props}
		/>
	)
}
