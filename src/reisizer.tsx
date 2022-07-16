import React, {useEffect, useRef} from "react";

export const Resizer = () => {
    const ref = useRef<HTMLDivElement>(null)
    const refLeft = useRef<HTMLDivElement>(null)
    const refTop = useRef<HTMLDivElement>(null)
    const refRight = useRef<HTMLDivElement>(null)
    const refBottom = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const resizeableEle = ref.current;
        // @ts-ignore
        const styles = window.getComputedStyle(resizeableEle);
        let width = parseInt(styles.width, 10);
        let height = parseInt(styles.height, 10);
        let x = 0;
        let y = 0;

        // // @ts-ignore
        // resizeableEle.style.top = "50px";
        // // @ts-ignore
        // resizeableEle.style.left = "50px";

        // Right resize
        const onMouseMoveRightResize = (event: { clientX: number; }) => {
            const dx = event.clientX - x;
            x = event.clientX;
            width = width + dx;
            // @ts-ignore
            resizeableEle.style.width = `${width}px`;
        };

        const onMouseUpRightResize = () => {
            document.removeEventListener("mousemove", onMouseMoveRightResize);
        };

        const onMouseDownRightResize = (event: { clientX: number; }) => {
            x = event.clientX;
            // @ts-ignore
            resizeableEle.style.left = styles.left;
            // @ts-ignore
            resizeableEle.style.right = null;
            document.addEventListener("mousemove", onMouseMoveRightResize);
            document.addEventListener("mouseup", onMouseUpRightResize);
        };

        // // Left resize
        // const onMouseMoveLeftResize = (event: { clientX: number; }) => {
        //     const dx = event.clientX - x;
        //     x = event.clientX;
        //     width = width - dx;
        //     // @ts-ignore
        //     resizeableEle.style.width = `${width}px`;
        // };
        //
        // const onMouseUpLeftResize = () => {
        //     document.removeEventListener("mousemove", onMouseMoveLeftResize);
        // };
        //
        // const onMouseDownLeftResize = (event: { clientX: number; }) => {
        //     x = event.clientX;
        //     // @ts-ignore
        //     resizeableEle.style.right = styles.right;
        //     // @ts-ignore
        //     resizeableEle.style.left = null;
        //     document.addEventListener("mousemove", onMouseMoveLeftResize);
        //     document.addEventListener("mouseup", onMouseUpLeftResize);
        // };

        // Add mouse down event listener
        const resizerRight = refRight.current;
        // @ts-ignore
        resizerRight.addEventListener("mousedown", onMouseDownRightResize);
        const resizerLeft = refLeft.current;
        // @ts-ignore
        // resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

        return () => {
            // @ts-ignore
            resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
            // @ts-ignore
            resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
        };
    }, []);
    return (
        <div className="container">
            <div ref={ref} className={"resizable"}>
                <div ref={refLeft} className={"resizer resizer-l"}></div>
                <div ref={refTop} className={"resizer resizer-t"}></div>
                <div ref={refRight} className={"resizer resizer-r"}></div>
                <div ref={refBottom} className={"resizer resizer-b"}></div>
            </div>
        </div>
    );
};

export default Resizer;