import type { Platform } from "@/hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md"
import {BsGlobe} from "react-icons/bs"


interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        "android": FaAndroid,
        "ios": MdPhoneIphone,
        "linux": FaLinux,
        "mac": FaApple,
        "web": BsGlobe
    }
        
    
    return (
        <HStack marginY={1}>
            {platforms?.map(platform => (
                iconMap[platform.slug] && <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
            ))}
        </HStack>
    )
}

export default PlatformIconList;
