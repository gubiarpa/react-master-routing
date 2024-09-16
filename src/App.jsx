import { lazy, Suspense } from 'react'

import { Router } from './Router'
import { Route } from './Route'

import HomePage from './pages/Home'

import './App.css'

const AboutPage = lazy(() => import('./pages/About'))
const NotFoundPage = lazy(() => import('./pages/404'))
const SearchPage = lazy(() => import('./pages/Search'))

const appRoutes = [{ path: '/search/:query', Component: SearchPage }]

function App() {
	return (
		<>
			<main>
				<Suspense fallback={<div>Loading...</div>}>
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
				</Suspense>
			</main>
		</>
	)
}

export default App
