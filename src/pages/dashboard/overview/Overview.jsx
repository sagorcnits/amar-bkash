const Overview = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="grid md:grid-cols-4 gap-3 items-center *:shadow *:border *:border-[#d1cfcf] *:p-4 *:rounded-md mt-10 *:text-center *:h-[100px] *:flex *:justify-center *:items-center *:text-[18px] *:font-bold">
      <div className="bg-red-300">
        <h1>Name : {user?.name}</h1>
      </div>
      <div className="bg-green-300">
        <h1>Email : {user?.email}</h1>
      </div>
      <div className="bg-orange-300">
        <h1>Phone : {user?.number}</h1>
      </div>
      <div className="bg-pink-500">
        <h1>Balance : {user?.balance}</h1>
      </div>
    </div>
  );
};

export default Overview;
