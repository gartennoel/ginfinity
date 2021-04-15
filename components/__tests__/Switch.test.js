import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Switch from '../Switch';
import { materialTheme } from '../../constants/';

describe('Switch', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Switch />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
