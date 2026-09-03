import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: Props) => {
    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-added", label: "Added date"},
        {value: "-popularity", label: "Popularity"},
        {value: "-rating", label: "Average rating"},
    ]

    const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder)?.label;


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder || "Relevance"}
            </MenuButton>

            <MenuList>
                {sortOrders.map(order => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector;