import Component from '@glimmer/component';

export interface SnuiMobileMenuButtonSignature {
  // The arguments accepted by the component
  Args: {
    toggleMobileMenu: () => void;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class SnuiMobileMenuButtonComponent extends Component<SnuiMobileMenuButtonSignature> {}
