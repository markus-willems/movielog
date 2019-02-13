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

interface IMoviesState {
    watched: string[];
    watchlist: string[];
    byId: {
        [movieId: string]: IMovie;
    };
}

interface IMovie {
    id: string;
    title: string;
    year: string;
    poster: string | null;
}

interface IMoviesFunctions {
    addToWatched: (movie: IMovie) => void;
    addToWatchlist: (movie: IMovie) => void;
    isOnWatched: (movieId: string) => boolean;
    isOnWatchlist: (movieId: string) => boolean;
    removeFromWatched: (movie: IMovie) => void;
    removeFromWatchlist: (movie: IMovie) => void;
}

interface IMoviesProps extends IMoviesFunctions {
    movies: IMovie[];
}

interface IMovieProps extends IMoviesFunctions {
    movie: IMovie;
}

interface IAction {
    type: string;
    data?: unknown;
}

type IReducer = (
    state: Partial<IApplicationState>,
    action: IAction
) => Partial<IApplicationState>;

interface IWrapperProps {
    children: React.ReactNode;
    rootReducer: IReducer;
}

interface IApplicationState {
    movies: IMoviesState;
}
