// import { lazy, Suspense } from 'react'

import { Router } from './Router'
import { Route } from './Route'

import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import SearchPage from './pages/Search.jsx'
import NotFoundPage from './pages/404.jsx'

import './App.css'

// const AboutPage = lazy(() => import('./pages/About.jsx'))
// const NotFoundPage = lazy(() => import('./pages/404.jsx'))
// const SearchPage = lazy(() => import('./pages/Search.jsx'))
{
	/* <Suspense fallback={<div>Loading...</div>}>
</Suspense> */
}

const appRoutes = [{ path: '/search/:query', Component: SearchPage }]

function App() {
	return (
		<>
			<main>
				<Router
					routes={appRoutes}
					defaultComponent={NotFoundPage}
				>
					<Route
						path={'/'}
						Component={HomePage}
					/>
					<Route
						path={'/about'}
						Component={AboutPage}
					/>
				</Router>
			</main>
		</>
	)
}

export default App
