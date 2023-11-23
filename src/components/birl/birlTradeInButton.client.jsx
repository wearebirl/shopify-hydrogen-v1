


export default function BirlTradeInButton(){

    function next(){
        console.log('next')
        alert("next")
    }

    return(
        <div>
            <h1>Home</h1>
            <button if={"a"} className={"bg-blue-300"}  onClick={()=>next}>Next</button>
        </div>
    )
}