import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup marginX={10}>
            <InputLeftElement children={<BsSearch />} />
            <Input placeholder="Search games..." variant="filled" borderColor="gray.600" borderRadius={20}  />
        </InputGroup>
    )
}

export default SearchInput;