import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
  
}

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({show:false, msg:'',type:'danger'})
  const handleSubmit = (e) => {
    e.preventDefault();
    //check if name is empty
    if(!name) {
      showAlert(true, 'danger', 'Please enter value');
    } else if (name && isEditing) {
      //deal with edit
      setList(list.map((item) => {
        if (item.id === editID) {
          return {...item, title:name}
        }
        return item
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value Changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('');
    }
  }
  const showAlert= (show=false,type="",msg="") => {
    setAlert({show,type,msg})  //show:show
  }
  const clearAllValues = () => {
    showAlert(true,'danger', 'All items removed')
    setList([]);
  }
  const clearOneValue = (id) => {
    showAlert(true,'danger', 'Item removed')
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
  }
  const editItem = (id) => {
   const specificItem = list.find((item) => item.id === id);
   setIsEditing(true);
   setEditID(id);
   setName(specificItem.title);
  }
  //localStorage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
    <h3>grocery bud</h3>
    <div className='form-control'>
      <input type='text' className='grocery' placeholder='g. eggs' value={name} onChange={(e) => setName(e.target.value)} />
      <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
      
    </div>
    </form>
    {list.length > 0 && (
 <div className='grocery-container'>
 <List items={list} clearOneValue={clearOneValue} editItem={editItem}/>
 <button className='clear-btn' onClick={clearAllValues}>Clear</button>
</div>

    ) }
  
    </section>
}

export default App
