import Request from "../../../components/Request"
import RequestInput from "../../../components/RequestInput"

type Props = {
    params: {
        id: string;
    }
}

function RequestPage({params: {id} }: Props) {
  return (
    <div>
        <Request requestId={id} />
        <RequestInput requestId={id} />

    </div>
  )
}

export default RequestPage