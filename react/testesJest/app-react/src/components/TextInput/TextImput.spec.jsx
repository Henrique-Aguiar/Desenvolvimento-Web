import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextImput />", () => {
    it("shoud have a value of searchValue", () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={"testando"} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input.value).toBe("testando");
    });

    it("shoud call handleChange function on each key pressed", () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={""} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        const value = "o valor";

        userEvent.type(input, value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

    it("shoud match snapshot", () => {
        const fn = jest.fn();
        const { container } = render(
            <TextInput handleChange={fn} searchValue={""} />
        );

        expect(container).toMatchSnapshot();
    });
});
