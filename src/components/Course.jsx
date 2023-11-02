function Course({ course, cardBtnClickHandler }) {

  const { id, img_url, course_name, description, credit, price } = course;

  return (
    <div className="bg-white rounded-2xl p-5">
      <img src={img_url} className="w-full" alt="" />
      <h4 className="font-semibold my-3">{course_name}</h4>
      <p className="text-justify text-black/40"><small>{description}</small></p>
      <p className="flex items-center justify-between my-3 gap-16">
        <div className="flex items-center justify-between w-1/2">
          <img src='./icons/dollar.png' alt="" />
          <small className="text-black/40">Price: {price}</small>
        </div>
        <div className="flex items-center justify-between w-1/2">
          <img src="./icons/credit.png" alt="" />
          <small className="text-black/40">Credit: {credit}</small>
        </div>
      </p>
      <button
        onClick={() => cardBtnClickHandler(id, course_name, credit, price)}
        className="block w-full rounded-lg bg-blue-400 text-white p-2"
      >
        Select
      </button>
    </div>
  )
}

export default Course