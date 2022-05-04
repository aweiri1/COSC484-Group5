import Login from './login.mjs';
import logo from './logo.svg';
import './App.css';

function App() {
  return <Login />;
  return (
    // <>
    //   <Navbar/>
    //   <Home/>
    //   <Register/>
    //   <Login/>
    //   <RecipeView/>
    //   <RecipeSearch/>
    //   <Inventory/>
    // </>
    <Router>
    <Navbar/> { /* <br/> */ } 
    <Routes >
    <Route path = "/" exact element = { < Home/> } > </Route> 
    <Route path = "/register"element = { < Register/> } > </Route> 
    <Route path = "/login" exact element = { <Login/> } > </Route> 
    <Route path = "/recipeView" exact element = { < RecipeView/> } > </Route> 
    <Route path = "/recipeSearch" exact element = { < RecipeSearch/> }> </Route> 
    <Route path = "/inventory" exact element = { < Inventory/> } > </Route> 
    {
        /* <Route path="/support" exact element={<Support/>} ></Route>
              <Route path="/cuisines" exact element={<Cuisines/>} ></Route>
              <Route path="/drinks" exact element={<Drinks/>} ></Route> */
    } </Routes> 
    </Router>
    //<Login/>
);
}

export default App;
