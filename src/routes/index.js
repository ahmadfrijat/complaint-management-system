import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home/home.js'
import Complaint from '../components/complaint/complaint'




// routs 
export default function Routes() {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/complaint" component={Complaint} />
			</Switch>
		</BrowserRouter>
	);
}

