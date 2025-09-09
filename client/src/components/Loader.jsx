
const Loader = () => {
  return (
    <div className="h-screen loader-container w-screen flex justify-center items-center">
        <h1 className=" absolute top-[30%] text-2xl font-bold">LOADING...</h1>
        <h1 className=" absolute top-[20%] text-2xl font-bold">Welcome to <span className="text-3xl underline">StyleHub</span> </h1>
<div className="spinner" />
    </div>
  );
};

export default Loader;
