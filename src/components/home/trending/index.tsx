import {
    CAlign,
    CDiv,
    CPadding,
    Heading,
    HeadingLine,
    PDiv,
    PFlex,
    LLine,
    View
} from './trending.styles'
import Cards from './cards'

export default function Trending() {
    return (
        <PDiv>
            <CDiv>
                <CAlign>
                    <Heading>Trending</Heading>
                </CAlign>
                <LLine>
                    <HeadingLine></HeadingLine>
                    <HeadingLine></HeadingLine>
                </LLine>
            </CDiv>
            <View>Top view in this week</View>
            <CDiv>
                <CPadding style={{marginBottom:"1rem"}}>
                    <Cards />
                </CPadding>
            </CDiv>
        </PDiv>
    )
}