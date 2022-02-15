import { filterRegion, pokemonTypes, example, anotherExample } from '../src/data.js';

describe('filterRegion', () => {
  it('is a function', () => {
    expect(typeof filterRegion).toBe('function');
  });
});

describe('pokemonTypes', () => {
  it('is a function', () => {
    expect(typeof pokemonTypes).toBe('function');
  });
});

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
