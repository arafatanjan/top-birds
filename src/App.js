import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import Bird from './components/Bird/Bird';
import Table from './components/Table/Table';
import Cart from './components/Cart/Cart';

<head>

  <title>Bird Shop</title>
</head>

function App() {
  return (
    <div className="App">
      <Directors></Directors>
      <Header></Header>
      <Table></Table>
      <Bird></Bird>
      <Cart></Cart>

    </div>
  );
}

function Directors() {
  return (
    <div>
      {/* <h2> directors </h2> */}
    </div>
  )
}


export default App;
