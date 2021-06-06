import React from 'react';
import { render } from '@testing-library/react';
import EmptyResult from '../EmptyResult';

describe('EmptyResult', () => {

  test('should render with default props', () => {
    const { container, getByAltText, getByText } = render(<EmptyResult/>);
    const defaultMessage = 'Oops... Não encontramos nada.';
    const defaultWidth = 200;

    const image = getByAltText(/empty result/i);

    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(getByText(defaultMessage)).toBeInTheDocument();
    expect(image.width).toBe(defaultWidth);
  });

  test('should render with message', () => {
    const newMessage = 'Message de text';
    const { getByText } = render(<EmptyResult message={newMessage}/>);

    expect(getByText(newMessage)).toBeInTheDocument();
  });

  test('image should have correct width', () => {
    const newWidth = 300;
    const { getByAltText } = render(<EmptyResult width={newWidth} />);
    const image = getByAltText(/empty result/i);

    expect(image.width).toBe(newWidth);
  });
});