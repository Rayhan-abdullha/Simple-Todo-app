import React from 'react'
import ShowList from './ShowList'
import VisibleBtn from './VisibleBtn'

export default function Item({items, editItem, deleteItem, displayVisible, handleComplete, visible}) {
  return (
    <div className='todoList'>
          <VisibleBtn displayVisible={displayVisible}/>
        <div className='items mt-3'>
          {
            items.length > 0 ? (<ShowList items={items} editItem={editItem} deleteItem={deleteItem} handleComplete={handleComplete}/>) :
            (<p className='text-center text-light'>
              <strong>No Items Here!</strong>
            </p>)
          }
        </div>
    </div>
  )
}