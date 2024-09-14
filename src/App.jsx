import { Router } from './Router'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import NotFoundPage from './pages/404'
import SearchPage from './pages/Search'

import './App.css'

const appRoutes = [
	{ path: '/', Component: HomePage },
	{ path: '/about', Component: AboutPage },
	{ path: '/search/:query', Component: SearchPage },
]

function App() {
	return (
		<>
			<main>
				<Router
					routes={appRoutes}
					defaultComponent={NotFoundPage}
				/>
			</main>
		</>
	)
}

export default App
