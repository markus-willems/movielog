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

interface DispatchAction {
    type: string;
    data?: any;
}

type ReducerType = (state: any, action: DispatchAction) => any;

interface IWrapperProps {
    children: React.ReactNode;
    rootReducer: ReducerType;
}
