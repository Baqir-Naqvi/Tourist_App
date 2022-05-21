import React from 'react'
import './Cards.css';
import Carditem from './Carditem';

const Cards = () => {
  return (
    <div className='cards'>
    <h1>Check out these EPIC Destinations!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
       
        <ul className='cards__items'>
          <Carditem
            src={amazon}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
          />
          <Carditem
            src={image1}
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
          />
        </ul>
        <ul className='cards__items'>
          <Carditem
            src={ocean}
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
          />
          <Carditem
            src={mountain}
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/products'
          />
          <Carditem
            src={desert}
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
            
          />
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default Cards
const desert='https://images.unsplash.com/photo-1587241432831-4490df069382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FoYXJhJTIwZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
const ocean='https://images.unsplash.com/photo-1616849483121-a97e019957a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF0bGFudGljJTIwb2NlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
const mountain=`https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`
const amazon='https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
const image1=`https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`