import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import RobotCardList from './CardList';

describe('Given a card list component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('When the user opens the page, then it should call the async function', async () => {
    render(
      <Provider store={store}>
        <RobotCardList />
      </Provider>,
    );

    await waitFor(() => {
      const listitem = screen.getAllByRole('listitem');
      expect(listitem.length).toBe(1);
    });
  });
});
