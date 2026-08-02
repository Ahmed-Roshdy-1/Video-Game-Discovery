import { SimpleGrid, Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGame";


const GameGrid = () => {
    const {games, error} = useGames();
 

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
                {games.map(game => (
                    // 
                    <Card key={game.id}>
                        <Image src={game.background_image} />
                        <CardBody>
                            <Heading size="md">{game.name}</Heading>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;