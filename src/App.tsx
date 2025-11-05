import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
	console.log('Oi');
	return (
		<>
			<Heading attr={123} attr2='String'>
				Olá Mundo 1!
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
