import { expect, it } from 'vitest';
import React from 'react';
import renderer from 'react-test-renderer';
import NumbericKeyboard from '../index';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
}

it('NumbericKeyboard rendered', () => {
  const component = renderer.create(
    <>
      <NumbericKeyboard />
    </>
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
