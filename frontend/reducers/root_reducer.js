import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import searchReducer from './search_reducer';
// import discountReducer from './discount_reducer';
import primeReducer from './prime_reducer';
import titleReducer from './title_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search: searchReducer,
  // discount: discountReducer,
  prime: primeReducer,
  titles: titleReducer,
});

export default rootReducer;
