const MemeCard = ({item}) => {

  const{title,url} = item;
  return (
    <div className="grid-wrap min-h-screen min-w-screen place-items-center p-4">
     <div className="w-full max-w-md bg-gray-800 text-white p-4 rounded-lg shadow-md">
     <h1 className="text-sm font-bold break-words">{title}</h1>
      <img 
       className="w-full h-auto rounded-md mt-2" 
      src={url}/>
     </div>
    </div>
  )
}

export default MemeCard