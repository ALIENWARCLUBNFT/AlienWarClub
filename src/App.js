import alien from './Assets/Website-banner.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{textAlign:"center"}}>
        <img src={alien} style={{width:"100%"}} className="App-logo" alt="logo" />
      <div style={{position:"absolute", top:"0", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <p
          className="App-link"
       
       
         
        >
          COMING TO SOLANA SOON....
        </p>
       <div style={{display:"flex", alignItems:"center"}}>
   <span className="joinText" style={{fontSize:"35px"}}> JOIN US ON</span>
        <ul className="list-reset" style={{listStyleType:"none", display:"flex", padding:"0", marginLeft:"10px"}}>
       
       <li>
         <a href="https://mobile.twitter.com/alienwarclub"  rel="noopener noreferrer" target="_blank" style={{background:"white", borderRadius:"50%", padding:"12px", display:"flex", justifyContent:"center", marginRight:"10px"}}>
           <svg
             width="50"
             height="50"
             viewBox="0 0 16 16"
             xmlns="http://www.w3.org/2000/svg"
             fill="purple"
           >
             <title>Twitter</title>
             <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
           </svg>
         </a>
       </li>
       </ul>
       </div>
      
    
    
     </div>
      
      </header>
    </div>
  );
}

export default App;
