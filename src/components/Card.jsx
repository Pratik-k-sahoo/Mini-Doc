/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
    return (
        <>
            <motion.div
                drag
                dragConstraints={reference}
                className="flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden"
                whileDrag={{scale: 1.2}}
            >
                <FaRegFileAlt />
                <p className="text-sm leading-tight mt-5 font-semibold">
                    {data.desc}
                </p>
                <div className="footer absolute bottom-0 left-0 w-full text-lg">
                    <div className="flex justify-between items-center px-8 py-3 mb-3">
                        <h5>{data.fileSize}</h5>
                        <button className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center">
                            {data.close ? (
                                <IoCloseOutline size=".9em" color="#000" />
                            ) : (
                                <FiDownload size=".9em" color="#000" />
                            )}
                        </button>
                    </div>
                    {data.tag.isOpen && (
                        <div
                            className={
                                data.tag.tagColor === "blue"
                                    ? `tag w-full py-4 bg-blue-600 flex items-center justify-center`
                                    : `tag w-full py-4 bg-green-600 flex items-center justify-center`
                            }
                        >
                            <h3 className="text-xl font-semibold">
                                {data.tag.tagDetails}
                                {data.tag.tagColor}
                            </h3>
                        </div>
                    )}
                </div>
                data tag
            </motion.div>
        </>
    );
};

export default Card;
