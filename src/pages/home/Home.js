import React, { useState } from 'react'
import './home.scss';
import Search from '../../component/search/Search';

function Home() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [contact, setContact] = useState("")
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState([])

    const handleSave = (e) => {
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "contact": contact,
        }

        setUsers((oldUsers)=>[...oldUsers, data])
        setFirstName("")
        setLastName("")
        setContact("")
    }
    
    const handleDeleteUser = (index) => {
        const oldUsers = [...users];
        oldUsers.splice(index, 1);
        setUsers(oldUsers)
    }


  return (
    <div className='home'>
        <div className="home__form">
            <div className="home__form__block">
                <div className="home__form__block__label">Person's Name</div>
                <div className="home__form__block__inputs">
                    <input type="text" placeholder='First' value={firstName} onChange={(e)=> setFirstName(e.target.value)} className="home__form__block__inputs__input" />
                    <input type="text" placeholder='Last' value={lastName} onChange={(e)=> setLastName(e.target.value)} className="home__form__block__inputs__input" />
                </div>
            </div>
            <div className="home__form__block">
                <div className="home__form__block__label">Contact Number</div>
                <input type="number" value={contact} onChange={(e)=> setContact(e.target.value)} className='home__form__block__contactinput' />
            </div>
            <button onClick={handleSave} className="home__form__saveBtn">Save</button>
        </div>

        <div className="home__table">
            <Search users={users} setSearch={setSearch}/>
            <table>
                <thead>
                    <tr>
                        <th>SN.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        search.length > 0 ? search.map((user,index)=>(
                            <tr key={user.contact}>
                                <td>{index + 1}</td>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.contact}</td>
                                <td><button className="home__table__delete" onClick={()=>handleDeleteUser(index)}>X</button></td>
                            </tr>
                        )) :
                        users.map((user,index)=>(
                            <tr key={user.contact}>
                                <td>{index + 1}</td>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.contact}</td>
                                <td><button className="home__table__delete" onClick={()=>handleDeleteUser(index)}>X</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>        
    </div>
  )
}

export default Home