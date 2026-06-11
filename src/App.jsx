
import './App.css'
import Header from './Header'
import Products from './Products.jsx'
function App() {
  
 
  return (
    <>
    <section style={{textAlign:"center"}}  >
   <Header/>
    <img src="https://zerodha.com/static/images/landing.svg" alt="" />
    <h2>Invest in everything</h2>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id='btn' >SignUp</button>
    </section>

    <section>
      <h1>cards</h1>
    
    <Products/>
    </section>
    </>
  )
}

export default App
