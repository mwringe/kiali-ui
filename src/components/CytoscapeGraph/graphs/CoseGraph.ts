import { GraphType } from './GraphType';

export class CoseGraph implements GraphType {
  static getLayout() {
    return {
      name: 'cose-bilkent',
      animate: false,
      nodeDimensionsIncludeLabels: true
    };
  }
}
