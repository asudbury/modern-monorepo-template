import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import React from 'react';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
