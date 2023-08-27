

const Tasks = () => {
    return (
        <div className="w-9/12">
            <div className="mt-10 ml-10 flex md:justify-between ">
           <div>
           <h1 className="text-4xl font-sans font-bold">Task</h1>
           </div>
            <div className="space-x-3">
            <input type="text" placeholder="Search" className="input input-bordered w-1/2 " />
                <button className="bg-blue-600 text-white rounded-md p-2 mt-3">Add Task</button>
            </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ml-10 mt-10 justify-center">
            <h1 className="bg-purple-200 rounded-lg p-4">Up Next</h1>
            <h1 className="bg-purple-200 rounded-lg p-4">In Progress</h1>
            <h1 className="bg-purple-200 rounded-lg p-4">Up Next</h1>
          </div>
        </div>
    );
};

export default Tasks;