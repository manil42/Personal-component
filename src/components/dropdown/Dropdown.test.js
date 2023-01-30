import { render } from "@testing-library/react"
import { DropdownValueWithAvatar } from "../__mock/DropdownValue"
import { Dropdown } from "./Dropdown"

describe('Dropdown component',()=>{
    test("Dropdown component is render properly",()=>{
        let dropdownComponent = render(<Dropdown {...DropdownValueWithAvatar}/>);
    })
})