import React, { CSSProperties, Fragment, useRef } from "react";

import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";
import { HiX } from "react-icons/hi";

export interface ModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    closeButton?: boolean;
    title?: React.ReactNode;
    titleClassName?: string;
    subtitle?: React.ReactNode;
    bgColor?: string;
    hideOverflow?: boolean;
    IconTitle?: React.FC<React.ComponentProps<"svg">>;
    style?: CSSProperties | undefined;
    children: React.ReactNode;
    /**
     * It changes the max-width of the modal
     * default = 'sm:max-w-lg'. Its a tailwind class to set a max-width.
     */
    size?: string;

    preventClosingOnClickOutside?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    open,
    setOpen,
    closeButton = false,
    title,
    titleClassName,
    subtitle,
    IconTitle,
    children,
    hideOverflow = false,
    style,
    bgColor = "bg-white",
    size = "sm:max-w-lg",
    preventClosingOnClickOutside = false,
}) => {
    // passage de la ref Dom du composant
    const refDiv = useRef(null);
    return (
        <Transition.Root show={open} as={Fragment} appear>
            <Dialog
                as="div"
                static
                className="fixed inset-0 z-50 overflow-y-auto"
                open={open}
                onClose={preventClosingOnClickOutside ? () => {} : setOpen}
                initialFocus={refDiv}
            >
                <div
                    className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
                    ref={refDiv}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className={clsx(
                                "inline-block px-4 pt-5 pb-4 text-left align-bottom transition-all transform border border-black rounded-lg shadow-xl sm:my-8 sm:align-middle w-4/5 sm:p-6",
                                {
                                    "overflow-hidden": hideOverflow,
                                },
                                size,
                                bgColor
                            )}
                            {...(style ? { style } : undefined)}
                        >
                            <div>
                                {title && (
                                    <Dialog.Title
                                        as="h3"
                                        className={clsx(
                                            titleClassName ||
                                                "text-2xl leading-8 md:text-3xl font-semibold md:leading-9 text-indigo-900",
                                            "flex items-center mb-3"
                                        )}
                                    >
                                        <div className={clsx("flex w-full")}>
                                            <div className="flex">
                                                {IconTitle && (
                                                    <IconTitle className="w-6 h-6 mt-1.5 mr-3 text-indigo-900" />
                                                )}
                                                <p className="mr-6">{title}</p>
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                )}
                                {closeButton && (
                                    <div
                                        className="absolute right-4 top-4"
                                        onClick={() => setOpen(false)}
                                        onKeyDown={() => setOpen(false)}
                                        role="button"
                                    >
                                        <HiX
                                            className={clsx(
                                                "w-6 h-6  cursor-pointer",
                                                {
                                                    "text-white":
                                                        bgColor === "bg-black",
                                                    "text-black":
                                                        bgColor !== "bg-black",
                                                }
                                            )}
                                        />
                                    </div>
                                )}
                                {subtitle && (
                                    <p className="mb-3 text-sm text-gray-400">
                                        {subtitle}
                                    </p>
                                )}
                            </div>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;
