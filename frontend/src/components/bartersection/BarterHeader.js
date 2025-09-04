import Heading from '../Heading'

export default function BarterHeader() {
    return (
      <>
        <div
          className="rounded-2xl p-4 text-white w-35 h-5 flex items-center justify-center mb-5 border-2 border-gray-400"
          style={{
            background: "linear-gradient(to right, #ffffff 0%, rgb(124, 165, 236) 100%)",
          }}
        >
          <h3 className="text-center" style={{ color: "#061C47" }}>
            BENEFITS
          </h3>
        </div>
  
        <div className="w-19/20 mx-auto text-center mb-12">
        <Heading >Built for</Heading>
        <Heading>Sponsors and Organizers Alike</Heading>

          <p className="text-md sm:text-md md:text-lg lg:text-xl text-gray-600 ">
            BarterNow streamlines collaboration, making it easy for both sides to connect, grow and succeed – no matter the scale.
          </p>
        </div>
      </>
    );
  }