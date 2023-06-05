import { render } from "@testing-library/react";
import React from "react";
import { Provider, connect } from "react-redux";
import configureStore from 'redux-mock-store';


const Home = (props) => {
  console.log(props)
  return null;
}
const mapStateToProps = (state) => {
  return {
    appInfo: state.appReducer.appInfo,
    customerInfo: state.userReducer.customerInfo
  };
};
const HomeComponent = connect(mapStateToProps)(Home)

const middlewares = []
const mockStore = configureStore(middlewares)


describe('61453980', () => {
  test('should pass', () => {
    const customerInfo = { name: 'nick' }
    const appInfo = { appId: '123' }
    const initialState = {
      userReducer: { customerInfo },
      appReducer: { appInfo }
    }

    let appStore = mockStore(initialState)

    render(
      <Provider store={appStore}>
        <HomeComponent />
      </Provider>
    )
  })
})