import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { styled } from "styled-components"

interface FilterProps {

}

interface FilterItemProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`


    font-family: inherit;
    font-size: 12px;
    font-weight: ${props => props.selected ? '600' : '400'};
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;

    /* background: var(--text-dark); */

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : 'none' };

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 16px;
        line-height: 22px;
    }

`

export function FilterByType() {

    const {type, setType} = useFilter()

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }
    return (
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL} 
                onClick={() =>  handleChangeType(FilterType.ALL)}>
                    Todos os produtos
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={() =>  handleChangeType(FilterType.SHIRT)}>
                    Camisetas
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.MUG} 
                onClick={() =>  handleChangeType(FilterType.MUG)}> 
                Canecas
            </FilterItem>
        </FilterList>
    )
}