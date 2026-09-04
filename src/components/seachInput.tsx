import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
    onSearch: (query: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e) => {e.preventDefault(); onSearch(ref.current!.value);}}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} placeholder="Search games..." variant="filled" borderColor="gray.600" borderRadius={20} />
            </InputGroup>
        </form>
    )
}

export default SearchInput;