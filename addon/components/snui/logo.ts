import Component from '@glimmer/component';

export interface SnuiLogoSignature {
  // The arguments accepted by the component
  Args: {
    imgSrc: string;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class SnuiLogoComponent extends Component<SnuiLogoSignature> {}
