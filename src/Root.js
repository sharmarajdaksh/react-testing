import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxPromise from 'redux-promise';
export default (props) => {
	return (
		<Provider
			store={createStore(
				reducers,
				props.initialState ? props.initialState : {},
				applyMiddleware(reduxPromise)
			)}
		>
			{props.children}
		</Provider>
	);
};
