import { Router } from './Router'

import HomePage from './pages/Home'
import AboutPage from './pages/About'

import './App.css'

const appRoutes = [
	{ path: '/', Component: HomePage },
	{ path: '/about', Component: AboutPage },
]

function App() {
	return (
		<>
			<main>
				<Router routes={appRoutes} />
			</main>
		</>
	)
}

export default App
