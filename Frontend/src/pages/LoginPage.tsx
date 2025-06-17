import React from 'react';

interface LoginPopupProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc?: string;
    imageAlt?: string;
}

const LoginPopup: React.FC<LoginPopupProps> = ({
    isOpen,
    onClose,
    imageSrc = "./voucher.png",
    imageAlt = "Discount Voucher or Festival Poster",
}) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white w-full max-w-4xl  h-[70vh]  flex rounded-lg shadow-2xl overflow-hidden">
                {/* Left Side: Promotional Image */}
                <div className="w-1/2 hidden md:block">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Right Side: Login Form */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-[#4b3d32]" style={{fontFamily : "font5"}}>Login</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            x
                        </button>
                    </div>
                    <div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2" style={{fontFamily : "font6"}}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-3 focus:ring-[#f0cc8e]"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-3 focus:ring-[#f0cc8e]"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <a href="#" className="text-[#342b24] hover:underline text-sm">
                                Forgot Password?
                            </a>
                            <a href="#" className="text-[#342b24] hover:underline text-sm">
                                Sign Up
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#4b3d32] cursor-pointer text-white py-2 rounded-lg hover:bg-[#382d17] transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                    <p className="text-center text-[#342b24] text-sm mt-4">
                     <i>Exclusive offers on leather products await!</i>  
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;