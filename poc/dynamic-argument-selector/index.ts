import { createSelector } from '@reduxjs/toolkit';
import memoize from 'lodash.memoize';

function intersection(a: any[], b: any[]) {
  return a.filter((v) => b.includes(v));
}

const state = {
  datas: [
    {
      name: 'a',
      reason: ['x', 'y', 'z'],
    },
    {
      name: 'b',
      reason: ['x'],
    },
    {
      name: 'b',
      reason: ['y'],
    },
  ],
};

type State = typeof state;

const filter1 = ['x'];
const filter2 = ['z'];
const selectDatas = (state: State) => state.datas;

function test1() {
  const createSelectDatasByFilters = createSelector(selectDatas, (datas) => {
    return memoize((filters: string[]) => {
      console.count('filter data');
      return filters.length > 0 ? datas.filter((d) => intersection(d.reason, filters).length > 0) : datas;
    });
  });

  const selectDatasByFilters = createSelectDatasByFilters(state);

  console.log(selectDatasByFilters(filter1));
  console.log(selectDatasByFilters(filter1));
  console.log(selectDatasByFilters(filter1));
  // new array reference
  // console.log(selectDatasByFilters(['x']));
  // console.log(selectDatasByFilters(filter2));
}

function test2() {
  const selectDatasByFilters = createSelector(
    selectDatas,
    (_, filters) => filters,
    (datas, filters) => {
      console.count('filter data');
      return filters.length > 0 ? datas.filter((d) => intersection(d.reason, filters).length > 0) : datas;
    }
  );

  console.log(selectDatasByFilters(state, filter1));
  console.log(selectDatasByFilters(state, filter1));
  console.log(selectDatasByFilters(state, filter1));
  // new array reference
  console.log(selectDatasByFilters(state, ['x']));
  // console.log(selectDatasByFilters(filter2));
}

test2();

// TODO: what's the different?
