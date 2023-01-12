import { Dialog, Transition } from '@headlessui/react'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Fragment, } from 'react'

export default function Login({ isOpen, setIsOpen, signupOpen }) {

    function closeModal() {
        setIsOpen(false)
    }

    function loginSubmit(e) {
        e.preventDefault();
        var link = document.createElement('a')
        link.href = "/result"
        link.click();
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Login
                                    </Dialog.Title>
                                    <form name='signinform' onSubmit={loginSubmit} className="my-[20px]">
                                        <div className='border flex gap-[10px] px-[10px] py-[5px] rounded-[10px] my-[15px]'>
                                            <EnvelopeIcon className='w-6 text-gray-600' />
                                            <input type="Email" placeholder="email" required className='outline-none w-[300px] h-[25px]' />

                                        </div>
                                        <div className='border flex gap-[10px] px-[10px] py-[5px] rounded-[10px] my-[15px]'>
                                            <LockClosedIcon className='w-6 text-gray-600' />
                                            <input type="password" placeholder="password" required className='outline-none w-[300px] h-[25px]' />
                                        </div>
                                        <button className='py-[5px] px-[10px] bg-yellow-400 w-full my-[25px]'>Sign in</button>

                                        <hr/>

                                        <p className='mx-auto w-fit mt-[25px]'>Don't have an account? <button onClick={(e) => {e.preventDefault();setIsOpen(false); signupOpen(true)}} className='text-blue-600 hover:underline'>Create Account</button></p>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
