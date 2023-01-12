import { Dialog, Transition } from '@headlessui/react'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { Fragment, } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp({ isOpen, setIsOpen, signinOpen }) {

    function closeModal() {
        setIsOpen(false)
    }

    function signupSubmit(e) {
        e.preventDefault();
        setIsOpen(false)
        signinOpen(true)
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
                                        Signup
                                    </Dialog.Title>
                                    <form name='signinform' onSubmit={signupSubmit} className="my-[20px]">
                                        <div className='border flex gap-[10px] px-[10px] py-[5px] rounded-[10px] my-[15px]'>
                                            <UserIcon className='w-6 text-gray-600' />
                                            <input type="text" required placeholder="username" className='outline-none w-[300px] h-[25px]' />
                                        </div>
                                        <div className='border flex gap-[10px] px-[10px] py-[5px] rounded-[10px] my-[15px]'>
                                            <EnvelopeIcon className='w-6 text-gray-600' />
                                            <input type="Email" required placeholder="email" className='outline-none w-[300px] h-[25px]' />
                                        </div>
                                        <div className='border flex gap-[10px] px-[10px] py-[5px] rounded-[10px] my-[15px]'>
                                            <LockClosedIcon className='w-6 text-gray-600' />
                                            <input type="password" required placeholder="password" className='outline-none w-[300px] h-[25px]' />
                                        </div>
                                        <div className='border flex gap-[10px] px-[10px] py-[5px] rounded-[10px] my-[15px]'>
                                            <LockClosedIcon className='w-6 text-gray-600' />
                                            <input type="password" required placeholder="confirm password" className='outline-none w-[300px] h-[25px]' />
                                        </div>

                                        <div className='flex items-center gap-[5px] relative top-[15px] left-[15px]'>
                                            <input type='checkbox' required /><Link to="/terms" className='text-[13px]'>Agree the Terms and Conditions</Link>
                                        </div>
                                        <button className='py-[5px] px-[10px] bg-yellow-400 w-full my-[25px]'>Sign up</button>

                                        <hr />

                                        <p className='mx-auto w-fit mt-[25px]'>Already have an account? <button className='text-blue-600 hover:underline'>Login</button></p>
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
