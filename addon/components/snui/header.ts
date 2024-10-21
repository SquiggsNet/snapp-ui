import Component from '@glimmer/component';

export interface SnuiHeaderSignature {
  // The arguments accepted by the component
  Args: {
    title?: string;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class SnuiHeaderComponent extends Component<SnuiHeaderSignature> {
  get title() {
    return this.args.title || 'Dashboard';
  }
}
