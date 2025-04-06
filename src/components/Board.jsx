import React, { useState } from 'react'

const Board = () => {
    const [xo,setXO] = useState(null)
    const winning = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
      ]
    const clickHandler = (cellno) =>{
        if(cellno.target.value==''){
            setXO(xo=='x'?'o':'x')
            cellno.target.value=xo
            setTimeout(()=>{
                checkWin(cellno.target.value);
            },100)
        }
    }
    const checkWin = (ooyeah) => {
        for(let i=0;i<winning.length;i++){
            let a = document.getElementById(winning[i][0].toString());
            let b = document.getElementById(winning[i][1].toString());
            let c = document.getElementById(winning[i][2].toString());
            if(a.value==b.value&&a.value==c.value&&a.value==xo){
                a.style.backgroundColor = "green"
                b.style.backgroundColor = "green"
                c.style.backgroundColor = "green"
                setTimeout(()=>{
                    sayWin(ooyeah.toUpperCase())
                },100)
            }
            
        }
    }
    const sayWin = (ooyeah) => {
        alert(`${ooyeah} wins!`)
        setTimeout(()=>{
            document.querySelectorAll('input').forEach((input)=>{
                input.value = ''
                input.style.backgroundColor = 'transparent  '
            })
        },100)
    }
    
  return (
    <div>
        <div className="flex ">
                <input type="text" id='1' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                <input type="text" id='2' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                <input type="text" id='3' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                
        </div>
        <div className="flex ">
                <input type="text" id='4' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                <input type="text" id='5' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                <input type="text" id='6' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                
        </div>
        <div className="flex ">
                <input type="text" id='7' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                <input type="text" id='8' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                <input type="text" id='9' onClick={(item)=>{clickHandler(item)}} className='border-2 h-20 w-20 text-center text-5xl pb-3' readOnly/>
                
        </div>
        
      <button onClick={()=>{
        document.querySelectorAll('input').forEach((input)=>{
            input.value = ''
            input.style.backgroundColor = 'transparent  '
        })
      }}>reset</button>
    </div>
  )
}

export default Board
