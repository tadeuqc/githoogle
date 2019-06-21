import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware                  from 'redux-thunk'
import { composeWithDevTools }          from 'redux-devtools-extension'
import withRedux                        from 'next-redux-wrapper'
import rootReducer                      from '../reducers';

const initStore = initialState =>
	createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default initStore

export const reduxPage = comp => withRedux(initStore)(comp)
