import {StoreProvider} from '@reducers';
import Main from '@routes';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
