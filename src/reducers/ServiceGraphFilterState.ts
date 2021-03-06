import { ServiceGraphFilterState } from '../store/Store';
import { ServiceGraphFilterActionKeys } from '../actions/ServiceGraphFilterActions';
import { updateState } from '../utils/Reducer';
import { EdgeLabelMode } from '../types/GraphFilter';

const INITIAL_STATE: ServiceGraphFilterState = {
  showNodeLabels: true,
  showCircuitBreakers: false,
  showRouteRules: true,
  showMissingSidecars: true,
  showTrafficAnimation: false,
  // @ todo: add disableLayers back in later
  // disableLayers: false
  edgeLabelMode: EdgeLabelMode.HIDE
};

// This Reducer allows changes to the 'serviceGraphFilterState' portion of Redux Store
const serviceGraphFilterState = (state: ServiceGraphFilterState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServiceGraphFilterActionKeys.TOGGLE_GRAPH_NODE_LABEL:
      return updateState(state, { showNodeLabels: !state.showNodeLabels });
    case ServiceGraphFilterActionKeys.SET_GRAPH_EDGE_LABEL_MODE:
      return updateState(state, { edgeLabelMode: action.payload });
    case ServiceGraphFilterActionKeys.TOGGLE_GRAPH_CIRCUIT_BREAKERS:
      return updateState(state, { showCircuitBreakers: !state.showCircuitBreakers });
    case ServiceGraphFilterActionKeys.TOGGLE_GRAPH_ROUTE_RULES:
      return updateState(state, { showRouteRules: !state.showRouteRules });
    case ServiceGraphFilterActionKeys.TOGGLE_GRAPH_MISSING_SIDECARS:
      return updateState(state, { showMissingSidecars: !state.showMissingSidecars });
    case ServiceGraphFilterActionKeys.TOGGLE_TRAFFIC_ANIMATION:
      return updateState(state, { showTrafficAnimation: !state.showTrafficAnimation });
    case ServiceGraphFilterActionKeys.ENABLE_GRAPH_FILTERS:
      return updateState(state, { disableLayers: action.payload });
    default:
      return state;
  }
};

export default serviceGraphFilterState;
