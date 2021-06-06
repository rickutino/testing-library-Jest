import React from 'react';
import { render } from '@testing-library/react';
import PokeballLoading from '../PokeballLoading';

describe('PokeballLoading', () => {
  test('should render with default props', () => {
    const { container, getByAltText } = render(<PokeballLoading />);
    const image = getByAltText(/Pokeball Loading/i);

    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image.width).toBe(200);
  });

  test('message should change', () => {
    const { queryByText, rerender } = render(<PokeballLoading />);
    const newMessage = 'New Message';

    expect(queryByText(newMessage)).not.toBeInTheDocument();

    rerender(<PokeballLoading message={newMessage}/>);

    expect(queryByText(newMessage)).toBeInTheDocument();
  });
});