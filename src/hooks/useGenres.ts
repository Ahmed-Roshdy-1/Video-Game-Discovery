import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
       const [genres, setGenres] = useState<Genre[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setIsLoading] = useState(false);
    
        useEffect(() => {
            const controller = new AbortController();
            const fetchGames = async () => {
                setIsLoading(true);
                apiClient.get<FetchResponse>("/genres", {signal : controller.signal})
                    .then(res => {
                        setGenres(res.data.results);
                        setIsLoading(false);
                    })
                    .catch(err => {
                        if(err instanceof CanceledError) return;
                        setError(err.message)
                        setIsLoading(false);
                    });
            };
            fetchGames();
    
            return () => controller.abort();
        }, []);
    
        return { genres, error, isLoading }
    
}

export default useGenres;
