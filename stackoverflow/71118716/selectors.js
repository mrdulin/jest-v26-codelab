const { createSelector } = require('reselect');

const selectEnvironment = (state) => state.environment;
export const isHybridSelector = createSelector(selectEnvironment, (environment) => environment.isHybrid);
