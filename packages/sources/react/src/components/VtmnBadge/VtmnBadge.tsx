import * as React from 'react';
import '@vtmn/css-badge';
import { VtmnBadgeVariant } from './types';

export interface VtmnBadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * The variant of the badge.
   * @default 'default'
   */
  variant?: VtmnBadgeVariant;

  /**
   * The value of the badge.
   * @default null
   */
  value?: number;
}

export const VtmnBadge = ({
  variant = 'default',
  value,
  className,
  ...props
}: VtmnBadgeProps) => {
  return (
    <span
      className={`vtmn-badge vtmn-badge_variant--${variant} ${
        !value && value !== 0 ? 'vtmn-badge_size--without-value' : ''
      } ${className ? className : ''}`}
      {...props}>
      {value && value > 99 ? '99+' : value}
    </span>
  );
};

export default React.memo(VtmnBadge);