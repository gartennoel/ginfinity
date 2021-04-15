import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Tabs from '../Tabs';
import { materialTheme } from '../../constants/';

describe('Tabs', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Tabs />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
