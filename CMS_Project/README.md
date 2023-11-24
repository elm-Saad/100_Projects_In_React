# Image searcher

## What to learn

* Using React Query
* Using the React Query Dev Tools
* ENV Variables in Vite

## Install && Usage

```bash
$ npm i @tanstack/react-query-devtools


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContext>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </GlobalContext>
  </React.StrictMode>,
)


