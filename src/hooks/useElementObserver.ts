'use client';

import { useState, useRef, useEffect, RefObject } from "react";

function useElementObserver<T extends Element>(options: IntersectionObserverInit): [RefObject<T | null>, boolean] {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const containerRef = useRef<T>(null);

    const callbackFunction = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {

        const [entry] = entries;

        if (entry.intersectionRatio > (options.threshold as number)) {
            setIsVisible(true)
            observer.unobserve(entry.target)
        }

    }

    useEffect(() => {

        const observer = new IntersectionObserver(callbackFunction, options)

        if (containerRef.current)
            observer.observe(containerRef?.current);

        return () => {
            if (containerRef?.current) {
                observer.unobserve(containerRef?.current)
            }
            observer.disconnect()
        }
    }, [isVisible, containerRef])

    return [containerRef, isVisible] as const;
}

export default useElementObserver;