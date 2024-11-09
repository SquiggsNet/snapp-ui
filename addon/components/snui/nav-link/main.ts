import SnuiNavLinkBaseComponent from './base';

export default class SnuiNavLinkMainComponent extends SnuiNavLinkBaseComponent {
  get classes(): string {
    const baseClasses = 'rounded-md px-3 py-2 text-sm font-medium';
    const activeClasses = 'bg-primary-900 text-white';
    const inactiveClasses =
      'text-gray-300 hover:bg-primary-700 hover:text-white';
    return `${baseClasses} ${this.args.isCurrent ? activeClasses : inactiveClasses} ${this.args.class || ''}`;
  }
}
