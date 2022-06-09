import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, screen } from '@testing-library/react';

const testCases = [
    { amount: 27, from: 'PLN', to: 'USD', output: 'PLN 27.00 = $7.71' },
    { amount: 34, from: 'USD', to: 'PLN', output: '$34.00 = PLN 119.00' },
    { amount: 189, from: 'PLN', to: 'USD', output: 'PLN 189.00 = $54.00' },
    { amount: 412, from: 'USD', to: 'PLN', output: '$412.00 = PLN 1,442.00' },
    { amount: 99, from: 'PLN', to: 'PLN', output: 'PLN 99.00 = PLN 99.00' },
    { amount: -3, from: 'PLN', to: 'USD', output: 'Wrong value...' },
];

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={500} />);
      });

for(const testObj of testCases) {
    it('should render proper info about conversion when PLN -> USD / USD -> PLN / PLN -> PLN', () => {
        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);

        const divField = screen.getByTestId('result');

        expect(divField).toHaveTextContent(testObj.output);
        });
    cleanup(); 
    };
});