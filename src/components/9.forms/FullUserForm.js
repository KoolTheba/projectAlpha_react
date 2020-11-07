import React from 'react'

export default class FullUserForm extends React.Component {
    state = {
        selectedOption: '',
        hobbies: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('data to send:', JSON.stringify({
            name: this.state.name, 
            firstname: this.state.firstname,
            description: this.state.description,
            gender: this.state.gender,
            age: this.state.age,
            country: this.state.country,
            province: this.state.province,
            hobbies: this.state.hobbies
        }))

        const { target } = e
        const { name } = target

        this.setState({
            [name]: ''
        })
    }

    handleChange = (e) => {
        const { target } = e
        const { name, value } = target

        this.setState({
            [name]: value
        })
    }

    onValueChange = (e) => {
        const { target } = e
        const { name, value } = target

        this.setState({ selectedOption: value })

        if(target.type === 'checkbox'){
            this.setState(state => ({
                [name]: [...state.hobbies, value]
            }))
        }

        if(target.type === 'radio'){
            this.setState({
                [name]: value
            })
        }
    }

    render(){
        return(
            <>
            <h3>Please fill your user form:</h3>
            <form>
                <p>Name: 
                    <input
                        value={this.state.name}
                        type='text'
                        name='name'
                        onChange={this.handleChange}
                        placeholder={'type your name...'}
                    ></input>
                </p>
                <p>Firstname: 
                    <input
                        value={this.state.firstname}
                        type='text'
                        name='firstname'
                        onChange={this.handleChange}
                        placeholder={'type your firstname...'}
                    ></input>
                </p>
                <p>Description: 
                    <textarea
                        value={this.state.description}
                        name='description'
                        onChange={this.handleChange}
                        placeholder={'description'}
                    ></textarea>
                </p>
                <p>Gender</p>
                <input 
                    type="radio"
                    checked={this.state.selectedOption === 'Male'}
                    name="gender"
                    value='Male'
                    onChange={this.onValueChange}
                /> Male
                <input 
                    type="radio"
                    checked={this.state.selectedOption === 'Female'}
                    name="gender"
                    value='Female'
                    onChange={this.onValueChange}
                /> Female
                <input 
                    type="radio"
                    checked={this.state.selectedOption === 'Other'}
                    name="gender"
                    value='Other'
                    onChange={this.onValueChange}
                /> Other
                <p>Age: 
                    <input
                        value={this.state.age}
                        name='age'
                        type='text'
                        onChange={this.handleChange}
                        placeholder={'type your age...'}
                    ></input>
                </p>
            <p>Country</p>
            <select
                value={this.state.country}
                items='country'
                onChange={this.handleChange}
                style={{cursor: 'pointer', padding: '0.5rem', marginLeft: '1rem'}}
            >
                <option value={'Spain'}>Spain</option>
                <option value={'USA'}>USA</option>
            </select>
            <p>Province</p>
            <select
                value={this.state.province}
                items='province'
                onChange={this.handleChange}
                style={{cursor: 'pointer', padding: '0.5rem', marginLeft: '1rem'}}
            >
                <option value={'Guadalajara'}>Guadalajara</option>
                <option value={'Madrid'}>Madrid</option>
            </select>
                <div>
                    <p>Hobbies</p>
                    <label>Games</label>
                    <input 
                        type="checkbox"
                        name='hobbies'
                        value='Games'
                        onChange={this.onValueChange}
                        checked={this.state.selectedOption === 'Games'}
                    />
                    <label>Football</label>
                    <input 
                        type="checkbox"
                        name='hobbies'
                        value='Football'
                        onChange={this.onValueChange}
                        checked={this.state.selectedOption === 'Football'}
                    />
                    <label>Basketball</label>
                    <input 
                        type="checkbox"
                        name='hobbies'
                        value='Basketball'
                        onChange={this.onValueChange}
                        checked={this.state.selectedOption === 'Basketball'}
                    />
                    <label>Art</label>
                    <input 
                        type="checkbox"
                        name='hobbies'
                        value='Art'
                        onChange={this.onValueChange}
                        checked={this.state.selectedOption === 'Art'}
                    />
                </div>
                <button
                    onClick={this.handleSubmit}
                    disabled={false}
                    type='submit'
                    style={{ cursor: 'pointer', marginTop: '3rem', marginBottom: '5rem'}}
                >Submit
                </button>
            </form>
            </>
        )
    }
}

// 2b. locations no funcionan
// 2. hobbies
// 3. Limpiar el estado al submittear