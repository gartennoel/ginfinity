import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Drawer from '../Drawer';
import { materialTheme } from '../../constants/';

describe('Drawer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Drawer />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
