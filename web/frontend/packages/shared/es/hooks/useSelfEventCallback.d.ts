/// <reference types="react" />
type EventType = React.BaseSyntheticEvent | Event;
export declare function useSelfEventCallback<T extends EventType = EventType>(callback: (e: T) => void, deps?: React.DependencyList): (this: HTMLElement, e: T) => void;
export {};
