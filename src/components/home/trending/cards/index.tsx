import {
    CDiv,
    Heading,
    Image,
    PDiv,
    CustomButton,
    CustomCard,
    CustomCardContent,
    CustomCardMedia,
    Price,
    Title_Price
} from './cards.trending.styles'
import { cards } from './data/cards'
import theme from '../../../../theme'
import { truncate } from 'lodash'

export default function Cards() {
    return (
        <PDiv>
            {cards.map((g, i) =>
                <CDiv theme={theme} key={i}>
                    <CustomCard sx={{}}>
                        <CustomCardMedia
                            //@ts-ignore
                            component="img"
                            height="194"
                            image={g.img}
                            alt="Bed"
                        />
                        <CustomCardContent>
                            <CustomButton>Customize Your Bed</CustomButton>
                            <Title_Price>
                                <Heading>{g.title.length > 20 ? truncate(g.title, { length: 20 }) : g.title}</Heading>
                                <Price>{g.price}</Price>
                            </Title_Price>
                        </CustomCardContent>
                    </CustomCard>
                </CDiv>)}
        </PDiv>
    )
}