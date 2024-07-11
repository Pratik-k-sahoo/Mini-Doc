import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="absolute top-[5%] w-full py-10 flex justify-center gap-12 text-zinc-400 text-2xl font-semibold">
            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-zinc-400 px-5 py-3 rounded-3xl text-zinc-900"
            >
                Home
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-zinc-400 px-5 py-3 rounded-3xl text-zinc-900"
            >
                About
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-zinc-400 px-5 py-3 rounded-3xl text-zinc-900"
            >
                Contact Us
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-zinc-400 px-5 py-3 rounded-3xl text-zinc-900"
            >
                Document
            </motion.button>
        </div>
    );
};

export default Navbar;
