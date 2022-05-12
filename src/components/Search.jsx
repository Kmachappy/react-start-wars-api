import { useState } from "react"

const Search = ({searchShips}) =>{
    const [input, setInput] = useState({
        input: ""
    })
    // console.log("inside search", input)

    const handleChange =(event)=>{
        const newInput = {...input}
        newInput[event.target.name]= event.target.value
        // console.log(newInput)   
        setInput(newInput)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log("clicked sumbit: input : ", input)
        searchShips(input.input)
        setInput({input: ""})    
    }

    return(
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="input" onChange={handleChange} value={input.input} placeholder="Starship name" />
                <input type="submit" value="Search Starship"/>
            </form>

        </div>

    )

}

export default Search
