import moment from "moment"


const Timer = ({ time}) => {
    const videoTime=moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")
  return (
    <div>
        <span className=" absolute bottom-2 right-2 bg-black text-white px-2 py-2 text-xs rounded-md">{videoTime}</span>

    </div>
  )
}

export default Timer