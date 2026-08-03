import useGenres from "@/hooks/useGanres";
import { Spinner, Text } from "@chakra-ui/react";


const GenreList = () => {
    const {genres, error, isLoading} = useGenres();
    return (
        <div>
            <h1>Genres</h1>
            {isLoading && <Spinner />}
            {error && <Text>{error}</Text>}
            {genres.map(genre => (
                <Text key={genre.id}>{genre.name}</Text>
            ))}
        </div>
    )
}

export default GenreList;
