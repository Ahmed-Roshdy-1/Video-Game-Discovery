import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
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
                            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link" whiteSpace='wrap' textAlign='left'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList;
