import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Button from '../Button';
import { materialTheme } from '../../constants/';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Button />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
