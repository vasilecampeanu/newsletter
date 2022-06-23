import NewsletterForm from './components/NewsletterForm'
import { createSbscription } from './db/firestore.api';

function App() {
    return (
        <div className="newsletter-inner-wrapper">
            <NewsletterForm />
        </div>
    );
}

export default App;
