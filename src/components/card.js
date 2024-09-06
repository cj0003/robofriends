import React from "react";

const Card = ({name,email,id}) =>{ //the cards needs to accept parameters now. and these parameters are the properties
    //const {name,props,id} = props;
    return(
        // <h1>RoboFriends</h1> -title cant do this here because we can only return 1 thing
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 

            <img alt ='robots' src={`https://robohash.org/${id}?200x200`} />
           

            {/* <div>
            {console.log(props.id)}
                <h2>jane Doe</h2>
                <p>janedoe@gmail.com</p>
            </div> */}
            <div>
            {console.log(id)}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;