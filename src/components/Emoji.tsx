import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return "";

    const emojiMap = {
        3: {src: meh, alt: "meh", boxSize: "25px"},
        4: {src: thumbsUp, alt: "recommended", boxSize: "25px"},
        5: {src: bullsEye, alt: "exceptional", boxSize: "35px"}
    }

    return (
        <div>
            <Image {...emojiMap[rating as keyof typeof emojiMap]} boxSize="25px" marginTop={1} />
        </div>
    )
}

export default Emoji;