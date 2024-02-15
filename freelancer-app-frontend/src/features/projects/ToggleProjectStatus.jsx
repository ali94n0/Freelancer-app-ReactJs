
import useUpdateProjectStatus from './useUpdateProjectStatus'
import Loader from '../../ui/Loader'
import Toggle from '../../ui/Toggle'

function ToggleProjectStatus({status,id}) {

  const {isUpdating,updateStatus}=useUpdateProjectStatus()

  const toggleHandler = ()=>{
    const newStatus = status === "OPEN" ? "CLOSE" : "OPEN";
    updateStatus({id,data:{status:newStatus}},)
  }

  return (
    isUpdating ? <Loader width={50} height={30}/> : 
    <Toggle label={status === "OPEN" ? "باز" :"بسته"}
    checked={status === "OPEN" ? true : false}
    onChange={toggleHandler}
    enabled={status}/>
  )
}

export default ToggleProjectStatus