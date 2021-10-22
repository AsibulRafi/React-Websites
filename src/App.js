import { BrowserRouter as Router } from "react-router-dom"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Products from "./components/Products"
import { productData, productDataTwo } from "./components/Products/data"
import { GlobalStyle } from "./globalStyle"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer />
    </Router>
  )
}

export default App
