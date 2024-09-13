import { Link } from '../Link'

export default function NotFoundPage() {
	return (
		<>
			<h1>This is not fine</h1>
			<div>
				<img
					src='https://midu.dev/images/this-is-fine-404.gif'
					alt='This is fine dog image'
				/>
			</div>
			<Link to={'/'}>Go back home</Link>
		</>
	)
}
