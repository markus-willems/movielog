interface IOMDbSearchTitle {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface IOMDbSearchResponse {
    Error?: string;
    Search?: IOMDbSearchTitle[] | undefined;
    totalResults?: string;
    Response: string;
}

interface Movie {
    id: string;
    title: string;
    year: string;
    poster: string | null;
}

interface IMoviesProps {
    movies: Movie[];
    addToWatched: (movie: Movie) => void;
    addToWatchlist: (movie: Movie) => void;
    isOnWatched: (movieId: string) => boolean;
    isOnWatchlist: (movieId: string) => boolean;
    removeFromWatched: (movie: Movie) => void;
    removeFromWatchlist: (movie: Movie) => void;
}

interface IMovieProps {
    movie: Movie;
    addToWatched: (movie: Movie) => void;
    addToWatchlist: (movie: Movie) => void;
    isOnWatched: (movieId: string) => boolean;
    isOnWatchlist: (movieId: string) => boolean;
    removeFromWatched: (movie: Movie) => void;
    removeFromWatchlist: (movie: Movie) => void;
}

interface DispatchAction {
    type: string;
    data?: any;
}

type ReducerType = (state: any, action: DispatchAction) => any;

interface IWrapperProps {
    children: React.ReactNode;
    rootReducer: ReducerType;
}
