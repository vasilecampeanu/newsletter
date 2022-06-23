import { useState } from "react";

const NewsletterForm = ({
    handleSubmit,
    initialText = ""
}) => {
    const [text, setText] = useState(initialText);
    const isInputDisabled = text.length === 0;
    
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };

    return(
        <div className="newsletter-subscription">
            <form onSubmit={onSubmit}>
                <input
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value="Submit" disabled={isInputDisabled} />
            </form>
        </div>    
    );
};

export default NewsletterForm;
