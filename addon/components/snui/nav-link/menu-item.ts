import Component from '@glimmer/component';
import type { SnuiNavLinkBaseSignature } from './base';

interface SnuiNavLinkMenuItemSignature extends SnuiNavLinkBaseSignature {
  index?: number;
}

export default class SnuiNavLinkMenuItemComponent extends Component<SnuiNavLinkMenuItemSignature> {}
