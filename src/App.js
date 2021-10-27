import alien from './Assets/Website-banner.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{textAlign:"center"}}>
        <img src={alien} style={{width:"100%"}} className="App-logo" alt="logo" />
      <div className="text-container" style={{position:"absolute", top:"0", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <p
          className="App-link"
       
       
         
        >
          COMING SOON TO SOLANA....
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
       <li>
         <a href="https://discord.gg/alienwarclub"  rel="noopener noreferrer" target="_blank" style={{background:"white", borderRadius:"50%", padding:"12px", display:"flex", justifyContent:"center", marginRight:"10px"}}>
           {/* <svg
             width="50"
             height="50"
             viewBox="0 0 16 16"
             xmlns="http://www.w3.org/2000/svg"
             fill="purple"
           >
             <title>Discord</title>
             <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
           </svg> */}
            <svg
             aria-hidden="true"
             focusable="false"
             data-prefix="fab"
             data-icon="discord"
             class="svg-inline--fa fa-discord fa-w-20"
             role="img"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 640 512"
             width="50px"
             height="50px"
           >
             <path
               fill="purple"
               d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
             ></path>
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
