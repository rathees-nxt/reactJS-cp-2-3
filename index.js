const Box = props => {
  //  Write your code here.
  const {className, children} = props
  const eachItem = `box ${className}`
  return (
    <div className={eachItem}>
      <p className='para'>{children}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='box-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-card-container'>
      <Box className='small-container' children='Small' />
      <Box className='med-container' children='Medium' />
      <Box className='large-container' children='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
