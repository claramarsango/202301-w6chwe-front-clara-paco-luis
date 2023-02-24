import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Given a header component', () => {
  test('When the page is rendered, there should be a title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
