import React from 'react'
import Products from './components/Products';
// import data from './data.json'
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';
class App extends React.Component{
  render(){
  return (
    <Provider store = {store}>
       <div className = "grid-container">
       <header>
       <a href = "/">Santhosh Shopping cart</a>
       </header>
       <main>
       <div className = "content" >
       <div className = "main"> <Products /> </div>
       <div className = "sidebar"><Cart /></div>
       </div>
       
       </main>
       <footer>All Rights reserved!!</footer>
       </div>
       </Provider>
     );
  }
}

export default App;
