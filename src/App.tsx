import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
	console.log('Oi');
	return (
		<>
			<Heading>
				Olá Mundo 1!
				<button>
					<TimerIcon />
				</button>
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam delectus
				eaque provident, magni harum dolores! Veritatis delectus nam commodi at
				eligendi tempora voluptatem, eum asperiores sint, consequatur dolorum
				repellat porro?
			</p>
		</>
	);
}
