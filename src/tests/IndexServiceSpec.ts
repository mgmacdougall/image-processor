import parseText from '../services/indexService';

describe('"IndexService tests', () => {
  it('Should return an emptry string when given an empty string ', () => {
    const result = parseText('Hi');
    expect(result).toEqual('Hi');
  });
});
