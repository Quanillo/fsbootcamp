export const PersonForm = (props) => {
    return(
      <form onSubmit={props.handleSubmit}>
          <div>
            name: <input type='text' onChange={props.handleChangeName} value={props.newName}/>
          </div>
          <div>
            number: <input type='text' onChange={props.handleChangeNumber} value={props.newNumber} />
          </div>
          <div>
            <button type='submit' onClick={props.handleSubmit}>add</button>
          </div>
        </form>
    )
  }