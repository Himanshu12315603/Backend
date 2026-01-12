import React from 'react';


function App() {
    return <div>
        <CardWrapper innerComponent={ <TextComponent />} /> <br />
        <CardWrapper innerComponent={ <TextComponent1 />} />
    </div>

}

function TextComponent() {
    return <div>    
        This is the text component
    </div>
}

function TextComponent1() {
    return <div>    
        This is the 2nd text component
    </div>
}

function CardWrapper({innerComponent}) {
    return <div style={{border: "2px solid black ", padding: "10px", margin: "10px"}}> 
        {innerComponent}
    </div>
}

export default App;