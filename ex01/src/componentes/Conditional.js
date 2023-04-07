const Conditional = ({ idade }) => {
  return (
	<>
		{idade >= 18 && <p>Esta pessoas pode conduzir!</p>}
	</>
  )
}

export default Conditional