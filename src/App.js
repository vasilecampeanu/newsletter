import NewsletterForm from './components/NewsletterForm'
import { createSbscription } from './db/firestore.api';

function App() {

    const submit = (text) => {
        console.log(text);
    }

    return (
        <div className="newsletter-inner-wrapper">
            <NewsletterForm handleSubmit={submit}/>
        </div>
    );
}

export default App;
