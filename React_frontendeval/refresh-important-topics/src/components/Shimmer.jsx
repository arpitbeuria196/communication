const Shimmer = () => {

  

  return (
    <div className="flex flex-wrap gap-4 p-4">
       {
        Array(10).fill(0).map((_,i)=>(
          <div key={i} className="p-4 border border-white rounded-lg">
          <div className="w-[84px] h-[84px] bg-gray-200 animate-pulse"></div>
        </div>
        ))
       }
    </div>
  )
}

export default Shimmer
