import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Select from '../Select';
import { materialTheme } from '../../constants/';

describe('Select', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Select />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
