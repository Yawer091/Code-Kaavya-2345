import { useState } from "react"
import { CardBhawesh } from "./Card.bhawesh";
import { Button, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './StyleHomeBhawesh.css';


export const HomeBhawesh = () => {
    const cards = [
        {
            "id": 1,
            "info": "CRAFT",
            "name": "Cheese Crisp Burgers",
            "img": "https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 2,
            "info": "WELLNESS",
            "name": "Turkey & Mushroom Lettuce Cups",
            "img": "https://media.blueapron.com/assets/registration/homepage/wellness.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 3,
            "info": "FAMILY FRIENDLY",
            "name": "Mafalda Pasta",
            "img": "https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 4,
            "info": "FAST & EASY",
            "name": "Sheet Pan Cheesy Jalapeño Chicken",
            "img": "https://media.blueapron.com/assets/registration/homepage/fast-and-easy.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 5,
            "info": "VEGETARIAN",
            "name": "Quinoa & Vegetable “Fried Rice”",
            "img": "https://media.blueapron.com/assets/registration/homepage/vegetarian.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 6,
            "info": "PREMIUM",
            "name": "NY Strip Steaks & Herb-Mushroom Pan Sauce",
            "img": "https://media.blueapron.com/assets/registration/homepage/premium-steak.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 7,
            "info": "READY TO COOK",
            "name": "Pesto Chicken and Orzo",
            "img": "https://media.blueapron.com/assets/registration/homepage/ready-to-cook.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 8,
            "info": "PREPARED & READY",
            "name": "Chicken Parmesan",
            "img": "https://media.blueapron.com/assets/registration/homepage/prepped-and-ready-tile.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 9,
            "info": "BREAKFAST",
            "name": "Fried Egg & Prosciutto Sandwiches",
            "img": "https://media.blueapron.com/assets/registration/homepage/breakfast.webp?width=300&amp;height=300&amp;quality=90"
        },
        {
            "id": 10,
            "info": "DESSERTS",
            "name": "flourless Chocolate Cake",
            "img": "https://media.blueapron.com/assets/registration/homepage/desserts.webp?width=300&amp;height=300&amp;quality=90"
        }
    ];
    // const [cards, setCards] = useState(onTheMenu);
    // const [cards2, setCards2] = useState([]);

    // setCards(onTheMenu);
    // console.log(cards);
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
            <br></br>

            <div className="cards-b-1">
            
<ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {cards.map((item, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
          <CardBhawesh key={index} item={item} /> 
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>

            </div>
            <div className="header-b-2">
               <div>
               <Button variant="contained">BROWSE OUR MENUS</Button>
               </div>
                <h2>
                    530+ million meals shipped
                </h2>
                <p>
                    See why home cooks stick with the original American meal kit.
                </p>
            </div>
            <div className="cards-b-2">
                {/* {
                    cards2.map((item, index) => {
                        <CardBhawesh key={index} item={item} />
                    })
                } */}
                {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {cards2.map((item, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                        <CardBhawesh key={index} item={item} />
                        </Grid>
                    ))}
                </Grid>  */}
                            
<ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {cards.map((item, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
          <CardBhawesh key={index} item={item} /> 
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>

            </div>
            <div className="header-b-3">
                <p>Get started for as little as <span>$7.99 per serving</span></p>
               <div>
               <Button variant="contained">SEE PLANS</Button>
               </div>
            </div>
        </section>
    </>
}