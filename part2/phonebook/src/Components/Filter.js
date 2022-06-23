export const Filter = (props) => {
    return(
      <div>
        filter show whit: <input type={props.type} onChange={props.handleChangeFilter}/>
      </div>
    )
  }