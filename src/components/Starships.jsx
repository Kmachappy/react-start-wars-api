const Starships = ({starships}) => {

    
    return (
    starships ? 
    <div className="starships-container">
        {starships.map(starship=>{
        return(
        <div className="starship-card">
            <h1>{starship.name}</h1>
        </div>
        )})}
    </div>
     :
    <div>
        <h1>LOADING......</h1>
    </div>
)
    
}

export default Starships

    // console.log("inside starships:" , data)
    
    // if(data){
    // return(
    //     <div className="starships-container">
    //         { data.map(starship=>{
    //             return(
    //                 <div className="starship-card">
    //                     <h1>{starship.name}</h1>
    //                 </div>
    //             )
    //         })}
    //     </div>
    //     )
    // }else{
    //   return<div>
    //        <h1>LOADING......</h1>
    //    </div>
        
    // }