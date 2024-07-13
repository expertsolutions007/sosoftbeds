import {
    CDiv,
    Heading,
    Image,
    PDiv,
} from './grid.collection.styles'
import { smallGrids, bigGrids } from './data/grid'
import theme from '../../../../theme'

export default function Grid() {
    return (
        <PDiv>
            {bigGrids.map((g, i) =>
                <CDiv order={g.order} theme={theme}>
                    <Image src={g.img} height={g.height} />
                    <Heading>{g.title}</Heading>
                </CDiv>)}
        </PDiv>
    )
}