import { titleSearchMapper } from '../src/api/mapper';

describe('titleSearchMapper', () => {
    it('should map input to specified format', () => {
        const input = {
            Search: [
                {
                    Title: 'The Dark Knight',
                    Year: '2008',
                    imdbID: 'tt0468569',
                    Type: 'movie',
                    Poster:
                        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
                },
            ],
            totalResults: '1234',
            Response: 'True',
        };
        const expectedOutput = {
            movies: [
                {
                    id: 'tt0468569',
                    title: 'The Dark Knight',
                    year: '2008',
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
                },
            ],
            totalResults: '1234',
        };
        expect(titleSearchMapper(input)).toEqual(expectedOutput);
    });
});
