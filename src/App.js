import React from 'react';
import ClassComponent from './Components/ClassComponent';
import { FunctionalComponent } from './Components/FunctionalComponent';
import { AnotherComponent } from './Components/FunctionalComponent'


class App extends React.Component {
	render() {
		return (
			<div>
				<ClassComponent/>
				<FunctionalComponent/>
				<AnotherComponent/>
			</div>
		);
	}
}

export default App;
