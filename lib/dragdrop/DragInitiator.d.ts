import React, { CSSProperties } from "react";
import * as DragManager from "./DragManager";
export declare type AbstractPointerEvent = MouseEvent | TouchEvent;
declare type PointerEventHandler = (e: AbstractPointerEvent, dx: number, dy: number, pageX: number, pageY: number) => void;
export declare type DragInitFunction = (referenceElement: HTMLElement, moveListener?: PointerEventHandler, endListener?: PointerEventHandler) => void;
export declare type DragInitHandler = (event: PointerEvent, initFunction: DragInitFunction) => void;
interface DragInitiatorProps {
    className?: string;
    style?: CSSProperties;
    getRef?: (ref: HTMLDivElement) => void;
    onDragInit?: DragInitHandler;
    onDragStart?: DragManager.DragHandler;
    onDragMove?: DragManager.DragHandler;
    onDragEnd?: DragManager.DragHandler;
    onDragOver?: DragManager.DragHandler;
    onDragLeave?: DragManager.DragHandler;
    onDrop?: DragManager.DragHandler;
}
export declare class DragInitiator extends React.Component<DragInitiatorProps, any> {
    _ref: HTMLDivElement;
    _getRef: (r: HTMLDivElement) => void;
    moveListener?: PointerEventHandler;
    endListener?: PointerEventHandler;
    dragging: boolean;
    isTouch: boolean;
    baseX: number;
    baseY: number;
    scaleX: number;
    scaleY: number;
    waitingMove: boolean;
    onPointerDown: (e: React.PointerEvent<Element>) => void;
    addListeners(e: React.PointerEvent): void;
    checkFirstMove(e: AbstractPointerEvent): boolean;
    onMouseMove: (e: MouseEvent) => void;
    onMouseEnd: (e?: MouseEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: (e?: TouchEvent) => void;
    onEnd(): void;
    render(): React.ReactNode;
    componentWillUnmount(): void;
}
export {};