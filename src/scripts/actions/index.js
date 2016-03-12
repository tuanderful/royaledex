// Actions are payloads of information that send data from your application to
// your store. They are the only source of information for the store.
//
// You send them to the store using store.dispatch().

export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_STAT = 'SET_STAT';
export const SET_METRIC = 'SET_METRIC';

// Action creators
export function setCountry(country) {
  return {
    type: SET_COUNTRY,
    country,
  }
}

export function setStat(stat) {
  return {
    type: SET_STAT,
    stat
  }
}

export function setMetric(metric) {
  return {
    type: SET_METRIC,
    metric
  }
}
