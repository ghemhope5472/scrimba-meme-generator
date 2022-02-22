import React from "react";


function Main() {

  // const [memeImage, setMemeImage ] = React.useState("");

  const [ meme, setMeme ] = React.useState({
    topText:'',
    bottomText:'',
    randomImage: ''
  })




  const [ allMemeImages,setAllImages ] = React.useState({})


  const handleChange =(event)=> {
    const { name, value } = event.target
        setMeme( prevState => {
            return {
              ...prevState,
              [name] : value
            }
        })
  }

  const handleClick = () => {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
 
    setMeme( prevMeme => (
         {...prevMeme,
            randomImage: url
        }
    ));
  };


  React.useEffect(function(){
    fetch('https://api.imgflip.com/get_memes')
  
    .then( res => res.json())
    .then( data => setAllImages( data ))
    console.log('effect ran')
  },[])


  return (
    <main>
      <div className="form--container">
        <input type="text" placeholder="Top text" className="form--inputs" name='topText' onChange={handleChange} />
        <input type="text" placeholder="Bottom text" className="form--inputs" name='bottomText' onChange={handleChange} />
        <button className="form--button" onClick={handleClick}>
          {" "}
          Get a new meme image{" "}
        </button>
      </div>
      <div className="meme">
        <h1 className="text top"> {meme.topText}</h1>
        <img src={meme.randomImage} className="meme--image" />
        <h1 className="text bottom"> {meme.bottomText}</h1>
      </div>
    </main>
  );
}

export default Main;
