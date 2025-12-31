import { LayoutPage } from "../components/layout";
import { ListMovie } from '../components/movies';

function HomePage() {
    return (
        <LayoutPage>
            <ListMovie />
        </LayoutPage>
    );
}

export default HomePage;