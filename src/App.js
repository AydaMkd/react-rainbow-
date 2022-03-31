

import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])


  
    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }
   
    
        
        let colorMap = colors.map((color, i) => {
            return (
                <ColorBlock color={color} />
            )
        })
    
    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
    return (
          
<div className="App">
    {colors.map((color, i) => 
        <ColorBlock key={i} color={color} />
    )}
</div>

    )
    }
export default App