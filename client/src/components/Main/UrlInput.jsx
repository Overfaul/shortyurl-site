import { React, useState} from 'react';
import InfoUrl from './InfoUrl'
import Loader from '../Loader/LoaderForUrl'
import '../../styles/url-box/UrlInput.css';

const UrlInput = (props) => {
    const [val, setVal] = useState() // Storing an original url
    const [url, setUrl] = useState() // Storing a short Url 

    // Conditions for loader
    const [isLoading, setIsLoading] = useState('noload') // State for loader
    let loader;
    if (isLoading == 'loading') {
        loader = <Loader />
    } else if (isLoading == 'complete') {
        loader = <InfoUrl>{url}</InfoUrl>
    }

    const ajreq = async () => {
        const toSend = {
            origurl: val
        }
        
        if (val) {
            setIsLoading('loading')
            const jsondata = JSON.stringify(toSend)

            fetch("http://localhost:3000/cshorturl", {

                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: jsondata
            
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if (data.error){
                        setIsLoading('noload')
                    }else{
                        setUrl(data.shorturl)
                        setIsLoading('complete')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }




    return (
        <section className="url-input-section" >
            <form className="url-input-panel">
                <input className="url-input" required placeholder="Paste your URL to be shortened ^_^"
                    onChange={event => setVal(event.target.value)}
                />
                <button className="url-input-button" onClick={(e) => {
                    //onAddBtnClick() - добавляет компонент
                    ajreq()
                    e.preventDefault()
                }}>Get ShortURL</button>
            </form>
            <div className="url-input-subtext">
                <p>A free tool used for shortening URLs</p>
                <p>You can paste your URL to make it shorter and easier to use</p>
            </div>
            {loader}
        </section>

    )

}


export default UrlInput