import { Link } from '../Link'

export default function AboutPage() {
	return (
		<>
			<h1>About</h1>
			<div>
				<img
					src='https://pbs.twimg.com/profile_images/1834071076399165440/lkS-BQo7_400x400.jpg'
					alt='Billy Profile'
				/>
				<p>
					Hi, I'm <a href='https://x.com/gubiarpa'>Billy Arredondo</a> and I'm
					creating a React Router Clone
				</p>
				<Link to={'/'}>Go to Home</Link>
			</div>
		</>
	)
}
