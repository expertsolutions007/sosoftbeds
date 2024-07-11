import {
    Address,
    C1Box1,
    C1Box2,
    C2Box1,
    C3Box1,
    DiscountTxt,
    GoldPhone,
    Loc,
    Mail,
    PBox1,
    PBox2,
    PBox3,
    PDiv,
    PFlex,
    PhoneNumber,
    Location
} from './discount.styles'

export default function Discount() {
    return (
        <PDiv>
            <PFlex>
                <PBox1>
                    <C1Box1>
                        <GoldPhone src='./static/images/phone_gold.svg' />
                        <PhoneNumber>01924 465 009</PhoneNumber>
                    </C1Box1>
                    <C2Box1>
                        <Mail src='./static/images/mail.svg' />
                        <Address>info@ottoman-bed.co.uk</Address>
                    </C2Box1>
                </PBox1>
                <PBox2>
                    <C1Box2>
                        <DiscountTxt>Summer sale discount off 50%! Shop Now</DiscountTxt>
                    </C1Box2>
                </PBox2>
                <PBox3>
                    <C3Box1>
                        <Location src='./static/images/location.svg' />
                        <Loc>Location</Loc>
                    </C3Box1>
                </PBox3>
            </PFlex>
        </PDiv>
    )
}