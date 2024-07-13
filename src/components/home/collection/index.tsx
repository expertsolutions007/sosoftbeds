import {
    CAlign,
    CDiv,
    CPadding,
    Heading,
    HeadingLine,
    PDiv,
    PFlex,
} from './collection.styles'
import Grid from './grid'

export default function Collection() {
    return (
        <PDiv>
            <CDiv>
                <CAlign>
                    <HeadingLine></HeadingLine>
                    <Heading>Our Collection</Heading>
                    <HeadingLine></HeadingLine>
                </CAlign>
            </CDiv>
            <CDiv>
                <CPadding>
                    <Grid />
                </CPadding>
            </CDiv>
        </PDiv>
    )
}