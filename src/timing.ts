/**
 * Base stub for creating PerformanceTiming objects.
 */
const performanceTiming = {
    connectEnd: 0,
    connectStart: 0,
    domComplete: 0,
    domContentLoadedEventEnd: 0,
    domContentLoadedEventStart: 0,
    domInteractive: 0,
    domLoading: 0,
    domainLookupEnd: 0,
    domainLookupStart: 0,
    fetchStart: 0,
    loadEventEnd: 0,
    loadEventStart: 0,
    msFirstPaint: 0,
    navigationStart: 0,
    redirectEnd: 0,
    redirectStart: 0,
    requestStart: 0,
    responseEnd: 0,
    responseStart: 0,
    secureConnectionStart: 0,
    toJSON: (): string => JSON.stringify(performanceTiming),
    unloadEventEnd: 0,
    unloadEventStart: 0,
};

/**
 * Creates a stub version of a performance timing object.
 *
 * @param overrides   Any attributes to apply on top of the defaults.
 * @returns Stub version of a performance timing object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/timing
 */
export const createStubPerformanceTiming = (overrides: Partial<typeof performanceTiming> = {}) => {
    return {
        ...performanceTiming,
        ...overrides,
    };
};
