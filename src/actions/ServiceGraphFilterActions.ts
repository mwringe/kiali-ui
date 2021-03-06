// Action Creators allow us to create typesafe utilities for dispatching actions
import { createAction } from 'typesafe-actions';
import { EdgeLabelMode } from '../types/GraphFilter';

export enum ServiceGraphFilterActionKeys {
  // Toggle Actions
  TOGGLE_GRAPH_NODE_LABEL = 'TOGGLE_GRAPH_NODE_LABEL',
  TOGGLE_GRAPH_CIRCUIT_BREAKERS = 'TOGGLE_GRAPH_CIRCUIT_BREAKERS',
  TOGGLE_GRAPH_ROUTE_RULES = 'TOGGLE_GRAPH_ROUTE_RULES',
  TOGGLE_GRAPH_MISSING_SIDECARS = 'TOGGLE_GRAPH_MISSING_SIDECARS',
  TOGGLE_TRAFFIC_ANIMATION = 'TOGGLE_TRAFFIC_ANIMATION',
  SET_GRAPH_EDGE_LABEL_MODE = 'SET_GRAPH_EDGE_LABEL_MODE',
  // Disable Actions
  ENABLE_GRAPH_FILTERS = 'ENABLE_GRAPH_FILTERS'
}

export const serviceGraphFilterActions = {
  // Toggle actions
  toggleGraphNodeLabel: createAction(ServiceGraphFilterActionKeys.TOGGLE_GRAPH_NODE_LABEL),
  setGraphEdgeLabelMode: createAction(
    ServiceGraphFilterActionKeys.SET_GRAPH_EDGE_LABEL_MODE,
    (edgeLabelMode: EdgeLabelMode) => ({
      type: ServiceGraphFilterActionKeys.SET_GRAPH_EDGE_LABEL_MODE,
      payload: edgeLabelMode
    })
  ),
  toggleGraphRouteRules: createAction(ServiceGraphFilterActionKeys.TOGGLE_GRAPH_ROUTE_RULES),
  toggleGraphCircuitBreakers: createAction(ServiceGraphFilterActionKeys.TOGGLE_GRAPH_CIRCUIT_BREAKERS),
  toggleGraphMissingSidecars: createAction(ServiceGraphFilterActionKeys.TOGGLE_GRAPH_MISSING_SIDECARS),
  toggleTrafficAnimation: createAction(ServiceGraphFilterActionKeys.TOGGLE_TRAFFIC_ANIMATION),
  showGraphFilters: createAction(ServiceGraphFilterActionKeys.ENABLE_GRAPH_FILTERS, (value: boolean) => ({
    type: ServiceGraphFilterActionKeys.ENABLE_GRAPH_FILTERS,
    payload: value
  }))
};
