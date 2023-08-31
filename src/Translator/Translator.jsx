import "./Translator.scss";
import countries from './data'

const Translator = () => {
    // console.log(countries)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const targetLng = e.target[0].value;
        const text = e.target[1].value;

        const result = await translations({ targetLng, text })
        // console.log(result)
        if(result === undefined){
            alert('Please select a language to translate to')
        } else {
            e.target[2].value = result;
        }
    }

    const translations = async ({ targetLng, text }) => {
        const url = import.meta.env.VITE_BASE_URL;
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': import.meta.env.VITE_HOST,
            },
            body: new URLSearchParams({
                q: text,
                target: targetLng,
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result.data.translations[0].translatedText;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="mainContainer">
            <h2>Translator</h2>
            <form onSubmit={handleSubmit}>
                <select name="lng" className="select"  required>
                    <option value={0} defaultChecked>Translate to?</option>
                    {countries?.map((item) => (
                        <option value={item.code} key={item.id}>{item.language}</option>
                    ))}
                </select>
                <div className="container">
                    <div className="left">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Enter your text here... (Any language)"
                            required
                        />
                    </div>
                    <div className="right">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            disabled
                            placeholder="Result..."
                        />
                    </div>
                </div>
                <div className="button">
                    <button type="submit" className="submitBtn">Translate</button>
                    <button type="reset" className="clearBtn">Clear</button>
                </div>
            </form>
        </div>
    );
};

export default Translator;
