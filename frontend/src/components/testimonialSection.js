import Frame50 from './testimonials/frame50'
import Frame51 from './testimonials/frame51'
import Frame52 from './testimonials/frame52'

export default function TestimonialSection() {
  return (
    <div className=" w-screen h-full flex items-center justify-center  mt-5 mb-5">
      <div className="w-19/20  flex flex-col gap-8 p-6 rounded-lg bg-white justify-center items-center font-jakarta overflow-x-hidden">
        <Frame50 />
        <Frame51 />
        <Frame52 />
      </div>
    </div>
  )
}
