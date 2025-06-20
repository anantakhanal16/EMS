import React from 'react'

const CreateTask = () => {
  return (
    <div class="p-5 bg-[#1c1c1c] mt-5 rounded">
  <form class="flex flex-wrap w-full items-start justify-between">
    <div class="w-1/2">
      <div>
        <h3 class="text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input
          class="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="text"
          placeholder="Make a UI design"
        />
      </div>
      <div>
        <h3 class="text-sm text-gray-300 mb-0.5">Date</h3>
        <input
          class="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="date"
        />
      </div>
      <div>
        <h3 class="text-sm text-gray-300 mb-0.5">Asign to</h3>
        <input
          class="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="text"
          placeholder="employee name"
        />
      </div>
      <div>
        <h3 class="text-sm text-gray-300 mb-0.5">Category</h3>
        <input
          class="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="text"
          placeholder="design, dev, etc"
        />
      </div>
    </div>

    <div class="w-2/5 flex flex-col items-start">
      <h3 class="text-sm text-gray-300 mb-0.5">Description</h3>
      <textarea
        class="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
      ></textarea>
      <button
        type="submit"
        class="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
      >
        Create Task
      </button>
    </div>
  </form>
</div>

  )
}

export default CreateTask