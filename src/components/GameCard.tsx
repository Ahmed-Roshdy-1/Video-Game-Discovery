import type { Game } from "@/hooks/useGame";
import { Card, CardBody, Image, Heading, Badge, HStack, useColorModeValue } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    let badgeColor = game.metacritic > 75 ? "green" : game.metacritic > 50 ? "yellow" : "";
    return (
        <Card boxShadow="" border={useColorModeValue("1px solid #e2e2e2", "1px solid #2d2d2d")} borderRadius="xl" overflow="hidden" >
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}  width='100%' />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                    <Badge fontSize='14px' colorScheme={badgeColor} paddingX={2} borderRadius='4px'>{game.metacritic}</Badge>
                </HStack>
                <Heading fontSize='2xl' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>{game.name}<Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard;