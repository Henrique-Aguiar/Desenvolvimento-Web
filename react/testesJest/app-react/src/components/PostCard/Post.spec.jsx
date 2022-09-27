import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { postPropsMock } from "./mock"

const props = postPropsMock

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props}/>)
        
        expect(screen.getByAltText(/title 1/i))
            .toHaveAttribute('src', 'img.png')
        expect(screen.getByRole('heading', {name: 'title 1 1'})).toBeInTheDocument()
        expect(screen.getByText('body1')).toBeInTheDocument()
    })

    it('should match snapshot', () => {
        const { container}  = render(<PostCard {...props}/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})