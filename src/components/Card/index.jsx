import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./index.css"

export default function Card() {

  const [dates, setDatas] = useState([]);


  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URLS)
      .then(res => {
        setDatas(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  })

  function handleDelete(id, name) {
    let isDelete = confirm(`Rosdan ham ${name} ni ochirmoqchimisiz `)
    if (isDelete) {
      fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.message == "Mahsulot muvaffaqiyatli o'chirildi") {
            del(id);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }


  return (
    <>

      <nav className='card_nav'>
        <ul>
          <h1>hello world</h1>
        </ul>
      </nav>

      <div className='header'>
        {
          dates.map((data, index) => {
            return (
              <div className='cards' key={index}>
                <h2>{data.name}</h2>
                <h2>{data.description}</h2>
                <h2>{data.price}</h2>
                <button className='card-btn' onClick={() => { handleDelete(data.id, data.name) }}>delete</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
