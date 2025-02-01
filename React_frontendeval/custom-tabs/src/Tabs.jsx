const Tabs = ({tabIndex}) => {

    const content = ["Welcome to Home", "Here is the Content section", "About Us information"];  

  return (
    <div className="mt-6 p-4 border rounded-md shadow-md  text-center">
    <h2 className="text-xl font-semibold">{content[tabIndex]}</h2>
  </div>
  )
}

export default Tabs
