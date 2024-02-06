const MyForm = () => {
  //<></> - React.Fragment - если пустой div без класс тогда используем эта
  return (
    <>
      <br />
      <button>add to cart</button>
      <input type="text" placeholder="search" />
      <input type="checkbox" />
      <input checked name="gender" type="radio" />
      <input name="gender" type="radio" />
    </>
  )
}

export default MyForm