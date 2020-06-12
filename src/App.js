import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job':'도적'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'이상민',
  'birthday':'911122',
  'gender':'남자',
  'job':'프로그래머'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'나순자',
  'birthday':'901022',
  'gender':'여자',
  'job':'대학원생'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
