import Component from '@glimmer/component';

export interface SnuiButtonSignature {
  Args: {
    size?: 'small' | 'medium' | 'large';
    style?: 'solid' | 'outlined' | 'light';
    color?: 'primary' | 'secondary' | 'good' | 'warning' | 'danger';
  };
  Blocks: {
    default: [];
  };
  Element: null;
}

const SIZE_CLASSES = {
  small: 'px-2 py-1 text-xs',
  medium: 'px-4 py-2 text-sm',
  large: 'px-6 py-3 text-lg',
};

const STYLE_CLASSES = {
  solid: 'shadow-sm',
  outlined: 'border-2',
  light: 'bg-opacity-50',
};

const COLOR_CLASSES = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
  secondary:
    'bg-gray-600 text-white hover:bg-gray-500 focus-visible:outline-gray-600',
  good: 'bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600',
  warning:
    'bg-yellow-600 text-white hover:bg-yellow-500 focus-visible:outline-yellow-600',
  danger:
    'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600',
};

export default class SnuiButtonComponent extends Component<SnuiButtonSignature> {
  get buttonClasses(): string {
    const sizeClass = SIZE_CLASSES[this.args.size || 'medium'];
    const styleClass = STYLE_CLASSES[this.args.style || 'solid'];
    const colorClass = COLOR_CLASSES[this.args.color || 'primary'];

    return `rounded ${sizeClass} ${styleClass} ${colorClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`;
  }
}
