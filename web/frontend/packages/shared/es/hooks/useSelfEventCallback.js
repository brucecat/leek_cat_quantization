import { useCallback } from "react";
export function useSelfEventCallback(callback) {
    var deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return useCallback(function(e) {
        if (e.target === this) {
            callback(e);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        deps
    ]);
}
