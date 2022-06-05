import {React, useState} from 'react'
import '../../styles/url-box/InfoUrl.css'


function InfoUrl(props) {
    const [isCopied, setIsCopied] = useState(false);
  
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(props.children)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 800);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if(props.children){
      return (
        <section className = "InfoUrl">
            <div className="gotten-url-panel">
                <button className = "gotten-url-input" onClick={handleCopyClick}>
                    {isCopied ? 'Copied' : props.children}
                </button>
            </div>
            <p className = "info-url-desc">Press the button to get the URL</p>
        </section>)
    }
  }

export default InfoUrl