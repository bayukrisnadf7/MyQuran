"use client";

import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";
const InputSearch = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  } 
  const handleClose = () => {
    setShowModal(false);
  }
  return (
    <>
      <button className="h-8 flex items-center justify-center dark:bg-color-secondary bg-color-primary cursor-pointer rounded-full p-4">
        <CiSearch
          className="text-color-tertiary dark:text-color-dark flex justify-center"
          size={22}
          type="button"
          onClick={handleOpen}
        />
      </button>
      <Dialog open={showModal} as="div" className="relative z-10 focus:outline-none" onClose={handleClose}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-max justify-center p-4 mt-10">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-white/5 p-6 bg-color-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={handleClose}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default InputSearch;
