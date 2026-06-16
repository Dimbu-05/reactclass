import './Header.css'
function Home() {
  return (
    <>
    <img src="https://zerodha.com/static/images/landing.svg" alt="" />
    <h2>Invest in everything</h2>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button onMouseEnter={(e) => e.target.style.backgroundColor = 'lightgreen'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'skyblue'}
 id='btn' className="btn">SignUp</button>
    </>
  )
}

export default Home