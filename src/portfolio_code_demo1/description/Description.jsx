import React from 'react'; 
import './Description.css'

  
  export default function Description() {
      return (
          <div>
            <br />
                <div className ='description'
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}>
                    An arithmetic progression is a sequence of numbers that the 
                    difference between each two items is constant. Type initial term, <br />
                    common difference, and the number of term to virtualize arithmetic progression. <br />
                    (e.g., The initial term = 1, The common difference = 0.2, and The number of term = 20)
                </div>
            <br />
          </div>
      )

  }