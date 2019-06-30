import amount from '../../helpers/amount';

describe('Amount Helper', () => {
  it('should be 60 for R$ 60,00', () => {
    expect(amount(60)).toBe('R$ 60,00');
  });

  it('should be 6000 for R$ 60,00', () => {
    expect(amount(60)).toBe('R$ 60,00');
  });

  it('should be 600 for R$ 60,00', () => {
    expect(amount(60)).toBe('R$ 60,00');
  });

  it('should be 5 for R$ 5,00', () => {
    expect(amount(5)).toBe('R$ 5,00');
  });
});
