import { PlusIcon } from "@heroicons/react/24/solid"

function NewChat() {
  return (
    <div className="border-grey-500 border chatRow">
        <PlusIcon className="h-8 w-8"/>
        <p>New Request</p> 
    </div>
  )
}

export default NewChat