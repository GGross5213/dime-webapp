import {overviewSaga} from './containers/Overview/ducks'

export default function* rootSaga() {
    yield overviewSaga();
}
