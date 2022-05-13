const Buttons = ({getStarships, links}) =>{


    return(
        <div className="buttons">
            <h1>Page {links.prev}</h1>
            <button onClick={()=>getStarships(links.prev)}>prev</button>
            <button onClick={()=>getStarships(links.next)}>test</button>
        </div>
    )
}

export default Buttons