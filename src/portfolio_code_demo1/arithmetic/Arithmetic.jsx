import React from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';





export default function Arithmetic() {
    const [message_initial, setMessage_initial] = useState('');
    const [message_difference, setMessage_difference] = useState('');
    const [message_number, setMessage_number] = useState('');

    const handleChange_initial = event_initial => {
      setMessage_initial(event_initial.target.value);

      console.log(event_initial.target.value);
    };

    const handleChange_difference = event_difference => {
      setMessage_difference(event_difference.target.value);

      console.log(event_difference.target.value);
    };

    const handleChange_number = event_number => {
      setMessage_number(event_number.target.value);

      console.log(event_number.target.value);
    };


    const resetInputField = () => {
      setMessage_initial("");
      setMessage_difference("");
      setMessage_number("")
    };

  

    var  arithmetic_list = []
    for (let i = 0; i < message_number; i++) {
      arithmetic_item = Number(message_initial) + (i-1)*Number(message_difference)
      arithmetic_list.push(arithmetic_item)
    };

    console.log(arithmetic_list)
    
    var arithmetic_item = message_initial + (message_number-1)*message_difference
    console.log(arithmetic_item)

    var item = []
    for (let i = 0; i < message_number; i++) {
      var result = 'a' + String(i)
      item.push(result)
    };
    console.log(item)


    const state = {
      labels: item,
      datasets: [
        {
          label: 'Arithmetic Progression Bar',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: arithmetic_list
        }
      ]
    }
    

    console.log(state)

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <TextField id="initial" label="The initial term" variant="filled" onChange={handleChange_initial} value={message_initial} /><br />
          <TextField id="difference" label="The common difference" variant="filled" onChange={handleChange_difference} value={message_difference} /><br />
          <TextField id="number" label="The number of term" variant="filled" onChange={handleChange_number} value={message_number}/>

        </Box>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <Button variant="contained" onClick={resetInputField} >Reset</Button><br />
        </div>
        <div className = "barchart">
          <Bar
            data={state}
            width={150}
            height={100}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:26
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
            
          />
        </div>



      </div>
    );
  }


