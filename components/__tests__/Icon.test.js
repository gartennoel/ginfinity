import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Icon from '../Icon';
import { materialTheme } from '../../constants/';

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Icon />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
