import { useRef } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Foreground = () => {
    const forgroundRef = useRef();
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".5mb",
            close: true,
            tag: {
                isOpen: true,
                tagDetails: "Download Now",
                tagColor: "green",
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".5mb",
            close: false,
            tag: {
                isOpen: true,
                tagDetails: "Download Now",
                tagColor: "blue",
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".5mb",
            close: false,
            tag: {
                isOpen: false,
                tagDetails: "Download Now",
                tagColor: "green",
            },
        },
    ];


    return (
        <>
            <div ref={forgroundRef} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
              <Navbar />
              {data.map((item, index) => (
                <Card key={index} data={item} reference={forgroundRef} />
              ))}
            </div>
        </>
    );
};

export default Foreground;
