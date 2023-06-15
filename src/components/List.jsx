import React from 'react'

const List = ({users}) => {
  return (
    <ul className='row justify-content-between'>
        {
            users.map(item => {
              return(
                <div className="card col-3 m-1 pt-2" key={item.id}>
                    <img src={item.avatar} className="card-img-top" alt={item.avatar} />
                    <div className="card-body">
                        <h2 className='card-title'>{item.first_name} {item.last_name}</h2>
                        <p className='card-text'>EMAIL: {item.email}</p>
                    </div>
                </div>
              )
            })
        }
    </ul>
  )
}

export default List