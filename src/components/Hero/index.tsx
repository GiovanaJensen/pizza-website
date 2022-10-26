import {Navbar} from "../navbar/index";
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from "./HeroElements";

export function Hero(){
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}