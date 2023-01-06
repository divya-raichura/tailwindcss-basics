function Link() {
  return (
    <div className=" h-24 w-48 flex justify-center items-center bg-white rounded-lg">
      {/* <button className="bg-sky-500 hover:bg-sky-700 px-5 py-1.5 rounded-full text-white">
        Save changes
      </button> */}
      <a href="#" className="font-medium text-red-700 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-lg">Save Changes</a>
    </div>
  );
}
export default Link;
