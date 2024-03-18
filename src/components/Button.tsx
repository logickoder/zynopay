import React from 'react';
import { TouchableHighlight, TouchableHighlightProps } from 'react-native';

export default function Button(props: ButtonProps) {
  return <TouchableHighlight {...props}>{props.children}</TouchableHighlight>;
}

interface ButtonProps extends TouchableHighlightProps {}
