import {DocumentData} from 'firebase/firestore'

type Props = {
    message: DocumentData;
}
function Message({message}: Props) {
    const isAlfred = message.user.name = "Alfred";
    
  return (
    <div>Message</div>
  )
}

export default Message