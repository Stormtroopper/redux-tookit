import logo from './logo.svg';
import './App.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Fetching_demo } from './components/fetching_demo';
import { productApi } from './features/slice';
function App() {
  return (
    <div className="App">
      <ApiProvider api={productApi}>
        <Fetching_demo/>
      </ApiProvider>
    </div>
  );
}

export default App;
