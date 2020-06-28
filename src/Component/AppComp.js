import React, { Component } from 'react';
import "./Component1.css";
export default class AppComp extends Component{
    render(){
        return(
            
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 homepage">
                    <h2><span className="blackColor">Welcome to</span> Shri Balaji Electricals</h2>
                    <br/>
                    <p>Shri Balaji Electricals was established in the year <b>1980 at Mumbai, Maharashtra</b>. We “<b>Shri Balaji Electricals</b>” are a <b>Sole Proprietorship</b> firm, engaged as the foremost <b>Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material</b>. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.</p>
                    <p><b>Our range of insulation material includes:</b></p>
                    <ul>
                        <a href="/appcomps"><li>Electric PVC Tapes in all sizes</li></a>
                        <li>Garware Polyester Film including slitted paper</li>
                        <li>B/C/F/H class insulation papers</li>
                        <li>Kraft and Crepe papers</li>
                        <li>Rubber Compound for Submersible</li>
                        <li>Submersible/Copper/Aluminium/DPC winding wires</li>
                        <li>Aluminuim and Copper Lugs</li>
                        <li>Cotton Tapes/Webbing Tapes for motor winding</li>
                        <li>B/F/H class Fiber Glass Sleevings</li>
                        <li>Pre-Compressed board - Imported and Handmade</li>
                        <li>Insulating Varnish</li>
                        <li>Fiber Glass Wires and Cables</li>
                        <li>Soldering Wire, Stick and Flux</li>
                    </ul>
                </div>
        );
    }
}