import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import UserList from './user/UserList'
import Signup from './user/Signup'
import Signin from './auth/Signin'

const MainRouter = () => {
	return (
		<div className="MainRouter" style={{ backgroundColor: '#2a1' }}>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path='/users' component={UserList}/>
				<Route path='/signup' component={Signup}/>
				<Route path='/signin' component={Signin}/>
			</Switch>
		</div>
	)
}

export default MainRouter
