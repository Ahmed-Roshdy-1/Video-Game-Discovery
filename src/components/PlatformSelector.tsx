import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";
import type { Platform } from "@/hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const { data: platforms,error } = usePlatforms();

    const platform = selectedPlatform?.name || "All Platform";

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {platform}
            </MenuButton>

            <MenuList>
                <MenuItem onClick={() => onSelectPlatform(null as unknown as Platform)} fontWeight={selectedPlatform === null ? "bold" : "normal"}>All Platforms</MenuItem>
                {platforms.map(platform => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)} fontWeight={platform.id === selectedPlatform?.id ? "bold" : "normal"}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;