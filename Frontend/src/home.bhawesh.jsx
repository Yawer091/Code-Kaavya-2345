import { useState } from "react"
import { CardBhawesh } from "./Card.bhawesh";
import { Button } from "@mui/material";
import './StyleHomeBhawesh.css';


export const HomeBhawesh = () => {
    const [cards, setCards] = useState([]);
    const [cards2, setCards2] = useState([]);
    return <>
        <section>
            <div className="header-b-1">
                <h2>
                    CHOOSE FROM
                </h2>
                <h1 className="bb">
                    80+ weekly options
                </h1>
            </div>
            <div className="cards-b-1">
            {
                cards.map( (item, index) => {
                    <CardBhawesh key={index} item={item} />
                } )
            }
            </div>
            <div>
            <Button variant="contained">BROWSE OUR MENUS</Button>
            <h2>
                530+ million meals shipped
            </h2>
            <p>
            See why home cooks stick with the original American meal kit.
            </p>
            </div>
            <div className="cards-b-2">
            {
                cards2.map( (item, index) => {
                    <CardBhawesh key={index} item={item} />
                } )
            }
            </div>
           <div>
           <p>Get started for as little as <span>$7.99 per serving</span></p>
            <Button variant="contained">BROWSE OUR MENUS</Button>
           </div>
        </section>
    </>
}