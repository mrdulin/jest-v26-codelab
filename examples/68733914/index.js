import HomePageDetails from './HomePageDetails';
import { connect } from 'react-redux';
import * as actions from './actions';
import { getLink, getTitle } from './selectors';

export default connect(
  (state) => ({
    title: getTitle(state),
    link: getLink(state),
  }),
  actions
)(HomePageDetails);
