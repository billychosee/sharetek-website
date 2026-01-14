import { IconType } from 'react-icons';

export type DropdownItem = {
  readonly label: string;
  readonly href: string;
};

export type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly icon: IconType;
  readonly dropdown?: {
    readonly items: readonly DropdownItem[];
  };
};
