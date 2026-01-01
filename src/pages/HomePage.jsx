import { LayoutPage } from "../components/layout";
import { MovieList } from '../components/movies';

function HomePage() {
    return (
        <LayoutPage>
            <MovieList />
        </LayoutPage>
    );
}

export default HomePage;