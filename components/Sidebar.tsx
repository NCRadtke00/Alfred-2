import NewRequest from "./NewRequest"

function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-2">
        <div className="flex-1">
            <div>
                <NewRequest /> 
            </div>
            <div>
                list of past
            </div>
            <div>
                tools
            </div>
        </div>

    </div>
  )
}

export default Sidebar