
/**
 * Sleep
 * @description simulates an async action, delayed by a given number of milliseconds
 * @param ms the amount of time (in milliseconds) to simulate an async action
 * @returns a new `Promise`
 */
export const sleep = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}