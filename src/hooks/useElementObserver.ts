'use client';

import { useState, useRef, useEffect, RefObject } from "react";

function useElementObserver<T extends Element>(options: IntersectionObserverInit): [RefObject<T | null>, boolean] {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const containerRef = useRef<T>(null);

    useEffect(() => {

        const callbackFunction = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {

            const [entry] = entries;

            if (entry.intersectionRatio > (options.threshold as number)) {
                setIsVisible(true)
                observer.unobserve(entry.target)
            }

        }

        const observer = new IntersectionObserver(callbackFunction, options)

        const current = containerRef?.current;

        if (current)
            observer.observe(current);

        return () => {
            if (current) {
                observer.unobserve(current)
            }
            observer.disconnect()
        }
    }, [isVisible, containerRef , options])

    return [containerRef, isVisible] as const;
}

export default useElementObserver;