import { reducerList } from '@/data/store/store';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const renderWithStore = (children: React.ReactNode) => {
  const store = configureStore({
    reducer: {
      ...reducerList,
    },
  });

  render(<Provider store={store}>{children}</Provider>);
};
