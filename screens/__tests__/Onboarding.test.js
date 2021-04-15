import React from 'react';
import { GalioProvider } from 'galio-framework';
import renderer from 'react-test-renderer';
import Onboarding from '../Onboarding';
import { materialTheme } from '../../constants/';

describe('Onboarding', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GalioProvider theme={materialTheme}>
        <Onboarding />
      </GalioProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
