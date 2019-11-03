import React from 'react';


export default function About() {
  return (

            <div style={{paddingTop:100, paddingBottom:100}}>
                <img src="superjuicelogo.png" height="80px" style={{margin: 20}} />
                <h3>
                    Hi! We think buying sustainably is too expensive and time-consuming.
                </h3>
                <br />
                <hr />
                    <h3>Superjuice tries to solve this problem.</h3>
                    <p>Inspired by Stewart Brand's <a href="https://en.wikipedia.org/wiki/Whole_Earth_Catalog">Whole Earth Catalog</a>, Superjuice is a price and certification comparison engine.</p>
                    <p><b>Disclaimer:</b> When readers choose to buy from some (but not all) of the listed companies in the catalog, we earn affiliate commissions that support our work.</p>
                    <p>For any questions or comments, email Niko at n.dunkel (at) gmail.com </p> 
            </div>

  );
}
