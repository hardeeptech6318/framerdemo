import Bookbutton from "./BookButton";
import Wrapper from "./Wrapper";

function Home() {
  return (
    <Wrapper >
      <div className="flex justify-center items-center gap-5 flex-col ">
        <h1 className="  text-heading1 leading-none	 text-center font-medium ">
          Struggling with blah design? <br /> We've got your back.
        </h1>
        <p className=" text-muted mt-1">
          Unlimited design, pause or cancel anytime.
        </p>
        <Bookbutton text="Book a call" />
      </div>
    </Wrapper>
  );
}

export default Home;
