/* @jsx jsx */
import React from 'react';

import { jsx } from 'mithrilInterop';

import 'components/component_kit/cw_icon.scss';
import { ComponentType } from '../types';
import { iconLookup } from './cw_icon_lookup';
import type { IconComponentProps } from './types';

export const CWIcon = (props: IconComponentProps) => {
  const {
    className,
    componentType = ComponentType.Icon,
    disabled = false,
    iconName,
    iconSize = 'medium',
    onClick,
    selected,
    ...otherProps
  } = props;

  const Icon = iconLookup[iconName];

  return (
    <Icon
      className={className}
      componentType={componentType}
      disabled={disabled}
      iconSize={iconSize}
      onClick={onClick}
      selected={selected}
      {...otherProps}
    />
  );
};
