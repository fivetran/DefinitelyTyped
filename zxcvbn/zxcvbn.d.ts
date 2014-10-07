declare function zxcvbn(password:string, user_inputs?:string[]):ZxcvbnResult;

interface ZxcvbnResult {
    /**
     *  how long it took to calculate an answer,
     * in milliseconds. usually only a few ms.
     */
    calc_time: number;
    /**
     *  estimation of actual crack time, in seconds.
     */
    crack_time: number;
    /**
     * # same crack time, as a friendlier string:
     * "instant", "6 minutes", "centuries", etc.
     */
    crack_time_display: string;
    /**
     * # bits
     */
    entropy: number;

    password: string;
    /**
     * # [0,1,2,3,4] if crack time is less than
     * [10**2, 10**4, 10**6, 10**8, Infinity].
     * (useful for implementing a strength bar.)
     */
    score: number;
}
