import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const { data: genres, error, isLoading } = useGenres();
    if (isLoading) return <Spinner />;
    if (error) return null;
    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {genres.map(genre => (
                    <ListItem key={genre.id} paddingY="10px">
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} alt={genre.name} />
                            {/* highlight the selected genre */}
                            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link" whiteSpace='wrap' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList;
