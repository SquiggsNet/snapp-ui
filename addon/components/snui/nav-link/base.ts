import Component from '@glimmer/component';

export interface SnuiNavLinkBaseSignature {
  // The arguments accepted by the component
  Args: {
    route: string;
    model?: unknown;
    query?: Record<string, unknown>;
    isCurrent?: boolean;
    class?: string;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class SnuiNavLinkBaseComponent extends Component<SnuiNavLinkBaseSignature> {
  get ariaCurrent(): string | undefined {
    return this.args.isCurrent ? 'page' : undefined;
  }
}
