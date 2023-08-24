import DrawerButton from "./DrawerButton";

function LayoutDrawer() {
  return (
    <>
      <div className="bg-gray-300 w-80 h-screen p-4">
        <div className="p-4 flex justify-between bg-yellow-200 mb-6">
          <div className="flex">
            <div>icon</div>
            <div>name</div>
          </div>
          <div>close</div>
        </div>
        <div className="flex">
          <div className="p-2 bg-red-200 w-20">
            <div className="bg-orange-500 h-16 w-16 flex justify-center items-center mb-2">
              icon
            </div>
            <div className="bg-orange-500 h-16 w-16 flex justify-center items-center mb-2">
              icon
            </div>
          </div>
          <div className="bg-green-200 w-full">
            <div className="text-4xl">Title</div>
            <div>Desciption</div>
            <div className="flex w-full">
              <div className="bg-black w-px" />
              <div className="mt-4 w-full">
                <DrawerButton>op1</DrawerButton>
                <DrawerButton>op1</DrawerButton>
                <DrawerButton>op1</DrawerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutDrawer;
