import { useProducer } from "@rbxts/react-reflex";
import { useCallback } from "@rbxts/react";

//useOverlayAction runs your callback, and closes the current overlay (itself) when running it
export function useOverlayAction<T extends (...args: any[]) => any>(callback: T, deps: any[]): T {
	const { resetOverlay } = useProducer<RootProducer>();

	return useCallback((...args: Parameters<T>) => {
		resetOverlay();
		return callback(...(args as unknown[]));
	}, deps) as T;
}
