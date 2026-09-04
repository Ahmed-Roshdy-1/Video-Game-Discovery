import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGame";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data: games, error, isLoading } = useGames(gameQuery);

    if (error) return <Text>{error}</Text>


    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding={10}>
            {isLoading && Array.from({ length: 12 }).map((_, index) => (
                <GameCardContainer key={index}>
                    <GameCardSkeleton />
                </GameCardContainer>
            ))}
            {games.map(game => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;