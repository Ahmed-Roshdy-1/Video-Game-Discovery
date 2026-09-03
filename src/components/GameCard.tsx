import type { Game } from "@/hooks/useGame";
import { Card, CardBody, Image, Heading, Badge, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    let badgeColor = game.metacritic > 75 ? "green" : game.metacritic > 50 ? "yellow" : "";
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}  width='100%' />
            <CardBody>
                {/* truncate the game name if it is too long */}
                <Heading fontSize='2xl' marginBottom={3} whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <Badge fontSize='14px' colorScheme={badgeColor} paddingX={2} borderRadius='4px'>{game.metacritic}</Badge>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard;